import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useI18n } from '../i18n';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const { t, lang, toggleLang } = useI18n();

  const navRef = React.useRef(null);
  const btnRef = React.useRef(null);

  const links = [
    { id: 'education',       label: t('nav.education') },
    { id: 'experience',      label: t('nav.experience') },
    { id: 'skills',          label: t('nav.skills') || 'Skills' },
    { id: 'certifications',  label: t('nav.certifications') },
    { id: 'projects',        label: t('nav.projects') },
    { id: 'contact',         label: t('nav.contact') },
  ];

  // Scroll shadow
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  React.useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  // Close nav on Escape
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close nav on resize to desktop
  React.useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Close on click outside
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
    <header className={`siteHeader${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        Edson <span>Ruiz</span>
      </a>

      <nav id="site-nav" className="siteNav" data-open={open} ref={navRef}>
        <ul className="siteNavList">
          {links.map((l, i) => (
            <li key={l.id}>
              <button
                className={`siteNavLink${activeSection === l.id ? ' isActive' : ''}`}
                onClick={() => handleNav(l.id)}
              >
                <span className="siteNavNum">0{i + 1}.</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="headerRight">
        <button
          className="langSwitch"
          onClick={toggleLang}
          aria-label="Toggle language"
          title="Toggle language"
        >
          {lang.toUpperCase()}
        </button>
        <button
          className="menuButton"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
          ref={btnRef}
        >
          {open ? <FiX className="menuIcon" /> : <FiMenu className="menuIcon" />}
        </button>
      </div>

      {open && <div className="menuOverlay" onClick={() => setOpen(false)} />}
    </header>
  );
}
