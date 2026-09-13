import React from 'react';
import { FiMaximize2 } from 'react-icons/fi';
import { useI18n } from '../i18n';
import ImageGalleryModal from './ImageGalleryModal';

export default function ProjectCard({ title, description, tags = [], link, repo, image, images, features = [] }) {
  const { t } = useI18n();
  const [galleryOpen, setGalleryOpen] = React.useState(false);

  // Build gallery images: use explicit images array, fallback to single image
  const allImages = images?.length > 0 ? images : image ? [image] : [];
  const hasGallery = allImages.length > 0;
  const isMultiple = allImages.length > 1;

  return (
    <>
      <article className="card">
        {hasGallery && (
          <div
            className="cardImgWrap"
            onClick={() => setGalleryOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setGalleryOpen(true)}
            aria-label={`Ver galería de ${title}`}
          >
            <img className="cardImg" src={allImages[0]} alt={title} />
            <div className="cardImgOverlay">
              <FiMaximize2 className="cardImgIcon" />
              {isMultiple && (
                <span className="cardImgBadge">{allImages.length} imágenes</span>
              )}
            </div>
          </div>
        )}

        <h3 className="cardTitle">{title}</h3>
        <p className="cardDesc">{description}</p>

        {features.length > 0 && (
          <ul className="featureList">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}

        <div className="cardBottom">
          {tags.length > 0 && (
            <ul className="tagList cardTags">
              {tags.map((tag) => (
                <li key={tag} className="tag">{tag}</li>
              ))}
            </ul>
          )}
          <footer className="cardFooter">
            <div className="cardActions">
              {link && (
                <a className="btn primary btnSm" href={link} target="_blank" rel="noreferrer">
                  {t('projects.actions.demo')}
                </a>
              )}
              {repo && (
                <a className="btn btnSm" href={repo} target="_blank" rel="noreferrer">
                  {t('projects.actions.code')}
                </a>
              )}
            </div>
          </footer>
        </div>
      </article>

      {galleryOpen && (
        <ImageGalleryModal
          images={allImages}
          title={title}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </>
  );
}
