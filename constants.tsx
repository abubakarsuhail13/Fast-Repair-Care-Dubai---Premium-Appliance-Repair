
import React from 'react';
import { 
  Wind, 
  Refrigerator, 
  WashingMachine, 
  Waves, 
  Flame, 
  Zap 
} from 'lucide-react';
import { Service, Review, Area } from './types';

export const BRAND = {
  name: "Fast Repair Care Dubai",
  phone: "+971 52 245 1145",
  phoneDisplay: "+971 52 245 1145",
  whatsapp: "971522451145",
  email: "info@fastrepaircare.ae",
  address: "G7 Shop, G7 Building – Al Karama, Dubai, UAE",
  colors: {
    primary: "#0056b3",
    secondary: "#ff8c00",
    accent: "#00b4d8"
  }
};

export const SERVICES: Service[] = [
  {
    id: "ac-repair",
    title: "AC Repair & Maintenance",
    description: "Expert central & split AC repair, gas charging, and deep cleaning for Dubai's intense summers.",
    icon: <Wind className="w-8 h-8" />,
    keywords: ["AC Repair Dubai", "AC Maintenance", "Central AC Service"]
  },
  {
    id: "fridge-repair",
    title: "Refrigerator Repair",
    description: "Same-day compressor fix, gas refilling, and cooling issue resolution for all major brands.",
    icon: <Refrigerator className="w-8 h-8" />,
    keywords: ["Refrigerator Repair Dubai", "Fridge Service", "Samsung Repair"]
  },
  {
    id: "washing-machine",
    title: "Washing Machine Repair",
    description: "Solving drum issues, leakage, and circuit faults for top & front-load washing machines.",
    icon: <WashingMachine className="w-8 h-8" />,
    keywords: ["Washing Machine Repair Dubai", "Washer Service"]
  },
  {
    id: "dishwasher-repair",
    title: "Dishwasher Repair",
    description: "Professional cleaning and repair for Bosch, LG, Samsung, and Siemens dishwashers.",
    icon: <Waves className="w-8 h-8" />,
    keywords: ["Dishwasher Repair Dubai", "Kitchen Appliance Repair"]
  },
  {
    id: "oven-repair",
    title: "Oven & Cooking Range",
    description: "Gas leak detection, heating element replacement, and thermostat calibration.",
    icon: <Flame className="w-8 h-8" />,
    keywords: ["Cooking Range Repair Dubai", "Oven Repair UAE"]
  },
  {
    id: "electrical-repair",
    title: "Electrical Fault Repairs",
    description: "Certified electricians for domestic power failures, circuit breakers, and wiring issues.",
    icon: <Zap className="w-8 h-8" />,
    keywords: ["Electrician Dubai", "Emergency Electrical Repair"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Nazim Akash",
    rating: 5,
    content: "Excellent service! My AC stopped working at 10 PM and they sent a technician within an hour. Professional and very reasonable pricing.",
    date: "2 days ago"
  },
  {
    id: "r2",
    name: "Danial Saleem",
    rating: 5,
    content: "Best washing machine repair in Dubai. They used genuine parts and gave me a 3-month warranty. Highly recommended!",
    date: "1 week ago"
  },
  {
    id: "r3",
    name: "Jack Dawson",
    rating: 5,
    content: "Very transparent pricing. No hidden charges. The technician explained everything clearly before starting the work.",
    date: "2 weeks ago"
  }
];

export const AREAS: Area[] = [
  { name: "Al Karama", description: "Our primary hub for fastest response times." },
  { name: "Jumeirah", description: "Villas and residential complexes." },
  { name: "Deira", description: "Prompt commercial and residential service." },
  { name: "Bur Dubai", description: "Efficient repair for all home sizes." },
  { name: "Al Barsha", description: "Serving all residential towers." },
  { name: "Dubai Marina", description: "Apartment-specialized appliance repair." },
  { name: "Downtown Dubai", description: "Premium service for central residents." },
  { name: "Al Qusais", description: "Quick response for northern Dubai." }
];

export const TECHNICIANS = [
  {
    name: "Engr. Ahmed Khan",
    role: "Senior HVAC Specialist",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Mr. Rizwan Ali",
    role: "Master Appliance Expert",
    experience: "8+ Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Mr. Sunny Kumar",
    role: "Lead Electrical Technician",
    experience: "10+ Years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
  }
];

export const BEFORE_AFTER = [
  {
    title: "AC Deep Cleaning",
    before: "https://images.unsplash.com/photo-1585338048256-4c47b59ec7d2?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Washing Machine Drum Fix",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    after: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&q=80&w=800"
  }
];

export const BLOG_POSTS = [
  {
    title: "How to Extend the Life of Your AC in Dubai Heat",
    excerpt: "Discover essential maintenance tips to keep your air conditioner running efficiently during peak summer...",
    date: "May 15, 2024",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "5 Signs Your Refrigerator Needs Immediate Repair",
    excerpt: "Don't ignore these warning signs! A loud compressor or water leaks could lead to food spoilage...",
    date: "June 02, 2024",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400"
  }
];

export const FAQS = [
  {
    q: "Do you offer same-day service?",
    a: "Yes! We specialize in same-day emergency repairs across Dubai. If you book before 4 PM, we almost always reach you the same day."
  },
  {
    q: "Is there a warranty on repairs?",
    a: "Absolutely. We provide a service warranty ranging from 3 to 12 months depending on the type of repair and parts replaced."
  },
  {
    q: "Do you use original spare parts?",
    a: "Yes, we exclusively use genuine spare parts sourced directly from manufacturers to ensure longevity and performance."
  }
];
