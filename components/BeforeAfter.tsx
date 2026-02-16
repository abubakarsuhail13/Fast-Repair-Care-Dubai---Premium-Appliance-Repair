
import React from 'react';
import { BEFORE_AFTER } from '../constants';

const BeforeAfter: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Quality in Every Fix</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Real Results, Real Repairs
          </h3>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. See the difference our professional maintenance and repair work makes for home appliances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {BEFORE_AFTER.map((item, idx) => (
            <div key={idx} className="group relative bg-slate-100 rounded-[2.5rem] p-4 shadow-xl border border-slate-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={item.before} alt="Before repair" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Before</div>
                </div>
                <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={item.after} alt="After repair" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">After</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h4 className="text-xl font-bold text-slate-800">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
