import { Link, Navigate, useParams } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA.jsx';
import ProjectGallery from '../components/ProjectGallery.jsx';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { getNextProject, getPreviousProject, getProjectBySlug, SITE } from '../data/siteContent.js';
import { getProjectTitle, useLanguage } from '../i18n/LanguageContext.jsx';

export default function ProjectPage() {
  const { slug } = useParams();
  const { copy, language, isHebrew } = useLanguage();
  const project = getProjectBySlug(slug);
  if (!project) return <Navigate to="/404" replace />;
  const nextProject = getNextProject(project.slug);
  const previousProject = getPreviousProject(project.slug);
  const title = getProjectTitle(project, language);
  const editorial = project.editorial?.[language];
  const description = editorial?.intro || (isHebrew ? `${title} — פרויקט עיצוב פנים מאת ${SITE.name}.` : `${title} — an interior design project by ${SITE.englishName}.`);
  const total = String(project.gallery.length).padStart(2, '0');
  const firstGalleryId = `${project.id}-gallery-02`;
  const lastGalleryId = `${project.id}-gallery-${total}`;

  return (
    <article className="project-page inner-page">
      <Seo title={title} description={description} path={`/projects/${project.slug}`} image={project.cover.src} />
      <figure className={`project-hero project-hero-${project.id}`}>
        <ResponsiveImage image={project.cover} alt={`${title} — ${copy.projects.meta}`} eager sizes="100vw" />
        <span className="project-hero-note ltr-isolate">01 / {total}</span>
      </figure>
      <Reveal as="header" className="project-intro site-grid">
        <Link className="project-back" to="/projects"><span aria-hidden="true">{isHebrew ? '→' : '←'}</span> {copy.project.back}</Link>
        <div className="project-intro-title">
          <h1>{title}</h1>
          <p className="project-metadata">
            {editorial?.metadata?.map((item, index) => (
              <span key={item}>{index > 0 && <i aria-hidden="true">/</i>}{item}</span>
            ))}
          </p>
        </div>
        <div className="project-intro-copy">
          <p>{description}</p>
          {editorial?.tagline && <span>{editorial.tagline}</span>}
        </div>
      </Reveal>
      <div className="gallery-intro site-grid">
        <span>{copy.project.gallery}</span>
        <i aria-hidden="true" />
        <span className="gallery-toolbar-count ltr-isolate">02 / {total}</span>
        <nav className="gallery-toolbar-nav" aria-label={copy.accessibility.projectGallery}>
          <a href={`#${firstGalleryId}`} aria-label={copy.accessibility.previousImage}>←</a>
          <a href={`#${lastGalleryId}`} aria-label={copy.accessibility.nextImage}>→</a>
        </nav>
      </div>
      <ProjectGallery project={project} />
      <section className="project-end site-grid">
        <nav className="project-direction-nav" aria-label={copy.projects.all}>
          <Link to={`/projects/${previousProject.slug}`}><span aria-hidden="true">{isHebrew ? '→' : '←'}</span> {copy.project.previous}</Link>
          <Link to={`/projects/${nextProject.slug}`}>{copy.project.next} <span aria-hidden="true">{isHebrew ? '←' : '→'}</span></Link>
        </nav>
        <a className="project-gallery-link" href={`#${firstGalleryId}`}>{copy.project.viewGallery}<span aria-hidden="true">{isHebrew ? '←' : '→'}</span></a>
      </section>
      <ContactCTA variant="project" />
    </article>
  );
}
