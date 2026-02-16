
import React, { useState } from 'react';
import { Wrench, Search, Phone, MessageCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import { BRAND } from '../constants';

const COMMON_ISSUES: Record<string, any> = {
  "AC / Air Conditioning": {
    cause: "Low refrigerant levels or clogged filter",
    urgency: "High",
    tip: "Turn off the unit immediately to prevent compressor burnout.",
    time: "45-90 Mins"
  },
  "Washing Machine": {
    cause: "Worn-out drum belt or pump blockage",
    urgency: "Medium",
    tip: "Unplug from power and check for trapped coins in the filter.",
    time: "60 Mins"
  },
  "Refrigerator / Fridge": {
    cause: "Dirty condenser coils or faulty thermostat",
    urgency: "High",
    tip: "Keep the doors closed to preserve temperature until help arrives.",
    time: "60-120 Mins"
  },
  "Dishwasher": {
    cause: "Spray arm blockage or inlet valve failure",
    urgency: "Medium",
    tip: "Check for debris in the drain basket.",
    time: "45 Mins"
  },
  "Oven / Cooking Range": {
    cause: "Igniter failure or thermostat calibration",
    urgency: "High",
    tip: "If you smell gas, turn off the main supply and open windows.",
    time: "60 Mins"
  }
};

const DiagnosticTool: React.FC = () => {
  const [appliance, setAppliance] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleDiagnose = () => {
    if (appliance && COMMON_ISSUES[appliance]) {
      setResult(COMMON_ISSUES[appliance]);
    } else if (appliance) {
      setResult({
        cause: "Complex electrical or mechanical fault",
        urgency: "Medium",
        tip: "Requires professional onsite inspection for safety.",
        time: "60 Mins"
      });
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-blue-100 max-w-4xl mx-auto">
      <div className="bg-blue-700 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Wrench className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-2 flex items-center">
            <Search className="w-8 h-8 mr-3 text-orange-400" />
            Instant Service Estimator
          </h3>
          <p className="text-blue-100">Identify your appliance issue and get an immediate professional recommendation.</p>
        </div>
      </div>
      
      <div className="p-8">
        {!result ? (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Select Your Appliance</label>
              <select 
                value={appliance}
                onChange={(e) => setAppliance(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-lg font-medium"
              >
                <option value="">Choose your appliance...</option>
                {Object.keys(COMMON_ISSUES).map(key => (
                  <option key={key} value={key}>{key}</option>
                ))}
                <option value="Other">Other Home Appliance</option>
              </select>
            </div>
            
            <button 
              onClick={handleDiagnose}
              disabled={!appliance}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 shadow-lg shadow-blue-200"
            >
              Get Expert Diagnosis & Quote
            </button>
          </div>
        ) : (
          <div className="animate-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-2xl font-bold text-slate-900">Diagnosis for {appliance}</h4>
              <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                result.urgency === 'High' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
              }`}>
                Urgency: {result.urgency}
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-blue-600 uppercase mb-2">Probable Fault</div>
                <div className="text-lg font-bold text-slate-800 leading-tight">{result.cause}</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-xs font-bold text-blue-600 uppercase mb-2">Estimated Repair Time</div>
                <div className="text-lg font-bold text-slate-800 leading-tight">{result.time}</div>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex gap-4 mb-8">
              <AlertTriangle className="w-8 h-8 text-orange-500 shrink-0" />
              <div>
                <div className="text-sm font-bold text-orange-800 uppercase mb-1">Safety Instruction</div>
                <p className="text-slate-700 font-medium italic">{result.tip}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href={`tel:${BRAND.phone}`}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-xl text-center shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
              >
                <Phone className="w-5 h-5" /> Call Technician Now
              </a>
              <a 
                href={`https://wa.me/${BRAND.whatsapp}`}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-xl text-center shadow-xl transition-all flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="w-5 h-5" /> Book on WhatsApp
              </a>
            </div>
            
            <button 
              onClick={() => {setResult(null); setAppliance('');}}
              className="w-full mt-4 text-slate-400 font-bold text-sm hover:text-blue-600 transition-colors"
            >
              Start New Diagnostic
            </button>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-6 opacity-60">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Genuine Parts
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Fixed Prices
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase">
            <CheckCircle2 className="w-4 h-4 text-green-500" /> Service Warranty
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTool;
