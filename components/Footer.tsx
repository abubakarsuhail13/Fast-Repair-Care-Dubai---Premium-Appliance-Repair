
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { BRAND, SERVICES, AREAS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-28 md:pb-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="font-bold text-2xl text-white mb-6 uppercase tracking-tight">
              FAST<span className="text-orange-500">REPAIR</span> CARE
            </div>
            <p className="mb-8 leading-relaxed text-slate-400">
              Dubai's premium home appliance repair specialists based in Al Karama. We provide professional, warranty-backed services for all your household electronics with a commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Repair Services</h4>
            <ul className="space-y-4">
              {SERVICES.map(s => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-orange-500 transition-colors">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
              {AREAS.map(a => (
                <li key={a.name}>
                  <a href="#areas" className="hover:text-orange-500 transition-colors">{a.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 shrink-0" />
                <span className="text-sm leading-relaxed">{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-orange-500 shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors font-bold">{BRAND.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500 shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© {new Date().getFullYear()} Fast Repair Care Dubai. All Rights Reserved.</p>
            <a 
              href="https://www.nexaforgetech.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-slate-500 hover:text-blue-400 transition-colors"
            >
              Powered by <span className="font-bold text-slate-400 group-hover:text-blue-400">Nexaforge Technologies</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
