"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Globe } from '../ui/Globe';

export default function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["visado", "soporte", "matriculación", "cualificación", "asesoría"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-screen flex items-center bg-dark overflow-hidden pt-20">
      {/* Fondo con gradiente y efecto */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-lighter/20 via-dark to-dark z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      {/* Background del globo para todo el Hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(16,185,129,0.08),rgba(255,255,255,0))] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span>Lleva tu proceso de</span>
                <div className="relative inline-flex overflow-hidden h-[60px] md:h-[70px] lg:h-[80px] min-w-[250px] md:min-w-[350px] lg:min-w-[400px] justify-center">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute text-primary w-full text-center"
                      initial={{ opacity: 0, y: "100%" }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 100,
                        damping: 15
                      }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -100 : 100,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                  <span className="opacity-0">{titles[0]}</span>
                </div>
              </div>
              <span className="mt-2 block">al siguiente nivel</span>
            </h1>
            <p className="text-gray-light text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Ayudamos a agencias y escuelas a externalizar la tramitación de visados, asegurando la máxima tasa de aceptación y eliminando el trabajo manual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg">Solicitar Demo</Button>
              <Button variant="outline" size="lg">Conocer Más</Button>
            </div>
            
            {/* Contenedor para el globo y los KPIs */}
            <div className="relative w-full max-w-4xl mx-auto mt-2">
              {/* Globo terráqueo */}
              <div className="relative h-[350px] w-full overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative h-[700px] w-full"
                >
                  <Globe />
                  
                  {/* Gradiente para suavizar la transición al panel de KPIs */}
                  <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-dark to-transparent"></div>
                </motion.div>
              </div>
              
              {/* KPIs que cortan el globo */}
              <div className="grid grid-cols-3 gap-8 relative z-20 bg-dark/90 backdrop-blur-md py-8 px-6 rounded-lg border border-dark-lightest shadow-xl mt-[-120px]">
                <div className="text-center">
                  <p className="text-primary text-4xl font-bold">98%</p>
                  <p className="text-gray-light text-sm mt-2">Tasa de Aceptación</p>
                </div>
                <div className="text-center">
                  <p className="text-primary text-4xl font-bold">75%</p>
                  <p className="text-gray-light text-sm mt-2">Reducción de Tiempo</p>
                </div>
                <div className="text-center">
                  <p className="text-primary text-4xl font-bold">100+</p>
                  <p className="text-gray-light text-sm mt-2">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 