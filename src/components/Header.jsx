import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useI18n } from '../i18n';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { t, lang, toggleLang } = useI18n();

  // Refs para detectar clic fuera
  const navRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const links = [
    { id: 'about', label: t('nav.about') },
    { id: 'education', label: t('nav.education') },
    { id: 'certifications', label: t('nav.certifications') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Cierra al hacer click/tap fuera del nav en móvil
  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (e) => {
      if (navRef.current?.contains(e.target)) return;
      if (btnRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="brand">Edson Ruiz</div>

      <nav id="site-nav" className="siteNav" data-open={open} ref={navRef}>
        <ul className="siteNavList">
          {links.map((l) => (
            <li key={l.id}>
              <button className="siteNavLink" onClick={() => handleNav(l.id)}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="langSwitch"
        onClick={toggleLang}
        aria-label={t('header.lang.label')}
        title={t('header.lang.label')}
      >
        {lang.toUpperCase()}
      </button>
      <button
        className={`menuButton ${open ? 'isOpen' : ''}`}
        aria-label={t('header.menu.aria')}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
        ref={btnRef}
      >
        {open ? <FiX className="menuIcon" /> : <FiMenu className="menuIcon" />}
      </button>

      {open && <div className="menuOverlay" onClick={() => setOpen(false)} />}
    </header>
  );
}