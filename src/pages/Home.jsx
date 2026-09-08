import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA.jsx';
import HeroSlideshow from '../components/HeroSlideshow.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectMarquee from '../components/ProjectMarquee.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import VideoStory from '../components/VideoStory.jsx';
import { homeEditorial, projects, SITE } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const featured = projects.filter((project) => project.featured);

export default function Home() {
  const { copy, isHebrew } = useLanguage();
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', name: SITE.englishName, alternateName: SITE.name, url: SITE.url },
      { '@type': 'ProfessionalService', '@id': `${SITE.url}/#business`, name: SITE.name, alternateName: SITE.englishName, url: SITE.url, telephone: '+972522411933', email: 'hello@yahavrosen.com' },
      { '@type': 'Person', '@id': `${SITE.url}/#yahav-rosen`, name: SITE.name, alternateName: SITE.englishName, url: SITE.url },
    ],
  };

  return (
    <>
      <Seo
        title={isHebrew ? undefined : 'Interior Design Studio'}
        description={isHebrew ? SITE.description : 'Yahav Rosen interior design studio — thoughtful spaces for modern living.'}
        schema={schema}
      />
      <HeroSlideshow />

      <section id="introduction" className="vision-intro site-grid">
        <Reveal>
          <h2>{copy.home.introTitle}</h2>
          <p>{copy.home.introBody}</p>
        </Reveal>
      </section>

      <section className="vision-featured site-grid" aria-labelledby="featured-projects-title">
        <Reveal className="ruled-heading">
          <h2 id="featured-projects-title">{copy.home.featured}</h2>
          <span aria-hidden="true" />
          <Link to="/projects">{copy.home.viewAll} <b aria-hidden="true">{isHebrew ? '←' : '→'}</b></Link>
        </Reveal>
        <div className="featured-grid">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <ProjectCard project={project} eager={index === 0} sizes="(min-width: 900px) 32vw, 100vw" />
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectMarquee />

      <section className="vision-philosophy section-space site-grid" aria-labelledby="philosophy-title">
        <Reveal className="vision-philosophy-image" variant="image">
          <ResponsiveImage image={homeEditorial.stoneLiving} alt="" sizes="(min-width: 1024px) 35vw, 100vw" />
        </Reveal>
        <Reveal className="vision-philosophy-copy" delay={80}>
          <p className="eyebrow">{copy.home.philosophyEyebrow}</p>
          <h2 id="philosophy-title">{copy.home.philosophyTitle}</h2>
          <i className="short-rule" aria-hidden="true" />
          <p>{copy.home.philosophyBody}</p>
          <Link className="outline-link" to="/about">{copy.home.aboutAction}<span aria-hidden="true">{isHebrew ? '←' : '→'}</span></Link>
        </Reveal>
        <Reveal className="vision-philosophy-detail" variant="image" delay={140}>
          <ResponsiveImage image={homeEditorial.libraryDetail} alt="" sizes="(min-width: 1024px) 22vw, 100vw" />
          <p>{copy.home.imageNote}</p>
        </Reveal>
      </section>

      <ProcessSection />
      <VideoStory />
      <ContactCTA compact />
    </>
  );
}
