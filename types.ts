
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  keywords: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  content: string;
  date: string;
}

export interface Area {
  name: string;
  description: string;
}