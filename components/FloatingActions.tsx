
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BRAND } from '../constants';

const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop Right Side Floating Buttons */}
      <div className="hidden md:flex fixed right-8 bottom-12 flex-col space-y-4 z-40">
        <a 
          href={`https://wa.me/${BRAND.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all group relative animate-float"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-1/2 -translate-y-1/2">
            Chat on WhatsApp
          </span>
        </a>
        <a 
          href={`tel:${BRAND.phone}`}
          className="bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all group relative animate-float"
          style={{animationDelay: '0.5s'}}
        >
          <Phone className="w-8 h-8" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-1/2 -translate-y-1/2">
            Call Technician
          </span>
        </a>
      </div>

      {/* Mobile Bottom Sticky Bar (High Conversion) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="grid grid-cols-2 gap-4 pointer-events-auto">
          <a 
            href={`tel:${BRAND.phone}`}
            className="flex items-center justify-center bg-blue-600 text-white py-4 rounded-2xl font-black shadow-2xl border-2 border-white/20 active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5 mr-3" />
            Call Now
          </a>
          <a 
            href={`https://wa.me/${BRAND.whatsapp}`}
            className="flex items-center justify-center bg-green-500 text-white py-4 rounded-2xl font-black shadow-2xl border-2 border-white/20 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
