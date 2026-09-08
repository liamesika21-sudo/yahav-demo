import ProjectCard from '../components/ProjectCard.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import { projects } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ProjectsPage() {
  const { copy } = useLanguage();
  return (
    <div className="inner-page projects-page">
      <Seo title={copy.projects.title} path="/projects" />
      <Reveal as="header" className="projects-overview site-grid">
        <div className="projects-title-block">
          <p className="eyebrow"><span className="desktop-only">{copy.projects.eyebrow}</span><span className="mobile-only">{copy.projects.mobileEyebrow}</span></p>
          <h1><span className="desktop-only">{copy.projects.title}</span><span className="mobile-only">{copy.projects.mobileTitle}</span></h1>
          <i className="short-rule" aria-hidden="true" />
        </div>
        <p>{copy.projects.body}</p>
        <span className="project-count">01 — {String(projects.length).padStart(2, '0')}</span>
      </Reveal>
      <Reveal className="archive-rule site-grid"><b>{copy.projects.all}</b><span /><p>{copy.projects.tagline}</p></Reveal>
      <section className="projects-archive site-grid" aria-label={copy.projects.all}>
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 100} className={`archive-entry archive-entry-${index + 1}`}>
            <ProjectCard project={project} eager={index < 2} sizes="(min-width: 800px) 48vw, 100vw" />
            {project.stage === 'process' && <span className="process-label">{copy.projects.process}</span>}
          </Reveal>
        ))}
      </section>
    </div>
  );
}
