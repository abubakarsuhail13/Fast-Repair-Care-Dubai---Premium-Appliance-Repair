
import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { AREAS } from '../constants';

const AreasServed: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Service Network</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Premium Appliance Repair in All Major Dubai Communities
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Based in Al Karama, we operate a fleet of mobile repair vans strategically positioned across Dubai to ensure we reach you in 60 minutes or less.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {AREAS.map((area) => (
                <div key={area.name} className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-colors">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{area.name}</div>
                    <div className="text-xs text-slate-500">{area.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Navigation className="w-10 h-10 text-orange-500 animate-pulse" />
                <div>
                  <div className="font-bold">Tracking Active</div>
                  <div className="text-sm text-slate-400">4 service vans currently active in Marina/Downtown</div>
                </div>
              </div>
              <a href="#contact" className="hidden sm:block text-orange-500 font-bold hover:underline">Book Near Me</a>
            </div>
          </div>

          <div className="relative">
            {/* Visual Map Placeholder */}
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-blue-100 relative">
               <img 
                src="https://images.unsplash.com/photo-1582407925230-6014023c9e99?auto=format&fit=crop&q=80&w=1000" 
                alt="Dubai Cityscape" 
                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-blue-900/10 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="relative">
                      {/* Animated Map Pins */}
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`absolute w-4 h-4 bg-orange-500 rounded-full animate-ping opacity-75`} style={{
                          top: `${Math.random() * 80}%`,
                          left: `${Math.random() * 80}%`
                        }}></div>
                      ))}
                      <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl text-center">
                        <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-bold text-slate-900">Karama Main Hub</div>
                        <div className="text-xs text-slate-500">Fast Response Center</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasServed;
