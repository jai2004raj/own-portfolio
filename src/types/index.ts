export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Full-Stack Project' | 'Arduino Project' | 'Front-End Project' | string;
  categoryBadge: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  abstractVisualType: 'aegis' | 'aidetector' | 'flexfit' | 'eduportal' | 'jumpman' | 'calculator' | 'healthsync' | 'foodmgmt';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    levelDescription?: string;
    iconName: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  description?: string;
  courses?: string[];
}

export interface ActivityItem {
  title: string;
  event: string;
  date?: string;
  location?: string;
  description: string;
  category: string;
  tags: string[];
}
