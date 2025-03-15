"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "../../lib/utils"

// Configuración personalizada para OneVisa
const GLOBE_CONFIG: COBEOptions = {
  width: 1200, // Aumentado para mayor resolución
  height: 1200, // Aumentado para mayor resolución
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1, // Modo oscuro para combinar con el tema
  diffuse: 0.6,
  mapSamples: 16000,
  mapBrightness: 1.5,
  baseColor: [0.3, 0.3, 0.3], // Color base más oscuro
  markerColor: [0.1, 0.8, 0.1], // Color verde para los marcadores (similar al color primario)
  glowColor: [0.1, 0.8, 0.1], // Brillo verde
  markers: [
    // Principales destinos de visados de estudiantes
    { location: [51.5074, -0.1278], size: 0.1 }, // Londres, Reino Unido
    { location: [40.7128, -74.0060], size: 0.1 }, // Nueva York, EE.UU.
    { location: [43.6532, -79.3832], size: 0.08 }, // Toronto, Canadá
    { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney, Australia
    { location: [1.3521, 103.8198], size: 0.07 }, // Singapur
    { location: [48.8566, 2.3522], size: 0.09 }, // París, Francia
    { location: [52.5200, 13.4050], size: 0.08 }, // Berlín, Alemania
    { location: [55.6761, 12.5683], size: 0.06 }, // Copenhague, Dinamarca
    { location: [41.9028, 12.4964], size: 0.07 }, // Roma, Italia
    { location: [40.4168, -3.7038], size: 0.09 }, // Madrid, España
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokio, Japón
    { location: [22.3193, 114.1694], size: 0.07 }, // Hong Kong
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => {
      window.removeEventListener("resize", onResize)
      globe.destroy()
    }
  }, [])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-[150%] max-w-none left-[-25%]", // Aumentado el ancho y centrado
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
} 