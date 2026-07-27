export interface Qualification {
  id: string;
  label: string;
  description?: string;
  icon: 'school' | 'certificate' | 'language' | 'experience';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export interface StudentCategory {
  id: string;
  title: string;
  target: string;
  service: string;
  result: string;
  icon: 'children' | 'school' | 'adult';
  levelOptions: string[];
  needOptions: string[];
}

export interface LessonMode {
  id: string;
  title: string;
  description: string;
  location: string;
  price?: string;
  icon: 'online' | 'home' | 'studio';
}

export interface SiteContent {
  teacher: {
    name: string;
    city: string;
    whatsappPhone: string;
    professionalTitle: string;
    shortIntroduction: string;
    fullIntroduction: string;
    portraitWebp: string;
    portraitFallback: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  video: {
    mp4: string;
    webm: string;
    poster: string;
    accessibleDescription: string;
  };
  qualifications: Qualification[];
  testimonials: Testimonial[];
  studentCategories: StudentCategory[];
  lessonModes: LessonMode[];
}
