export default function ProjectCard({ title, description, tags = [], link, repo }) {
  return (
    <article className="card">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDesc">{description}</p>
      {tags.length > 0 && (
        <ul className="tagList">
          {tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
      )}
      <div className="cardActions">
        {link && (
          <a className="btn primary" href={link} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        {repo && (
          <a className="btn" href={repo} target="_blank" rel="noreferrer">
            Código
          </a>
        )}
      </div>
    </article>
  );
}