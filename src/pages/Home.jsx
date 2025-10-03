import ProjectCard from '../components/ProjectCard';
import { profile } from '../data/profile';
import { education } from '../data/education';
import { certifications } from '../data/certifications';
import { experience } from '../data/experience';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main>
      <section id="hero" className="hero">
        <div className="container">
          <h1>Hola, soy {profile.name}</h1>
          <p>Desarrollador Web y Administrador de Salesforce.</p>
          <a href="#projects" className="btn primary">Ver proyectos</a>
        </div>
      </section>

      <section id="about" className="section container">
        <h2 className="sectionTitle">Sobre mí</h2>
        <p>
          Técnico Universitario en Informática con experiencia en desarrollo web, administración de Salesforce
          y colaboración multidisciplinaria con equipos y clientes.
        </p>
      </section>

      <section id="contact" className="section container">
        <h2 className="sectionTitle">Contacto</h2>
        <ul className="tagList">
          <li className="tag">Tel: {profile.contact.phone}</li>
          <li className="tag">
            <a href={`mailto:${profile.contact.email}`} className="link">{profile.contact.email}</a>
          </li>
          <li className="tag">
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="link">LinkedIn</a>
          </li>
          <li className="tag">
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="link">GitHub</a>
          </li>
        </ul>
      </section>

      <section id="education" className="section container">
        <h2 className="sectionTitle">Estudios</h2>
        <div className="grid grid-2">
          {education.map((e) => (
            <article key={e.title} className="card">
              <h3 className="cardTitle">{e.title}</h3>
              <p className="cardDesc">{e.institution} — {e.year}</p>
              <p className="cardDesc">{e.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="section container">
        <h2 className="sectionTitle">Certificaciones</h2>
        <div className="grid grid-2">
          {certifications.map((c) => (
            <article key={c.title} className="card">
              <h3 className="cardTitle">{c.title}</h3>
              <p className="cardDesc">{c.institution} — {c.year}</p>
              {c.description && <p className="cardDesc">{c.description}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section container">
        <h2 className="sectionTitle">Experiencia</h2>
        <div className="grid grid-2">
          {experience.map((x) => (
            <article key={x.role} className="card">
              <h3 className="cardTitle">{x.role} — {x.company}</h3>
              <p className="cardDesc">{x.period}</p>
              <p className="cardDesc">{x.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <h2 className="sectionTitle">Proyectos</h2>
        <div className="grid grid-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}