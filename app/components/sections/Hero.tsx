"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Globe } from '../ui/Globe';
import { ArrowRight } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden pt-20">
      {/* Fondo con estrellas y efecto espacial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-lighter/10 via-dark to-dark z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      
      {/* Planeta/Globo en el fondo */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10"></div>
        <div className="relative w-[200%] h-[200%] left-[-50%] bottom-[-130%]">
          <div className="absolute inset-0 bg-dark/30 z-5"></div>
          <div className="w-full h-full rounded-full border border-primary/5 overflow-hidden">
            <Globe />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Pill button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-dark-lighter/50 backdrop-blur-sm border border-dark-lightest">
              <span className="text-gray-light text-sm">Tramitamos visados que importan, clientes que no pueden resistirse</span>
              <ArrowRight className="ml-2 w-4 h-4 text-primary" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Tramitación que impulsa
              <br />
              <span className="text-primary">crecimiento real</span>
            </h1>
            
            <p className="text-gray-light text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Ayudamos a agencias y escuelas a externalizar la tramitación de visados, asegurando la máxima tasa de aceptación y eliminando el trabajo manual.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg">Solicitar Demo</Button>
              <Button variant="outline" size="lg">Conocer Más</Button>
            </div>
            
            {/* Spots disponibles */}
            <div className="mt-8 inline-flex items-center">
              <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
              <span className="text-gray-light text-sm">2 Plazas Disponibles</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 