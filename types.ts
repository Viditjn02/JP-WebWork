export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client?: string;
  industry?: string;
  features?: string[];
  images?: string[]; // Additional images for gallery
  award?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export enum Category {
  ALL = 'All',
  FOLDING_CARTONS = 'Folding Cartons',
  RIGID_BOXES = 'Rigid Boxes',
  LABELS = 'Labels',
  CORRUGATED = 'Corrugated',
  LUXURY = 'Luxury',
  SPECIALTY = 'Specialty Packaging',
  PROMOTIONAL = 'Promotional Packaging'
}