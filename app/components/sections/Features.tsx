"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Shield, Zap, Globe, BarChart, Users, Brain, TrendingUp, Scale } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'Inteligencia Artificial Avanzada',
    description: 'Nuestro sistema optimiza cada solicitud con IA, adaptándose automáticamente a cambios regulatorios y requisitos específicos.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    title: 'Máxima Tasa de Aceptación',
    description: 'Conseguimos las tasas de aprobación más altas del mercado gracias a nuestros algoritmos predictivos y validación automática.'
  },
  {
    icon: <Scale className="w-6 h-6 text-primary" />,
    title: 'Escalabilidad Sin Costos Fijos',
    description: 'Escala tu negocio sin aumentar costos operativos, pagando solo por los visados procesados.'
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Procesamiento Ultrarrápido',
    description: 'Reducimos drásticamente los tiempos de tramitación, permitiéndote ofrecer un servicio más ágil a tus clientes.'
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: 'Seguridad y Cumplimiento',
    description: 'Cumplimos con todas las normativas de protección de datos y requisitos legales en cada país donde operamos.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Soporte Especializado',
    description: 'Equipo de expertos en inmigración disponible para resolver cualquier incidencia o consulta específica.'
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Beneficios <span className="text-primary">Clave</span> de OneVisa
          </h2>
          <p className="section-description">
            Nuestra plataforma SaaS de automatización de visados ofrece ventajas únicas para agencias y escuelas.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card card-hover group"
            >
              <div className="bg-dark-lightest rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-dark-lighter border border-dark-lightest">
            <div className="flex space-x-1">
              {[1, 2, 3].map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: num * 0.2 }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </div>
            <span className="ml-3 mr-2 text-sm text-gray-light">Más funcionalidades en desarrollo</span>
          </div>
        </div>
      </div>
    </section>
  );
} 