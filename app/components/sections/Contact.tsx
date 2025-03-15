"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      
      // Resetear el estado después de 3 segundos
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            Solicita una <span className="text-primary">Demo Personalizada</span>
          </h2>
          <p className="section-description">
            Descubre cómo OneVisa puede transformar la gestión de visados en tu agencia o escuela.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">Agenda tu demostración</h3>
            
            {submitted ? (
              <div className="bg-primary/10 border border-primary rounded-lg p-4 text-center">
                <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">¡Solicitud recibida!</h4>
                <p className="text-gray-light">Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-light mb-2">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-dark-lightest rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-light mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-dark-lightest rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-light mb-2">Agencia o Escuela</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-dark-lightest rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="Nombre de tu agencia o escuela"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-light mb-2">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark border border-dark-lightest rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-light mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-dark border border-dark-lightest rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white resize-none"
                      placeholder="Cuéntanos sobre tu agencia y tus necesidades específicas"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Solicitar Demo'}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">¿Por qué solicitar una demo?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-dark-lighter rounded-full p-3 mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Personalización</h4>
                    <p className="text-gray-light">Verás cómo OneVisa se adapta a las necesidades específicas de tu agencia o escuela.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-lighter rounded-full p-3 mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Consultoría Gratuita</h4>
                    <p className="text-gray-light">Nuestros expertos analizarán tu proceso actual y te mostrarán cómo optimizarlo.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-dark-lighter rounded-full p-3 mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Sin Compromiso</h4>
                    <p className="text-gray-light">Conoce nuestra plataforma sin ningún tipo de obligación o compromiso posterior.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 card">
              <h4 className="text-xl font-semibold text-white mb-4">Contacto directo</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-light">Email:</span>
                  <span className="text-white">info@onevisa.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-light">Teléfono:</span>
                  <span className="text-white">+34 91 123 45 67</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-light">Horario:</span>
                  <span className="text-white">Lun-Vie: 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 