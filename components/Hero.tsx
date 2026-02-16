
import React from 'react';
import { Phone, MessageCircle, Calendar, ShieldCheck, Clock, Award } from 'lucide-react';
import { BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Appliance Repair Technician" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Same-Day Service Guaranteed Across Dubai
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Dubai’s Trusted <br />
            <span className="text-orange-500">Home Appliance</span> Repair Experts
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
            Fast, reliable, and affordable repairs by certified technicians. From Al Karama to Dubai Marina, we bring your appliances back to life with genuine parts and a solid warranty.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a 
              href={`tel:${BRAND.phone}`}
              className="w-full sm:w-auto flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)]"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
            </a>
            <a 
              href={`https://wa.me/${BRAND.whatsapp}`}
              className="w-full sm:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)]"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Booking
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg font-bold px-8 py-4 rounded-xl transition-all"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Online
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-blue-100">Certified Technicians</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Award className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-blue-100">Genuine Spare Parts</span>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-blue-100">Service Warranty</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
          alt="Technician Tools" 
          className="w-full h-full object-cover opacity-20 transform scale-150 rotate-12 translate-x-1/4"
        />
      </div>
    </section>
  );
};

export default Hero;
