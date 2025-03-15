"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pricingPlans = [
  {
    name: 'Básico',
    price: '$1,999',
    description: 'Ideal para pequeñas empresas que están comenzando su presencia digital.',
    features: [
      'Sitio web responsive',
      'Hasta 5 páginas',
      'Formulario de contacto',
      'Optimización SEO básica',
      'Integración con redes sociales',
      'Soporte por email'
    ],
    popular: false
  },
  {
    name: 'Profesional',
    price: '$3,999',
    description: 'Perfecto para negocios en crecimiento que necesitan más funcionalidades.',
    features: [
      'Todo lo del plan Básico',
      'Hasta 10 páginas',
      'Blog integrado',
      'Optimización SEO avanzada',
      'Análisis de tráfico',
      'Integración con CRM',
      'Soporte prioritario',
      'Actualizaciones mensuales'
    ],
    popular: true
  }
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Precios <span className="text-primary">Transparentes</span>, Valor Inigualable
          </h2>
          <p className="section-description">
            Planes flexibles que crecen con tu negocio. Sin costos ocultos ni sorpresas.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden group ${
                plan.popular 
                  ? 'border-2 border-primary bg-dark-lighter glow' 
                  : 'border border-dark-lightest bg-dark-lighter/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Más Popular
                  </div>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-light mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-light ml-2">/ mes</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="ml-3 text-gray-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? 'primary' : 'outline'} 
                  className="w-full"
                >
                  Comenzar Ahora
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-light">
            ¿Necesitas un plan personalizado? <a href="#contact" className="text-primary hover:underline">Contáctanos</a> para una cotización a medida.
          </p>
        </div>
      </div>
    </section>
  );
} 