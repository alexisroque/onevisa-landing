"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = [
  {
    title: 'Empresa',
    links: [
      { name: 'Sobre Nosotros', href: '#' },
      { name: 'Equipo', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Contacto', href: '#contact' },
    ],
  },
  {
    title: 'Solución',
    links: [
      { name: 'Plataforma', href: '#' },
      { name: 'Inteligencia Artificial', href: '#' },
      { name: 'Automatización', href: '#' },
      { name: 'Seguridad', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { name: 'Blog', href: '#blog' },
      { name: 'Guías', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'RGPD', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-lighter pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-white font-bold text-2xl">OneVisa</span>
            </Link>
            <p className="text-gray-light mb-6 max-w-md">
              Plataforma SaaS de automatización de procesos de visado impulsada por inteligencia artificial. Ayudamos a agencias y escuelas a externalizar la tramitación de visados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-light hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-light hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-light hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-dark-lightest text-gray-light text-sm">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <span>info@onevisa.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <span>+34 91 123 45 67</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Madrid, España</span>
          </div>
        </div>

        <div className="pt-6 border-t border-dark-lightest flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} OneVisa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-gray-light text-sm">
            <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 