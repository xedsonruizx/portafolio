import React from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function ImageGalleryModal({ images, initialIndex = 0, title, onClose }) {
  const [current, setCurrent] = React.useState(initialIndex);
  const total = images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowRight')  next();
      if (e.key === 'ArrowLeft')   prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  const thumbRef = React.useRef(null);

  // Scroll active thumbnail into view
  React.useEffect(() => {
    if (!thumbRef.current) return;
    const active = thumbRef.current.querySelector('.galleryThumb.isActive');
    if (active) active.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
  }, [current]);

  return (
    <div className="galleryOverlay" onClick={onClose}>
      <div className="galleryContent" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <header className="galleryHeader">
          <h3 className="galleryTitle">{title}</h3>
          <span className="galleryCounter">{current + 1} / {total}</span>
          <button className="galleryClose" onClick={onClose} aria-label="Cerrar">
            <FiX />
          </button>
        </header>

        {/* Main image */}
        <div className="galleryStage">
          {total > 1 && (
            <button className="galleryNav galleryPrev" onClick={prev} aria-label="Anterior">
              <FiChevronLeft />
            </button>
          )}

          <div className="galleryImageWrap">
            <img
              key={current}
              className="galleryImage"
              src={images[current]}
              alt={`${title} — ${current + 1}`}
            />
          </div>

          {total > 1 && (
            <button className="galleryNav galleryNext" onClick={next} aria-label="Siguiente">
              <FiChevronRight />
            </button>
          )}
        </div>

        {/* Thumbnail strip */}
        {total > 1 && (
          <div className="galleryThumbs" ref={thumbRef}>
            {images.map((img, i) => (
              <button
                key={i}
                className={`galleryThumb${i === current ? ' isActive' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Imagen ${i + 1}`}
              >
                <img src={img} alt={`thumb ${i + 1}`} />
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
