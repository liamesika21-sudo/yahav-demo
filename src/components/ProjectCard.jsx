import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage.jsx';
import { getProjectTitle, useLanguage } from '../i18n/LanguageContext.jsx';

export default function ProjectCard({ project, className = '', eager = false, sizes = '(min-width: 800px) 50vw, 100vw', duplicate = false }) {
  const { copy, language, isHebrew } = useLanguage();
  const title = getProjectTitle(project, language);
  return (
    <article className={`project-card ${className}`} aria-hidden={duplicate || undefined}>
      <Link className="project-card-image" to={`/projects/${project.slug}`} aria-label={`${copy.accessibility.openProject}: ${title}`} tabIndex={duplicate ? -1 : undefined}>
        <ResponsiveImage image={project.cover} alt={`${title} — ${copy.accessibility.interiorDesign}`} eager={eager} sizes={sizes} />
      </Link>
      <div className="project-caption">
        <div>
          <h3>{title}</h3>
          <p className="micro-label ltr-isolate">
            {project.stage === 'process' ? copy.projects.process : copy.projects.meta}
          </p>
        </div>
        <Link to={`/projects/${project.slug}`} className="text-link" tabIndex={duplicate ? -1 : undefined}>
          <span className="visually-hidden">{copy.accessibility.openProject}: {title}</span><span aria-hidden="true">{isHebrew ? '←' : '→'}</span>
        </Link>
      </div>
    </article>
  );
}
