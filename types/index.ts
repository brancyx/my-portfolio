export interface Project {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tags?: string[];
}

export interface Experience {
  _id: string;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  brief: string;
  details: string[];
  logo: string;
}

export interface Skill {
  _id: string;
  category: string;
  technologies: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  estimatedReadingTime: number;
  tags?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[];
}

export interface Bio {
  name: string;
  taglines: string[];
  about: string;
  resumeUrl: string;
  photo: string;
  linkedin: string;
  github: string;
  email: string;
  telegram?: string;
}
