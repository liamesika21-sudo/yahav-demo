import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { heroSlides } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ResponsiveImage from './ResponsiveImage.jsx';

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0, 1]));
  const touchStart = useRef(null);
  const total = heroSlides.length;
  const { copy, language } = useLanguage();

  const move = useCallback((direction) => {
    setActive((current) => (current + direction + total) % total);
  }, [total]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || media.matches) return undefined;
    const timer = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(timer);
  }, [active, move, paused]);

  useEffect(() => {
    const handleVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  useEffect(() => {
    setLoadedSlides((current) => new Set([...current, active, (active + 1) % total]));
  }, [active, total]);

  return (
    <section
      className="hero"
      role="region"
      aria-roledescription="carousel"
      aria-label={copy.home.featured}
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') move(language === 'he' ? 1 : -1);
        if (event.key === 'ArrowRight') move(language === 'he' ? -1 : 1);
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(distance) > 42) move(distance < 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="hero-copy-panel">
        <div className="hero-copy">
          <p className="eyebrow hero-load-eyebrow">{copy.home.heroEyebrow}</p>
          <h1 className="hero-load-title">
            <span className="hero-title-desktop">{copy.home.heroTitleDesktop.map((line) => <b key={line}>{line}</b>)}</span>
            <span className="hero-title-mobile">{copy.home.heroTitleMobile.map((line) => <b key={line}>{line}</b>)}</span>
          </h1>
          <i className="short-rule hero-load-body" aria-hidden="true" />
          <p className="hero-summary hero-load-body">{copy.home.heroBody}</p>
          <Link className="outline-link" to="/projects">
            {copy.home.heroAction}<span aria-hidden="true">{language === 'he' ? '←' : '→'}</span>
          </Link>
        </div>
        <div className="hero-pagination" aria-label={copy.home.featured}>
          {heroSlides.map((slide, index) => (
            <button
              className={index === active ? 'is-active' : ''}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${copy.home.featured} — ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              key={slide.image.src}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-slides">
          {heroSlides.map((slide, index) => (
            <div className={`hero-slide ${active === index ? 'is-active' : ''}`} aria-hidden={active !== index} key={slide.image.src}>
              {loadedSlides.has(index) && (
                <ResponsiveImage
                  image={slide.image}
                  alt={active === index ? copy.home.imageNote : ''}
                  eager={index === 0}
                  sizes="(min-width: 900px) 72vw, 100vw"
                />
              )}
            </div>
          ))}
        </div>
        <div className="hero-pagination hero-pagination-mobile" aria-label={copy.home.featured}>
          {heroSlides.map((slide, index) => (
            <button
              className={index === active ? 'is-active' : ''}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${copy.home.featured} — ${index + 1}`}
              aria-current={index === active ? 'true' : undefined}
              key={slide.image.src}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
        <Link className="hero-image-note" to="/projects">
          <span>{copy.home.imageNote}</span>
        </Link>
      </div>
    </section>
  );
}
