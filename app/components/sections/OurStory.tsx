"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transformar el progreso del scroll para animar el texto y el paralaje
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [80, -30]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.25, 0.6], [0, 1, 1]);
  const statsOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Animación para los círculos decorativos
  const circle1Scale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1.2]);
  const circle2X = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "10%"]);
  
  return (
    <section ref={sectionRef} className="relative py-32 bg-dark overflow-hidden min-h-screen flex items-center">
      {/* Fondo abstracto generado con CSS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/90 z-10"></div>
        <motion.div 
          style={{ y: parallaxY }}
          className="relative h-full w-full bg-gradient-to-br from-dark-lighter via-dark to-dark"
        >
          {/* Elementos decorativos para el fondo abstracto */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-transparent to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
          
          {/* Formas adicionales para el fondo */}
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-3xl"></div>
        </motion.div>
      </div>
      
      {/* Círculos decorativos con animación */}
      <motion.div 
        style={{ scale: circle1Scale }}
        className="absolute right-0 top-1/4 w-[300px] h-[300px] border-4 border-primary/30 rounded-full z-10 opacity-60"
      ></motion.div>
      <motion.div 
        style={{ x: circle2X }}
        className="absolute right-[10%] bottom-1/4 w-[200px] h-[200px] bg-primary/20 rounded-full z-10 blur-md"
      ></motion.div>
      
      {/* Elementos decorativos adicionales */}
      <div className="absolute left-[5%] top-1/3 w-[150px] h-[150px] border-2 border-primary/20 rounded-full z-10 opacity-40"></div>
      <div className="absolute left-[15%] bottom-1/4 w-[100px] h-[100px] bg-primary/10 rounded-full z-10 blur-sm"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Título de la sección */}
          <motion.div
            style={{ opacity }}
            className="mb-8 text-center"
          >
            <h2 className="text-primary text-base md:text-lg font-medium">[ Nuestra Historia ]</h2>
          </motion.div>
          
          {/* Texto principal con animación */}
          <motion.div
            style={{ y: textY, opacity }}
            className="text-center overflow-hidden"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              En OneVisa, automatizamos la tramitación de visados para que agencias y escuelas puedan centrarse en lo que realmente importa: sus estudiantes. Impulsados por la innovación y la eficiencia, ayudamos a las empresas a optimizar sus procesos mediante tecnología avanzada y soluciones personalizadas.
            </p>
          </motion.div>
          
          {/* Estadísticas */}
          <motion.div 
            style={{ opacity: statsOpacity }}
            className="grid grid-cols-3 gap-8 mt-20"
          >
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">98</span><span className="text-primary">%</span>
              </p>
              <p className="text-gray-light text-sm mt-2">Tasa de Aceptación</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">75</span><span className="text-primary">%</span>
              </p>
              <p className="text-gray-light text-sm mt-2">Reducción de Tiempo</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">100</span><span className="text-primary">+</span>
              </p>
              <p className="text-gray-light text-sm mt-2">Clientes Satisfechos</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 