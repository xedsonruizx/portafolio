import { profile } from '../data/profile';
import { education, education_en } from '../data/education';
import { certifications, certifications_en } from '../data/certifications';
import { experience, experience_en } from '../data/experience';
import React from 'react';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import Projects from '../components/Projects';
import Courses from '../components/Courses';
import CaseStudy from '../components/CaseStudy';
import TypingText from '../components/TypingText';
import { useI18n } from '../i18n';
import { useReveal } from '../hooks/useReveal';

const SKILLS = {
  frontend:  ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Vue.js', 'React.js', 'Bootstrap', 'WordPress'],
  backend:   ['PHP', 'Laravel', 'Python', 'NestJS', 'Node.js', 'Java', 'COBOL', 'REST APIs'],
  databases: ['MySQL', 'SQL', 'Oracle SQL', 'PostgreSQL'],
  tools:     ['Git', 'Docker', 'Jira', 'Trello', 'Salesforce', 'Scrum / Agile'],
};

export default function Home() {
  const { t, lang } = useI18n();
  useReveal();

  const eduData  = lang === 'en' ? education_en  : education;
  const certData = lang === 'en' ? certifications_en : certifications;
  const expData  = lang === 'en' ? experience_en  : experience;

  const [certViewer, setCertViewer] = React.useState({ open: false, src: null, title: '' });
  const waNumber = String(profile.contact?.phone || '').replace(/[^\d]/g, '');
  const year = new Date().getFullYear();

  const contacts = [
    { href: `https://wa.me/${waNumber}`,        icon: <FiPhone />,      label: profile.contact.phone,  title: 'WhatsApp' },
    { href: `mailto:${profile.contact.email}`,  icon: <FiMail />,       label: profile.contact.email,  title: 'Email' },
    { href: profile.contact.linkedin,           icon: <FiLinkedin />,   label: 'LinkedIn',             title: 'LinkedIn' },
    { href: profile.contact.github,             icon: <FiGithub />,     label: 'GitHub',               title: 'GitHub' },
    { href: profile.contact.hackerrank,         icon: <SiHackerrank />, label: 'HackerRank',           title: 'HackerRank' },
  ];

  return (
    <>
      <main>
        {/* ── HERO ─────────────────────────────────── */}
        <section id="hero" className="hero">
          <div className="container">
            <p className="heroGreet">{t('hero.greet')}</p>
            <h1 className="heroName">{profile.name}.</h1>
            <h2 className="heroRole">
              <TypingText lang={lang} />
            </h2>
            <p className="heroDesc">{t('about.description')}</p>
            <div className="heroCtas">
              <a href="#projects" className="btn primary">{t('hero.cta')}</a>
              <a href="#contact"  className="btn secondary">{t('hero.ctaSecondary')}</a>
              <a
                href="/assets/files/CV_Edson_Ruiz_ESP.pdf"
                download
                className="btn secondary"
              >
                <FiDownload style={{ width: 16, height: 16 }} />
                {t('hero.downloadCv')}
              </a>
            </div>
          </div>
        </section>

        {/* ── EDUCATION ────────────────────────────── */}
        <section id="education" className="section container">
          <h2 className="sectionTitle reveal">
            <span className="sectionNum">01.</span>
            {t('education.title')}
          </h2>
          <div className="grid grid-2">
            {eduData.map((e, i) => (
              <article
                key={i}
                className="card reveal"
                style={{ '--reveal-delay': `${i * 120}ms` }}
              >
                <h3 className="cardTitle">{e.title}</h3>
                <p className="cardDesc">{e.institution} — {e.year}</p>
                <p className="cardDesc">{e.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ───────────────────────────── */}
        <section id="experience" className="section container">
          <h2 className="sectionTitle reveal">
            <span className="sectionNum">02.</span>
            {t('experience.title')}
          </h2>
          <div className="timeline">
            {expData.map((x, i) => (
              <div
                key={i}
                className="timelineItem reveal"
                style={{ '--reveal-delay': `${i * 140}ms` }}
              >
                <div className="timelineMarker" />
                <article className="card timelineContent">
                  <div className="timelineHeader">
                    <h3 className="cardTitle">{x.role}</h3>
                    <span className="timelinePeriod">{x.period}</span>
                  </div>
                  <p className="timelineCompany">
                    {x.link
                      ? <a href={x.link} target="_blank" rel="noreferrer" className="link">{x.company}</a>
                      : <span>{x.company}</span>
                    }
                  </p>
                  {x.bullets?.length > 0 ? (
                    <ul className="expBullets">
                      {x.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  ) : (
                    <p className="cardDesc">{x.description}</p>
                  )}
                </article>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ───────────────────────────────── */}
        <section id="skills" className="section container">
          <h2 className="sectionTitle reveal">
            <span className="sectionNum">03.</span>
            {t('skills.title')}
          </h2>
          <div className="skillsGrid">
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <div
                key={cat}
                className="skillGroup reveal"
                style={{ '--reveal-delay': `${i * 90}ms` }}
              >
                <h3 className="skillGroupTitle">{t(`skills.categories.${cat}`)}</h3>
                <ul className="tagList">
                  {items.map((skill) => (
                    <li key={skill} className="tag skill">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ───────────────────────── */}
        <section id="certifications" className="section container">
          <h2 className="sectionTitle reveal">
            <span className="sectionNum">04.</span>
            {t('certifications.title')}
          </h2>
          <div className="grid grid-2">
            {certData.map((cert, i) => (
              <article
                key={i}
                className="card reveal"
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                <h3 className="cardTitle">{cert.title}</h3>
                <p className="cardDesc">{cert.issuer} — {cert.year}</p>
                <div className="cardBottom">
                  <footer className="cardFooter">
                    <div className="cardActions">
                      {cert.pdf ? (
                        <a
                          className="btn primary btnSm"
                          href={cert.pdf}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t('certifications.viewLabel')}
                        </a>
                      ) : '—'}
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── COURSES ──────────────────────────────── */}
        <Courses />

        {/* ── PROJECTS ─────────────────────────────── */}
        <Projects />

        {/* ── CASE STUDY ───────────────────────────── */}
        <CaseStudy />

        {/* ── CONTACT ──────────────────────────────── */}
        <section id="contact" className="section container">
          <h2 className="sectionTitle reveal">
            <span className="sectionNum">08.</span>
            {t('contact.title')}
          </h2>
          <p className="contactLead reveal" style={{ '--reveal-delay': '80ms' }}>
            {t('contact.description')}
          </p>
          <div className="contactGrid">
            {contacts.map((c, i) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="contactCard reveal"
                style={{ '--reveal-delay': `${i * 70}ms` }}
                title={c.title}
              >
                <span className="contactCardIcon">{c.icon}</span>
                <span className="contactCardText">
                  <span className="contactCardTitle">{c.title}</span>
                  <span className="contactCardLabel">{c.label}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* ── CERT MODAL ───────────────────────────── */}
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
                <a href={certViewer.src} target="_blank" rel="noreferrer">{t('pdf.openNew')}</a>
              </p>
            </object>
          </div>
        </div>
      )}

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="siteFooter">
        <div className="container">
          <small>© {year} <span className="footerAccent">{profile.name}</span></small>
          <small>{t('footer.rights')}</small>
        </div>
      </footer>
    </>
  );
}
