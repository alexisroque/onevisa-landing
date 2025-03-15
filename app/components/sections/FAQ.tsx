"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo se integra OneVisa con nuestros sistemas actuales?',
    answer: 'OneVisa ofrece múltiples opciones de integración, incluyendo una API completa, webhooks y conectores para los sistemas de gestión más populares. Nuestro equipo técnico te guiará durante todo el proceso de implementación para garantizar una transición sin problemas.'
  },
  {
    question: '¿Qué tipos de visados puede procesar la plataforma?',
    answer: 'Nuestra plataforma está optimizada para procesar visados de estudiante, trabajo, turismo y negocios en más de 30 países. La IA se adapta constantemente a los cambios regulatorios y requisitos específicos de cada tipo de visado y país de destino.'
  },
  {
    question: '¿Cuál es el modelo de precios de OneVisa?',
    answer: 'Ofrecemos un modelo de precios flexible basado en el volumen de visados procesados, sin costos fijos mensuales. Esto permite a las agencias y escuelas escalar sin riesgos, pagando solo por lo que utilizan. Contáctanos para recibir una cotización personalizada.'
  },
  {
    question: '¿Cómo garantiza OneVisa la seguridad de los datos?',
    answer: 'Implementamos cifrado de extremo a extremo, servidores con certificación ISO 27001, y cumplimos con todas las normativas de protección de datos (RGPD, CCPA). Además, realizamos auditorías de seguridad periódicas y mantenemos copias de seguridad encriptadas.'
  },
  {
    question: '¿Qué soporte ofrece OneVisa después de la implementación?',
    answer: 'Proporcionamos soporte técnico 24/7, un gestor de cuenta dedicado, actualizaciones regulares del sistema y acceso a nuestra base de conocimientos. También ofrecemos formación continua para que tu equipo aproveche al máximo todas las funcionalidades.'
  },
  {
    question: '¿Cuánto tiempo lleva implementar OneVisa en nuestra organización?',
    answer: 'El tiempo de implementación varía según la complejidad de tu organización, pero generalmente oscila entre 2 y 4 semanas. Esto incluye la configuración, integración con sistemas existentes, migración de datos y formación del personal.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="section-description">
            Respuestas a las dudas más comunes sobre nuestra plataforma de automatización de visados.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-dark border border-dark-lightest rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-light border-t border-dark-lightest">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-light mb-4">¿No encuentras la respuesta que buscas?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contáctanos para más información
              <ChevronDown className="ml-2 w-4 h-4 transform -rotate-90" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 