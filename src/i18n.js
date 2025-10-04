import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      certifications: 'Certifications',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    header: { languageSwitch: 'ES/EN' },
    hero: { title: 'Welcome', subtitle: 'Software Developer | Frontend Developer | QA functional | Salesforce Administrador', cta: 'View Projects' },
    about: { title: 'About Me', description: 'IT professional with a background in software development and systems administration, certified as a Salesforce Platform Administrator. Experienced in web development, functional QA, and requirements management, actively contributing to multidisciplinary projects and client-facing meetings. Recognized for adaptability, continuous learning, and a strong focus on delivering high-quality results.' },
    contact: { title: 'Contact', whatsappAria: 'Open WhatsApp chat' },
    education: { title: 'Education' },
    certifications: { title: 'Certifications', viewLabel: 'View certification' },
    experience: { title: 'Experience' },
    modal: { closeAria: 'Close' },
    pdf: { fallbackTitle: 'PDF preview not available', fallbackAlt: 'Download PDF' },
    projects: {
      title: 'Projects',
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
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    header: { languageSwitch: 'ES/EN' },
    hero: { title: 'Bienvenido', subtitle: 'Desarrollador de Software | Frontend Developer | QA funcional | Administrador Salesforce', cta: 'Ver Proyectos' },
    about: { title: 'Sobre mí', description: 'Profesional en informática con formación en desarrollo y administración de sistemas, certificado como Salesforce Platform Administrator. Cuento con experiencia en desarrollo web, QA funcional y gestión de requerimientos, participando en proyectos multidisciplinarios y en contacto directo con clientes. Me caracterizo por mi capacidad de adaptación, aprendizaje continuo y orientación a la calidad en cada entrega.' },
    contact: { title: 'Contacto', whatsappAria: 'Abrir chat de WhatsApp' },
    education: { title: 'Educación' },
    certifications: { title: 'Certificaciones', viewLabel: 'Ver certificación' },
    experience: { title: 'Experiencia' },
    modal: { closeAria: 'Cerrar' },
    pdf: { fallbackTitle: 'Vista previa PDF no disponible', fallbackAlt: 'Descargar PDF' },
    projects: {
      title: 'Proyectos',
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