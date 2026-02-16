
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Sparkles, Loader2, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../constants';

const DiagnosticTool: React.FC = () => {
  const [appliance, setAppliance] = useState('');
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const runDiagnostic = async () => {
    if (!appliance || !problem) {
      setError('Please provide both the appliance type and the problem description.');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Diagnostic request for ${appliance}. Issue described: ${problem}. Provide a probable cause, estimated urgency, and a tip for the user.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              probableCause: { type: Type.STRING },
              urgency: { type: Type.STRING, description: 'Low, Medium, High' },
              professionalFixNeeded: { type: Type.BOOLEAN },
              diyTip: { type: Type.STRING },
              estimatedRepairTime: { type: Type.STRING }
            },
            required: ['probableCause', 'urgency', 'professionalFixNeeded', 'diyTip', 'estimatedRepairTime']
          }
        }
      });

      const parsed = JSON.parse(response.text.trim());
      setResult(parsed);
    } catch (err) {
      console.error('AI Error:', err);
      setError('Failed to run diagnostic. Please describe the problem in our contact form below.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-blue-100 max-w-4xl mx-auto">
      <div className="bg-blue-700 p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Sparkles className="w-32 h-32" />
        </div>
        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-2 flex items-center">
            <Sparkles className="w-8 h-8 mr-3 text-orange-400" />
            AI Repair Diagnostic
          </h3>
          <p className="text-blue-100">Describe your appliance issue to get an instant AI-powered preliminary diagnostic.</p>
        </div>
      </div>
      
      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Appliance Type</label>
            <select 
              value={appliance}
              onChange={(e) => setAppliance(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            >
              <option value="">Select Appliance</option>
              <option value="AC / Air Conditioning">AC / Air Conditioning</option>
              <option value="Washing Machine">Washing Machine</option>
              <option value="Refrigerator / Fridge">Refrigerator / Fridge</option>
              <option value="Dishwasher">Dishwasher</option>
              <option value="Oven / Cooking Range">Oven / Cooking Range</option>
              <option value="Dryer">Dryer</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Describe the Problem</label>
            <input 
              type="text"
              placeholder="e.g., leaking water, making loud noise..."
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center mb-6">
            <AlertCircle className="w-5 h-5 mr-3" />
            {error}
          </div>
        )}

        {!result ? (
          <button 
            onClick={runDiagnostic}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                Analyzing Issue...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3" />
                Run Instant Diagnostic
              </>
            )}
          </button>
        ) : (
          <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl animate-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-blue-900">Diagnostic Results</h4>
              <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase ${
                result.urgency === 'High' ? 'bg-red-500 text-white' : 
                result.urgency === 'Medium' ? 'bg-orange-500 text-white' : 
                'bg-green-500 text-white'
              }`}>
                Urgency: {result.urgency}
              </span>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm font-bold text-blue-800 uppercase mb-1">Probable Cause</div>
                <p className="text-slate-800 font-medium">{result.probableCause}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                  <div className="text-xs font-bold text-blue-500 uppercase mb-1">Repair Time</div>
                  <div className="font-bold text-slate-900">{result.estimatedRepairTime}</div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100">
                  <div className="text-xs font-bold text-blue-500 uppercase mb-1">Pro Needed?</div>
                  <div className="font-bold text-slate-900">{result.professionalFixNeeded ? 'Yes, recommended' : 'Can be DIY'}</div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-orange-800 uppercase mb-1">Immediate Tip</div>
                  <p className="text-slate-700 text-sm italic">{result.diyTip}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-blue-200 flex flex-col md:flex-row gap-4">
              <a 
                href={`tel:${BRAND.phone}`}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-center shadow-lg transition-all"
              >
                Call Expert for Fix
              </a>
              <button 
                onClick={() => {setResult(null); setProblem('');}}
                className="flex-1 bg-white border border-blue-200 text-blue-800 font-bold py-4 rounded-xl hover:bg-blue-50 transition-all"
              >
                Reset Diagnostic
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-xs text-slate-400 mt-6">
          * AI diagnostics are preliminary suggestions. A physical inspection by our technicians is required for a 100% accurate repair quote.
        </p>
      </div>
    </div>
  );
};

export default DiagnosticTool;
