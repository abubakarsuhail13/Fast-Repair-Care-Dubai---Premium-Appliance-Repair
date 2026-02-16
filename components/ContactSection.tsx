
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ShieldCheck } from 'lucide-react';
import { BRAND } from '../constants';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <div className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">Book Your Repair</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Appliance Not Working? <br />Get It Fixed Today!</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Call for Booking</div>
                  <a href={`tel:${BRAND.phone}`} className="text-2xl font-black hover:text-orange-400 transition-colors">
                    {BRAND.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-green-400">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Instant WhatsApp Support</div>
                  <a href={`https://wa.me/${BRAND.whatsapp}`} className="text-2xl font-black hover:text-green-400 transition-colors">
                    Chat with Expert
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Visit Our Workshop</div>
                  <div className="text-lg font-medium">{BRAND.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-orange-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Operating Hours</div>
                  <div className="text-lg font-medium">Daily: 8:00 AM – 10:00 PM (Emergency 24/7)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-20 animate-in zoom-in duration-500">
                <div className="bg-green-100 text-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Send className="w-12 h-12" />
                </div>
                <h4 className="text-3xl font-bold mb-4">Request Sent!</h4>
                <p className="text-lg text-slate-600 mb-8">
                  A technician will call you within 15 minutes to confirm your appointment.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-3xl font-bold mb-2">Book a Technician</h4>
                <p className="text-slate-500 mb-10">We usually respond within 15 minutes of receiving your request.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase px-2">Your Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-slate-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase px-2">Phone Number</label>
                      <input required type="tel" placeholder="+971 -- --- ----" className="w-full bg-slate-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase px-2">Appliance Type</label>
                    <select className="w-full bg-slate-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all">
                      <option>Washing Machine</option>
                      <option>Refrigerator / Fridge</option>
                      <option>AC Repair</option>
                      <option>Cooking Range / Oven</option>
                      <option>Dishwasher</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase px-2">Your Location</label>
                    <input required type="text" placeholder="e.g., Dubai Marina, Al Karama" className="w-full bg-slate-100 border-none p-4 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all" />
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 text-lg">
                      Schedule Repair Now
                    </button>
                    <p className="text-center text-slate-400 text-xs mt-6 flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Your data is 100% secure & private.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;