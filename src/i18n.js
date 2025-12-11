import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      certifications: 'Certifications',
      courses: 'Courses',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: { languageSwitch: 'ES/EN' },
    hero: { title: 'Welcome', subtitle: 'Software Developer | Frontend Developer | QA functional | Salesforce Administrador', cta: 'View Projects' },
    about: { title: 'About Me', description: 'Computer Technician graduated from Universidad Técnica Federico Santa María. Over 3 years of experience in technology and banking companies. Worked mainly in Development, Salesforce Administration, and Manual QA. Skilled in Front-End, responsive development, and Salesforce certification. English B2 certified (upper-intermediate). Committed, responsible, and positive in the workplace.' },
    contact: { title: 'Contact', whatsappAria: 'Open WhatsApp chat' },
    education: { title: 'Education' },
    certifications: { title: 'Certifications', viewLabel: 'View certification' },
    courses: { title: 'Courses', viewLabel: 'View certificate', table: { course: 'Course Name', issuer: 'Institution', year: 'Year', certificate: 'Certificate' } },
    experience: { title: 'Experience' },
    modal: { closeAria: 'Close' },
    pdf: { fallbackTitle: 'PDF preview not available', fallbackAlt: 'Download PDF' },
    projects: {
      title: 'Projects',
      description: 'Small challenges built outside of work to keep improving step by step.',
      view: { cards: 'Cards', list: 'List' },
      table: { title: 'Title', description: 'Description', tags: 'Tags', demo: 'Demo', code: 'Code' },
      actions: { demo: 'Demo', code: 'Code' },
    },
    pagination: { prev: 'Previous', next: 'Next', goToPage: 'Go to page' },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      education: 'Educación',
      certifications: 'Certificaciones',
      courses: 'Cursos',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    header: { languageSwitch: 'ES/EN' },
    hero: { title: 'Bienvenido', subtitle: 'Desarrollador de Software | Frontend Developer | QA funcional | Administrador Salesforce', cta: 'Ver Proyectos' },
    about: { title: 'Sobre mí', description: 'Técnico en Informática titulado en la Universidad Técnica Federico Santa María. Cuenta con más de 3 años de experiencia en empresas de los rubros de tecnología y banca. Se ha desempeñado principalmente en las áreas Desarrollo, Administración Salesforce y QA Manual. Posee conocimientos en Front End, desarrollo responsive y certificación Salesforce. Idioma Inglés B2 con certificado (Intermedio - alto). Comprometido, responsable y alegre en su contexto laboral.' },
    contact: { title: 'Contacto', whatsappAria: 'Abrir chat de WhatsApp' },
    education: { title: 'Educación' },
    certifications: { title: 'Certificaciones', viewLabel: 'Ver certificación' },
    courses: { title: 'Cursos', viewLabel: 'Ver certificado', table: { course: 'Nombre curso', issuer: 'Institución', year: 'Año', certificate: 'Certificado' } },
    experience: { title: 'Experiencia' },
    modal: { closeAria: 'Cerrar' },
    pdf: { fallbackTitle: 'Vista previa PDF no disponible', fallbackAlt: 'Descargar PDF' },
    projects: {
      title: 'Proyectos',
      description: 'Pequeños challenge hechos fuera del entorno laboral para ir mejorando poco a poco.',
      view: { cards: 'Tarjetas', list: 'Lista' },
      table: { title: 'Título', description: 'Descripción', tags: 'Etiquetas', demo: 'Demo', code: 'Código' },
      actions: { demo: 'Demo', code: 'Código' },
    },
    pagination: { prev: 'Anterior', next: 'Siguiente', goToPage: 'Ir a la página' },
  },
};

const I18nContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch {}
  if (typeof navigator !== 'undefined') {
    const code = (navigator.language || '').toLowerCase();
    if (code.startsWith('es')) return 'es';
  }
  return 'en';
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }, [lang]);

  const t = useMemo(() => {
    const access = (obj, path) => path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
    return (key) => {
      const primary = access(translations[lang] || {}, key);
      if (primary !== undefined) return primary;
      const fallback = access(translations.en, key);
      return fallback !== undefined ? fallback : key;
    };
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const value = useMemo(() => ({ t, lang, setLang, toggleLang }), [t, lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}