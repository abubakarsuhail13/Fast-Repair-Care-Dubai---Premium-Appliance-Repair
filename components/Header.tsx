
import React, { useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { BRAND } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Areas', href: '#areas' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Book Now', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex flex-col">
          <div className={`font-bold text-xl md:text-2xl tracking-tight transition-colors ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
            FAST<span className="text-orange-500">REPAIR</span>
          </div>
          <div className={`text-[10px] font-semibold uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-blue-100'}`}>
            Care Dubai
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${BRAND.phone}`}
            className="flex items-center bg-orange-500 text-white px-5 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-md"
          >
            <Phone className="w-4 h-4 mr-2" />
            {BRAND.phoneDisplay}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 p-6 animate-in slide-in-from-top">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold text-slate-800 border-b border-slate-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <a 
                href={`tel:${BRAND.phone}`}
                className="w-full flex justify-center items-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call Expert Now
              </a>
              <a 
                href={`https://wa.me/${BRAND.whatsapp}`}
                className="w-full flex justify-center items-center bg-green-500 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp Booking
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
