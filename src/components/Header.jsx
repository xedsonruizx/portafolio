import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useI18n } from '../i18n';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { t, lang, toggleLang } = useI18n();
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

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="siteHeader">
      <div className="brand">Edson Ruiz</div>

      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <button
        className={`menuButton ${open ? 'isOpen' : ''}`}
        aria-label={t('header.menu.aria')}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX className="menuIcon" /> : <FiMenu className="menuIcon" />}
      </button>
      </div>

      <nav id="site-nav" className="nav" data-open={open}>
        <ul className="navList">
          {links.map((l) => (
            <li key={l.id}>
              <button className="navLink" onClick={() => handleNav(l.id)}>
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
      {open && <div className="menuOverlay" onClick={() => setOpen(false)} />}
    </header>
  );
}