
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICES, BRAND } from '../constants';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Professional Repair Solutions for Every Appliance
          </h3>
          <p className="text-lg text-slate-600">
            We fix all major brands and models with precision. Our technicians are factory-trained and equipped with specialized tools for on-the-spot repairs.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              className="group bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full group-hover:scale-150 transition-transform"></div>
              
              <div className="bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-md text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {service.keywords.map(kw => (
                  <span key={kw} className="text-[10px] font-bold uppercase bg-slate-200/50 text-slate-500 px-2 py-1 rounded">
                    {kw}
                  </span>
                ))}
              </div>

              <a 
                href="#contact"
                className="inline-flex items-center font-bold text-blue-600 hover:text-orange-500 transition-colors"
              >
                Book This Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-blue-900 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">Can't see your appliance here?</h4>
            <p className="text-blue-100">We repair almost all home electronics and appliances. Just give us a call!</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${BRAND.phone}`}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg text-center"
            >
              Call to Inquire
            </a>
            <a 
              href={`https://wa.me/${BRAND.whatsapp}`}
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-xl font-bold transition-all text-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
