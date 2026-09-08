import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/siteContent.js';
import ProjectCard from './ProjectCard.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ProjectMarquee() {
  const { copy } = useLanguage();
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const drag = useRef({ active: false, moved: false, x: 0, scroll: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: .15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`project-discovery ${visible ? 'is-visible' : ''}`} aria-labelledby="project-discovery-title">
      <div className="marquee-heading site-grid">
        <h2 id="project-discovery-title">{copy.home.moreProjects}</h2>
        <span aria-hidden="true" />
        <p>{copy.home.journey} <b aria-hidden="true">→</b></p>
      </div>
      <div
        ref={viewportRef}
        className="marquee-viewport"
        onPointerDown={(event) => {
          drag.current = { active: true, moved: false, x: event.clientX, scroll: viewportRef.current.scrollLeft };
          viewportRef.current.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!drag.current.active) return;
          const distance = event.clientX - drag.current.x;
          if (Math.abs(distance) > 5) drag.current.moved = true;
          viewportRef.current.scrollLeft = drag.current.scroll - distance;
        }}
        onPointerUp={() => { drag.current.active = false; }}
        onPointerCancel={() => { drag.current.active = false; }}
        onClickCapture={(event) => {
          if (drag.current.moved) {
            event.preventDefault();
            event.stopPropagation();
            drag.current.moved = false;
          }
        }}
      >
        <div className="marquee-track">
          {[0, 1].map((setIndex) => (
            <div className="marquee-set" aria-hidden={setIndex === 1 || undefined} key={setIndex}>
              {projects.map((project) => (
                <ProjectCard
                  project={project}
                  className="marquee-card"
                  sizes="(min-width: 800px) 220px, 78vw"
                  duplicate={setIndex === 1}
                  key={`${project.slug}-${setIndex}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
