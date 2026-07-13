export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  bullets: string[];
  estimatedTime: string;
  deliverables: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  sector: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Pillar {
  id: 'legal' | 'contable' | 'psicologia';
  name: string;
  tagline: string;
  description: string;
  services: Service[];
  caseStudies: CaseStudy[];
  image: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  serviceInterest: string;
  message: string;
  timestamp: string;
  status: 'pending' | 'reviewed';
}

export interface EstimationConfig {
  entityType: 'individual' | 'pyme' | 'corporativo';
  modules: string[];
  urgency: 'normal' | 'alta';
}
