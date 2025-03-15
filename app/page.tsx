import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
