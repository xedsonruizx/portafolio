import ProjectCard from '../components/ProjectCard';
import { profile } from '../data/profile';
import { education, education_en } from '../data/education';
import { certifications, certifications_en } from '../data/certifications';
import { experience, experience_en } from '../data/experience';
import { projects } from '../data/projects';
import React from 'react';
import { FiPhone, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import Projects from '../components/Projects';
import { useI18n } from '../i18n';

export default function Home() {
  const { t, lang } = useI18n();

  // Select language-specific datasets
  const eduData = lang === 'en' ? education_en : education;
  const certData = lang === 'en' ? certifications_en : certifications;
  const expData = lang === 'en' ? experience_en : experience;
  const [certViewer, setCertViewer] = React.useState({ open: false, src: null, title: '' });
  const waNumber = String(profile.contact?.phone || '').replace(/[^\d]/g, '');
  const year = new Date().getFullYear();

  return (
    <>
      <main>
      <section id="hero" className="hero">
        <div className="container">
          <h1>{t('hero.title', { name: profile.name })}</h1>
          <p>{t('hero.subtitle')}</p>
          <a href="#projects" className="btn primary">{t('hero.cta')}</a>
        </div>
      </section>

      <section id="about" className="section container">
        <h2 className="sectionTitle">{t('about.title')}</h2>
        <p>{t('about.description')}</p>
      </section>



      <section id="education" className="section container">
        <h2 className="sectionTitle">{t('education.title')}</h2>
        <div className="grid grid-2">
          {eduData.map((e) => (
            <article key={e.title} className="card">
              <h3 className="cardTitle">{e.title}</h3>
              <p className="cardDesc">{e.institution} — {e.year}</p>
              <p className="cardDesc">{e.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section container">
        <h2 className="sectionTitle">{t('certifications.title')}</h2>
        <div className="grid grid-2">
          {certData.map((cert) => (
            <article key={cert.title} className="card">
              <h3 className="cardTitle">{cert.title}</h3>
              <p className="cardDesc">{cert.issuer} — {cert.year}</p>
              <div className="cardBottom">
                <footer className="cardFooter">
                  <div className="cardActions">
                    <button
                      className="btn primary"
                      onClick={() => setCertViewer({ open: true, src: cert.pdf, title: cert.title })}
                      disabled={!cert.pdf}
                    >
                      {t('certifications.viewLabel')}
                    </button>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section container">
        <h2 className="sectionTitle">{t('experience.title')}</h2>
        <div className="grid grid-2">
          {expData.map((x) => (
            <article key={x.role} className="card">
              <h3 className="cardTitle">{x.role} — {x.company}</h3>
              <p className="cardDesc">{x.period}</p>
              <p className="cardDesc">{x.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Projects />

      <section id="contact" className="section container">
        <h2 className="sectionTitle">{t('contact.title')}</h2>
        <ul className="tagList">
          <li className="tag">
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noreferrer"
              className="link"
              aria-label={t('contact.whatsapp')}
              title="WhatsApp"
            >
              <FiPhone className="contactIcon" />
              {profile.contact.phone}
            </a>
          </li>
          <li className="tag">
            <a href={`mailto:${profile.contact.email}`} className="link" title="Email">
              <FiMail className="contactIcon" />
              {profile.contact.email}
            </a>
          </li>
          <li className="tag">
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="link" title="LinkedIn">
              <FiLinkedin className="contactIcon" />
              LinkedIn
            </a>
          </li>
          <li className="tag">
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="link" title="GitHub">
              <FiGithub className="contactIcon" />
              GitHub
            </a>
          </li>
          <li className="tag">
            <a
              href={profile.contact.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="link"
              title="HackerRank"
            >
              <SiHackerrank className="contactIcon" />
              HackerRank
            </a>
          </li>
        </ul>
      </section>


      {certViewer.open && (
        <div className="modalOverlay" onClick={() => setCertViewer({ open: false, src: null, title: '' })}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <header className="modalHeader">
              <h3 className="modalTitle">{certViewer.title}</h3>
              <button
                className="modalClose"
                onClick={() => setCertViewer({ open: false, src: null, title: '' })}
                aria-label={t('modal.closeAria')}
              >
                ✕
              </button>
            </header>
            <object
              className="pdfFrame"
              data={`${certViewer.src}#toolbar=0&navpanes=0&zoom=page-fit`}
              type="application/pdf"
            >
              <p>
                {t('pdf.fallback')}{' '}
                <a href={certViewer.src} target="_blank" rel="noreferrer">{t('pdf.openNew')}</a>
              </p>
            </object>
          </div>
        </div>
      )}
    </main>
      <footer className="siteFooter">
        <div className="container">
          <small>© {year} {profile.name}. Todos los derechos reservados.</small>
        </div>
      </footer>
    </>
  );
}