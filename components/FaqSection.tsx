
import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { FAQS } from '../constants';

const FaqSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Quick answers to common questions about our Dubai repair services.</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all group">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-blue-600 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
