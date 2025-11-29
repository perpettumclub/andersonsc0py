import { LucideIcon } from 'lucide-react';

export interface PrincipleItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface PortfolioLink {
  title: string;
  url: string;
  type: string;
}

export interface Qualification {
  name: string;
  mentor: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}
