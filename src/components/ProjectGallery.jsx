import { useCallback, useEffect, useRef, useState } from 'react';
import { getProjectTitle, useLanguage } from '../i18n/LanguageContext.jsx';
import ResponsiveImage from './ResponsiveImage.jsx';
import Reveal from './Reveal.jsx';

function Lightbox({ images, projectTitle, initialIndex, onClose, copy, isHebrew }) {
  const [active, setActive] = useState(initialIndex);
  const touchStart = useRef(null);
  const closeButton = useRef(null);
  const dialogRef = useRef(null);

  const move = useCallback((direction) => {
    setActive((current) => (current + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') move(isHebrew ? 1 : -1);
      if (event.key === 'ArrowRight') move(isHebrew ? -1 : 1);
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll('button');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [isHebrew, move, onClose]);

  return (
    <div ref={dialogRef} className="lightbox" role="dialog" aria-modal="true" aria-label={`${copy.accessibility.projectGallery}: ${projectTitle}`}>
      <button ref={closeButton} className="lightbox-close" type="button" onClick={onClose} aria-label={copy.accessibility.closeGallery}>×</button>
      <div
        className="lightbox-stage"
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 42) move(distance < 0 ? 1 : -1);
          touchStart.current = null;
        }}
      >
        <ResponsiveImage image={images[active]} alt={`${projectTitle} — ${copy.accessibility.interiorDesign}`} eager fit="contain" sizes="100vw" />
      </div>
      <div className="lightbox-controls ltr-isolate">
        <button type="button" onClick={() => move(-1)} aria-label={copy.accessibility.previousImage}>←</button>
        <span aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => move(1)} aria-label={copy.accessibility.nextImage}>→</button>
      </div>
    </div>
  );
}

function StoryBlock({ story, quote = false, className = '' }) {
  if (!story) return null;

  return (
    <Reveal as="section" className={`project-story ${className}`}>
      <div className="project-story-copy">
        <p className="eyebrow"><i aria-hidden="true" />{story.eyebrow}</p>
        <h2>{story.title}</h2>
        <p>{story.body}</p>
      </div>
      {quote && story.quote && (
        <blockquote>
          <p>“{story.quote}”</p>
          <cite>— YAHAV ROSEN</cite>
        </blockquote>
      )}
    </Reveal>
  );
}

export default function ProjectGallery({ project }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const openerRef = useRef(null);
  const { copy, language, isHebrew } = useLanguage();
  const projectTitle = getProjectTitle(project, language);
  const editorial = project.editorial?.[language];
  const images = project.gallery.slice(1);
  const lead = images.slice(0, 3);
  const feature = images[3];
  const support = images.slice(4, 6);
  const finale = images.slice(6);

  const open = (index, target) => {
    openerRef.current = target;
    setLightboxIndex(index);
  };

  const close = useCallback(() => {
    setLightboxIndex(null);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const renderImage = (image, galleryIndex, className, variant = 'image-up', sizes = '100vw', showCounter = true) => {
    if (!image) return null;
    const actualIndex = galleryIndex + 1;
    return (
      <Reveal
        as="button"
        variant={variant}
        className={`gallery-item ${className}`}
        id={`${project.id}-gallery-${String(actualIndex + 1).padStart(2, '0')}`}
        type="button"
        onClick={(event) => open(actualIndex, event.currentTarget)}
        aria-label={`${copy.accessibility.openImage} ${actualIndex + 1} / ${project.gallery.length}: ${projectTitle}`}
        key={image.src}
      >
        <ResponsiveImage
          image={image}
          alt={`${projectTitle} — ${copy.accessibility.interiorDesign}`}
          sizes={sizes}
        />
        {showCounter && (
          <span className="gallery-image-count ltr-isolate" aria-hidden="true">
            {String(actualIndex + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
          </span>
        )}
      </Reveal>
    );
  };

  return (
    <>
      <section id="project-gallery" className={`editorial-gallery gallery-${project.id}`} aria-label={`${copy.accessibility.projectGallery}: ${projectTitle}`}>
        <div className="gallery-lead">
          {renderImage(lead[0], 0, 'gallery-lead-main', 'image-left', '(min-width: 900px) 64vw, 100vw')}
          <div className="gallery-lead-side">
            {renderImage(lead[1], 1, 'gallery-lead-detail', 'image-right', '(min-width: 900px) 30vw, 100vw')}
            {renderImage(lead[2], 2, 'gallery-lead-detail', 'image-right', '(min-width: 900px) 30vw, 100vw')}
          </div>
        </div>

        <StoryBlock story={editorial?.storyOne} quote className="project-story-primary" />

        {renderImage(feature, 3, 'gallery-feature', 'image-up', '(min-width: 900px) 88vw, 100vw')}

        {support.length > 0 && (
          <div className="gallery-support">
            {support.map((image, index) => renderImage(
              image,
              index + 4,
              'gallery-support-item',
              index === 0 ? 'image-left' : 'image-right',
              '(min-width: 900px) 48vw, 100vw',
            ))}
          </div>
        )}

        <StoryBlock story={editorial?.storyTwo} className="project-story-secondary" />

        {finale.length > 0 && (
          <div className="gallery-finale">
            {finale.map((image, index) => renderImage(
              image,
              index + 6,
              `gallery-finale-item gallery-finale-item-${index + 1}`,
              index % 2 === 0 ? 'image-left' : 'image-right',
              '(min-width: 900px) 44vw, 100vw',
              index % 2 === 0,
            ))}
          </div>
        )}
      </section>
      {lightboxIndex !== null && (
        <Lightbox images={project.gallery} projectTitle={projectTitle} initialIndex={lightboxIndex} onClose={close} copy={copy} isHebrew={isHebrew} />
      )}
    </>
  );
}
