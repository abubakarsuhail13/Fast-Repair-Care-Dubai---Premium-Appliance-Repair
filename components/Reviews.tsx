
import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import { REVIEWS, BRAND } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Customer Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Join Thousands of Happy Homes in Dubai
            </h3>
            <p className="text-slate-600 text-lg">
              We take pride in our work. See what our customers say about our professional repair services.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl flex items-center gap-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-orange-500 text-orange-500" />)}
            </div>
            <div className="text-slate-800 font-bold">4.9/5 Average Rating</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-slate-50 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200/50" />
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= review.rating ? 'fill-orange-500 text-orange-500' : 'text-slate-300'}`} />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment to Satisfaction (Strategic Section) */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center gap-10">
          <div className="bg-white/10 p-6 rounded-full">
            <Heart className="w-16 h-16 animate-pulse" />
          </div>
          <div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4">Committed to Your Satisfaction</h4>
            <p className="text-lg text-blue-100 mb-0 leading-relaxed max-w-3xl">
              We continuously improve our service quality and respond to customer feedback seriously. Our goal is 100% customer satisfaction. If you are not happy with any aspect of our service, we promise to make it right immediately.
            </p>
          </div>
          <div className="shrink-0">
            <div className="text-sm font-bold uppercase tracking-widest text-blue-200 mb-2">Support Line</div>
            <a href={`tel:${BRAND.phone}`} className="text-2xl font-black hover:text-orange-400 transition-colors">
              {BRAND.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
