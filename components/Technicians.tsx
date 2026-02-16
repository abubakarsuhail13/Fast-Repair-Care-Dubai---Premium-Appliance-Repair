
import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { TECHNICIANS } from '../constants';

const Technicians: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Meet Our Experts</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Certified Professionals You Can Trust
          </h3>
          <p className="text-lg text-slate-600">
            Our team consists of background-checked, industry-certified technicians with decades of combined experience in Dubai's appliance market.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNICIANS.map((tech, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform">
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-square">
                <img src={tech.image} alt={tech.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl flex justify-between items-center">
                  <div className="flex text-orange-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold uppercase text-slate-500">Top Rated</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-1">{tech.name}</h4>
              <p className="text-blue-600 font-semibold text-sm mb-4">{tech.role}</p>
              
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-slate-700">{tech.experience} Experience</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technicians;
