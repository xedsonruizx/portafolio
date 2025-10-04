import { useI18n } from '../i18n';

export default function ProjectCard({ title, description, tags = [], link, repo, image, features = [] }) {
  const { t } = useI18n();
  return (
    <article className="card">
      {image && <img className="cardImg" src={image} alt={title} />}
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDesc">{description}</p>
      {features.length > 0 && (
        <ul className="featureList">
          {features.map((f) => (
            <li key={f} className="feature">{f}</li>
          ))}
        </ul>
      )}
      <div className="cardBottom">
        {tags.length > 0 && (
          <ul className="tagList">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        )}
        <footer className="cardFooter">
          <div className="cardActions">
            {link && (
              <a className="btn primary" href={link} target="_blank" rel="noreferrer">
                {t('projects.actions.demo')}
              </a>
            )}
            {repo && (
              <a className="btn" href={repo} target="_blank" rel="noreferrer">
                {t('projects.actions.code')}
              </a>
            )}
          </div>
        </footer>
      </div>
    </article>
  );
}