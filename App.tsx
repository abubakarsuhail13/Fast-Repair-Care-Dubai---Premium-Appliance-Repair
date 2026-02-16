
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TrustStats from './components/TrustStats';
import Reviews from './components/Reviews';
import AreasServed from './components/AreasServed';
import DiagnosticTool from './components/DiagnosticTool';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import FaqSection from './components/FaqSection';
import BeforeAfter from './components/BeforeAfter';
import Technicians from './components/Technicians';
import BlogSection from './components/BlogSection';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Header isScrolled={isScrolled} />
      
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <TrustStats />
        </motion.div>
        
        <motion.div id="services" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <Services />
        </motion.div>

        <section className="py-20 bg-blue-50/50">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="container mx-auto px-4">
             <DiagnosticTool />
          </motion.div>
        </section>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <BeforeAfter />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <Technicians />
        </motion.div>

        <motion.div id="reviews" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="bg-white">
          <Reviews />
        </motion.div>

        <motion.div id="areas" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="bg-slate-50">
          <AreasServed />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <BlogSection />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <FaqSection />
        </motion.div>

        <motion.div id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
          <ContactSection />
        </motion.div>
      </main>

      <Footer />
      
      <FloatingActions />
    </div>
  );
};

export default App;
