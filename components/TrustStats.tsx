
import React from 'react';
import { CheckCircle2, Users, MapPin, Wrench, ShieldCheck, Zap } from 'lucide-react';

const TrustStats: React.FC = () => {
  const stats = [
    { icon: <CheckCircle2 className="w-8 h-8 text-orange-500" />, label: "Appliances Repaired", value: "10,000+" },
    { icon: <MapPin className="w-8 h-8 text-orange-500" />, label: "Areas of Dubai", value: "Serving All" },
    { icon: <Users className="w-8 h-8 text-orange-500" />, label: "Certified Team", value: "Experts" },
    { icon: <ShieldCheck className="w-8 h-8 text-orange-500" />, label: "Guarantee", value: "Warranty" }
  ];

  return (
    <div className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-4 bg-white/5 p-4 rounded-full border border-white/10">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          <div className="flex items-center text-white/50 space-x-2">
            <Zap className="w-5 h-5" />
            <span className="font-semibold text-sm">24/7 Emergency Support</span>
          </div>
          <div className="flex items-center text-white/50 space-x-2">
            <Wrench className="w-5 h-5" />
            <span className="font-semibold text-sm">Genuine Spare Parts</span>
          </div>
          <div className="flex items-center text-white/50 space-x-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold text-sm">Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStats;
