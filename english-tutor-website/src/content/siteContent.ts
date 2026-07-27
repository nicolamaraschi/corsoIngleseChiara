import type { SiteContent } from '../types/content';

export const siteContent: SiteContent = {
  teacher: {
    name: 'Chiara D\'Alessandro',
    city: 'Milano',
    whatsappPhone: '393XXXXXXXXX',
    professionalTitle: 'Insegnante privata di inglese',
    shortIntroduction:
      'Lezioni private di inglese a Milano e online, per studenti di tutte le età.',
    fullIntroduction:
      'Aiuto ogni studente a raggiungere i propri obiettivi con un percorso chiaro, personalizzato e costruito sulle sue necessità.',
    portraitWebp: '/media/teacher-portrait.webp',
    portraitFallback: '/media/teacher-portrait.jpg'
  },

  hero: {
    headline:
      'Lezioni private di inglese a Milano e online',
    subheadline:
      'Recupera le insufficienze, supera gli esami e migliora davvero il tuo inglese con un percorso personalizzato.',
    primaryCta: 'Prenota una prova gratuita',
    secondaryCta: 'Scopri i percorsi'
  },

  video: {
    mp4: '/media/presentation-video.mp4',
    webm: '/media/presentation-video.webm',
    poster: '/media/presentation-poster.webp',
    accessibleDescription:
      'Video di presentazione dell’insegnante e del suo metodo di lavoro.'
  },

  qualifications: [
    {
      id: 'degree',
      label: 'Laurea in Lingue',
      icon: 'school'
    },
    {
      id: 'certification',
      label: 'Certificazione CELTA / TEFL',
      icon: 'certificate'
    },
    {
      id: 'language-level',
      label: 'Inglese livello C2',
      icon: 'language'
    }
  ],

  testimonials: [
    {
      id: 'testimonial-1',
      // TODO: sostituire con testimonianze reali autorizzate.
      quote:
        'Mio figlio ha recuperato il debito di inglese in due mesi.',
      author: 'Nome genitore',
      role: 'Genitore di uno studente'
    },
    {
      id: 'testimonial-2',
      // TODO: sostituire con testimonianze reali autorizzate.
      quote:
        'Ho superato l’esame IELTS al primo tentativo.',
      author: 'Nome studente',
      role: 'Studente universitario'
    },
    {
      id: 'testimonial-3',
      // TODO: sostituire con testimonianze reali autorizzate.
      quote:
        'Le lezioni sono chiare, pratiche e costruite sui miei obiettivi.',
      author: 'Nome studente',
      role: 'Studente adulto'
    }
  ],

  studentCategories: [
    {
      id: 'elementary-middle',
      title: 'Elementari e medie',
      target: 'Bambini e ragazzi',
      service: 'Aiuto compiti e approccio ludico',
      result: 'Costruire basi solide senza paura dell’inglese',
      icon: 'children',
      levelOptions: [
        'Scuola elementare',
        'Prima media',
        'Seconda media',
        'Terza media'
      ],
      needOptions: [
        'Aiuto compiti',
        'Recupero delle basi',
        'Preparazione verifica',
        'Conversazione',
        'Altro'
      ]
    },
    {
      id: 'high-school',
      title: 'Scuole superiori',
      target: 'Studenti delle superiori',
      service: 'Ripetizioni e recupero insufficienze',
      result: 'Preparare verifiche, interrogazioni e debiti estivi',
      icon: 'school',
      levelOptions: [
        'Prima superiore',
        'Seconda superiore',
        'Terza superiore',
        'Quarta superiore',
        'Quinta superiore'
      ],
      needOptions: [
        'Recupero insufficienza',
        'Preparazione verifica',
        'Preparazione interrogazione',
        'Debito estivo',
        'Altro'
      ]
    },
    {
      id: 'adult',
      title: 'Universitari e adulti',
      target: 'Universitari, lavoratori e adulti',
      service: 'Preparazione esami e conversazione',
      result: 'Cambridge B1, B2 e C1, IELTS, TOEFL e inglese pratico',
      icon: 'adult',
      levelOptions: [
        'Principiante A1–A2',
        'Intermedio B1–B2',
        'Avanzato C1–C2',
        'Livello non conosciuto'
      ],
      needOptions: [
        'Conversazione',
        'Preparazione Cambridge',
        'Preparazione IELTS',
        'Preparazione TOEFL',
        'Esame universitario',
        'Inglese per lavoro',
        'Altro'
      ]
    }
  ],

  lessonModes: [
    {
      id: 'online',
      title: 'Lezioni online',
      description:
        'Lezioni individuali tramite Google Meet o Zoom.',
      location: 'Disponibili ovunque',
      icon: 'online',
      // TODO: Inserire prezzo o lasciare vuoto per mostrare "Contattami..."
      price: 'Inserire prezzo'
    },
    {
      id: 'home',
      title: 'Lezioni a domicilio',
      description:
        'Lezioni presso l’abitazione dello studente.',
      location: 'Milano e zone limitrofe',
      icon: 'home',
      // TODO: Inserire prezzo
      price: 'Inserire prezzo'
    },
    {
      id: 'studio',
      title: 'Lezioni in presenza',
      description:
        'Lezioni presso la sede dell’insegnante.',
      location: 'Inserire zona o indirizzo generico',
      icon: 'studio',
      // TODO: Inserire prezzo
      price: 'Inserire prezzo'
    }
  ]
};
