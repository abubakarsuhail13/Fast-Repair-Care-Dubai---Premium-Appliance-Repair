
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Latest Insights</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Tips From Our Experts
            </h3>
            <p className="text-slate-600 text-lg">
              Stay informed with our blog on how to maintain your home appliances and save on energy bills in Dubai.
            </p>
          </div>
          <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {BLOG_POSTS.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[2.5rem] overflow-hidden aspect-[16/9] mb-6 relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-slate-900 font-bold text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h4>
              <p className="text-slate-600 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center font-bold text-blue-600 group-hover:gap-4 transition-all gap-2">
                Read Full Article <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
