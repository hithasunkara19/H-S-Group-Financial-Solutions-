import { LucideIcon } from 'lucide-react';

export interface RouteItem {
  name: string;
  path: string;
  icon?: LucideIcon;
  dropdown?: RouteItem[];
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}
