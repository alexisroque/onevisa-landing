"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Upload, Bot, FileCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-10 h-10 text-primary" />,
    title: 'Envío de Solicitud',
    description: 'Sube los documentos del solicitante a través de nuestra plataforma intuitiva o integra tu sistema actual mediante nuestra API.'
  },
  {
    icon: <Bot className="w-10 h-10 text-primary" />,
    title: 'Validación con IA',
    description: 'Nuestra inteligencia artificial analiza y optimiza cada solicitud, identificando posibles problemas y sugiriendo mejoras.'
  },
  {
    icon: <FileCheck className="w-10 h-10 text-primary" />,
    title: 'Procesamiento Automático',
    description: 'El sistema completa formularios, genera documentación adicional y prepara el expediente para su presentación oficial.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: 'Aprobación Rápida',
    description: 'Seguimiento en tiempo real del estado de la solicitud hasta la aprobación final, con notificaciones automáticas en cada etapa.'
  }
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Cómo <span className="text-primary">Funciona</span> OneVisa
          </h2>
          <p className="section-description">
            Un proceso simple y eficiente para automatizar la tramitación de visados de principio a fin.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Línea conectora */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-dark-lightest hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center mb-4">
                    <div className="bg-dark-lighter rounded-full p-4 relative z-10">
                      {step.icon}
                    </div>
                    <div className="ml-4">
                      <span className="text-primary font-bold">Paso {index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-light max-w-md">{step.description}</p>
                </div>
                
                <div className="w-full md:w-1/2 bg-dark-lighter rounded-lg p-6 border border-dark-lightest">
                  <div className="aspect-video bg-dark rounded-md flex items-center justify-center">
                    <span className="text-primary font-medium">Ilustración {index + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 