import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: 'about', label: 'Sobre mí' },
    { id: 'education', label: 'Estudios' },
    { id: 'certifications', label: 'Certificaciones' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
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

      <button
        className={`menuButton ${open ? 'isOpen' : ''}`}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX className="menuIcon" /> : <FiMenu className="menuIcon" />}
      </button>

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

      {open && <div className="menuOverlay" onClick={() => setOpen(false)} />}
    </header>
  );
}