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
      skills: 'Skills',
      projects: 'Projects',
      caseStudy: 'Case Study',
      contact: 'Contact',
    },
    header: { languageSwitch: 'ES/EN' },
    hero: { greet: "Hi, my name is", title: 'Welcome', subtitle: 'Full Stack Developer · Salesforce Admin · QA Manual', cta: 'View Projects', ctaSecondary: 'Get in Touch', downloadCv: 'Download CV' },
    about: { title: 'About Me', description: 'University Technical Degree in Computer Science from Universidad Técnica Federico Santa María, with over 4 years of experience in technology and banking. Specialized in Front End Development, Salesforce Administration, and Manual QA. Skilled in Vue.js, React.js, PHP Laravel, and Python. Salesforce Administrator certified. Cambridge B2 English certificate (Upper-Intermediate). Results-driven, committed, and a strong team player.' },
    contact: { title: 'Contact', whatsappAria: 'Open WhatsApp chat', description: "I'm open to new opportunities. Whether you have a project in mind or just want to say hello, feel free to reach out." },
    education: { title: 'Education' },
    certifications: { title: 'Certifications', viewLabel: 'View' },
    courses: { title: 'Courses', viewLabel: 'View certificate', table: { course: 'Course Name', issuer: 'Institution', year: 'Year', certificate: 'Certificate' } },
    experience: { title: 'Experience' },
    skills: { title: 'Skills', categories: { frontend: 'Frontend', backend: 'Backend', databases: 'Databases', tools: 'Tools & Platforms' } },
    footer: { rights: 'All rights reserved.' },
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
    caseStudy: {
      title: 'Case Study',
      subtitle: 'A closer look at my most challenging project, from problem to solution.',
      badge: 'Featured Project',
      challengeLabel: 'Main Challenge',
      solutionLabel: 'Proposed Solution',
      toolsLabel: 'Technical Tools',
      learningsLabel: 'Key Learnings',
      metricsLabel: 'Impact Metrics',
      skillsLabel: 'Technical Skills Applied',
      justificationLabel: 'Why I Chose This Project',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      education: 'Educación',
      certifications: 'Certificaciones',
      courses: 'Cursos',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      caseStudy: 'Caso de Estudio',
      contact: 'Contacto',
    },
    header: { languageSwitch: 'ES/EN' },
    hero: { greet: 'Hola, mi nombre es', title: 'Bienvenido', subtitle: 'Desarrollador Full Stack · Salesforce Admin · QA Manual', cta: 'Ver Proyectos', ctaSecondary: 'Contacto', downloadCv: 'Descargar CV' },
    about: { title: 'Sobre mí', description: 'Técnico Universitario en Informática titulado en la Universidad Técnica Federico Santa María, con más de 4 años de experiencia en los rubros de tecnología y banca. Especialización en Desarrollo Front End, Administración Salesforce y QA Manual. Conocimientos en Vue.js, React.js, PHP Laravel y Python. Certificación Salesforce Administrator. Inglés B2 certificado por Cambridge (Intermedio-Avanzado). Perfil orientado a resultados, comprometido y con capacidad de trabajo en equipo.' },
    contact: { title: 'Contacto', whatsappAria: 'Abrir chat de WhatsApp', description: 'Estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente o simplemente quieres conectar, no dudes en escribirme.' },
    education: { title: 'Educación' },
    certifications: { title: 'Certificaciones', viewLabel: 'Ver' },
    courses: { title: 'Cursos', viewLabel: 'Ver certificado', table: { course: 'Nombre curso', issuer: 'Institución', year: 'Año', certificate: 'Certificado' } },
    experience: { title: 'Experiencia' },
    skills: { title: 'Habilidades', categories: { frontend: 'Frontend', backend: 'Backend', databases: 'Bases de Datos', tools: 'Herramientas' } },
    footer: { rights: 'Todos los derechos reservados.' },
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
    caseStudy: {
      title: 'Caso de Estudio',
      subtitle: 'Una mirada en profundidad a mi proyecto más desafiante, desde el problema hasta la solución.',
      badge: 'Proyecto Destacado',
      challengeLabel: 'Desafío Principal',
      solutionLabel: 'Solución Propuesta',
      toolsLabel: 'Herramientas Técnicas',
      learningsLabel: 'Principales Aprendizajes',
      metricsLabel: 'Métricas de Impacto',
      skillsLabel: 'Habilidades Técnicas Aplicadas',
      justificationLabel: 'Por Qué Elegí Este Proyecto',
    },
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