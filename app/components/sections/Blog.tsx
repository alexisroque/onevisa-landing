"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Cambios en la regulación de visados de estudiante en Europa para 2024',
    excerpt: 'Análisis de las nuevas normativas que afectarán a los estudiantes internacionales que deseen estudiar en países de la Unión Europea.',
    author: 'María González',
    date: '15 Mar 2024',
    category: 'Regulaciones',
    image: '/placeholder.jpg'
  },
  {
    title: 'Cómo la IA está transformando el proceso de solicitud de visados',
    excerpt: 'Descubre las tecnologías de inteligencia artificial que están revolucionando la forma en que se procesan y aprueban los visados internacionales.',
    author: 'Carlos Martínez',
    date: '28 Feb 2024',
    category: 'Tecnología',
    image: '/placeholder.jpg'
  },
  {
    title: 'Las 5 razones principales de rechazo de visados y cómo evitarlas',
    excerpt: 'Analizamos los errores más comunes que llevan al rechazo de solicitudes de visado y ofrecemos consejos prácticos para aumentar las probabilidades de aprobación.',
    author: 'Ana Rodríguez',
    date: '10 Feb 2024',
    category: 'Consejos',
    image: '/placeholder.jpg'
  }
];

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Últimas <span className="text-primary">Noticias</span> y Tendencias
          </h2>
          <p className="section-description">
            Mantente al día con los cambios en regulaciones de visados y las últimas tendencias en la industria.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover group"
            >
              <div className="relative aspect-video bg-dark-lighter rounded-lg mb-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-dark/50 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-medium py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-light mb-3">
                <div className="flex items-center mr-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-light mb-4">
                {post.excerpt}
              </p>
              
              <a href="#" className="inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                Leer más <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md font-medium"
          >
            Ver todos los artículos
          </a>
        </div>
      </div>
    </section>
  );
} 