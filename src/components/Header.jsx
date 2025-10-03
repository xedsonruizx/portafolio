import { useState, useEffect } from 'react';
import { profile } from '../data/profile';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(window.location.hash || '#hero');

  const links = [
    { href: '#about', label: 'Sobre mí' },
    { href: '#education', label: 'Estudios' },
    { href: '#certifications', label: 'Certificaciones' },
    { href: '#experience', label: 'Experiencia' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contacto' },
  ];

  useEffect(() => {
    const onHashChange = () => setActive(window.location.hash || '#hero');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <a href="#hero" className="brand">{profile.name}</a>

        <button
          className={`menuBtn ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          {open ? '✕' : '☰'}
        </button>

        <div
          className={`overlay ${open ? 'show' : ''}`}
          onClick={() => setOpen(false)}
          aria-hidden={!open}
        />

        <nav id="primary-nav" className={`nav ${open ? 'open' : ''}`}>
          <ul className="navList">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`navLink ${active === l.href ? 'active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}