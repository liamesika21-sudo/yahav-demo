import { useEffect, useRef } from 'react';
import { processVideo } from '../data/siteContent.js';
import Reveal from './Reveal.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function VideoStory() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const { copy } = useLanguage();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return undefined;

    video.muted = true;

    const setPlayback = (isVisible) => {
      if (isVisible && !document.hidden) {
        video.play().catch(() => {
          // Muted inline playback is supported by modern browsers; failure is harmless.
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => setPlayback(entry.isIntersecting),
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' },
    );

    const handleVisibility = () => setPlayback(!document.hidden && section.getBoundingClientRect().bottom > 0 && section.getBoundingClientRect().top < window.innerHeight);

    observer.observe(section);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      video.pause();
    };
  }, []);

  return (
    <section ref={sectionRef} className="video-story section-space site-grid" aria-labelledby="video-story-title">
      <Reveal className="video-story-copy">
        <p className="eyebrow">{copy.home.videoEyebrow}</p>
        <h2 id="video-story-title">{copy.home.videoTitle}</h2>
        <i className="short-rule" aria-hidden="true" />
        <p>{copy.home.videoBody}</p>
      </Reveal>
      <Reveal className="video-frame" variant="image" delay={90}>
        <video
          ref={videoRef}
          src={processVideo.src}
          poster={processVideo.poster}
          aria-label={copy.home.videoTitle}
          muted
          loop
          playsInline
          preload="metadata"
        />
      </Reveal>
    </section>
  );
}
