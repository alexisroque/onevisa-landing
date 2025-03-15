"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "OneVisa transformó completamente nuestra presencia digital. Nuestro tráfico web aumentó un 150% en solo tres meses y las conversiones se duplicaron.",
    author: "Carlos Méndez",
    position: "Director de Marketing, TechSolutions",
    rating: 5
  },
  {
    quote: "El equipo de OneVisa entendió perfectamente nuestras necesidades y entregó un sitio web que superó todas nuestras expectativas. El proceso fue fluido y profesional.",
    author: "Ana García",
    position: "CEO, Innovatech",
    rating: 5
  },
  {
    quote: "La atención al detalle y el soporte continuo que recibimos de OneVisa ha sido excepcional. Recomendaría sus servicios a cualquier empresa que busque resultados reales.",
    author: "Miguel Rodríguez",
    position: "Fundador, CreativeStudio",
    rating: 5
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
          </h2>
          <p className="section-description">
            Historias reales de empresas que han transformado su presencia digital con nosotros.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group relative"
            >
              {/* Comillas decorativas */}
              <div className="absolute -top-3 -left-3 text-4xl text-primary opacity-20">"</div>
              
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-primary' : 'text-gray-dark'
                    }`}
                    fill={i < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-gray-light mb-6 relative z-10">"{testimonial.quote}"</p>
              
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-light text-sm">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-dark-lighter border border-dark-lightest">
            <span className="text-primary font-semibold mr-2">4.9</span>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
              ))}
            </div>
            <span className="ml-2 text-gray-light">Basado en más de 200 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
} 