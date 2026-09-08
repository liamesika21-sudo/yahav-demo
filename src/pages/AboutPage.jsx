import ContactCTA from '../components/ContactCTA.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import Reveal from '../components/Reveal.jsx';
import Seo from '../components/Seo.jsx';
import { homeEditorial } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function AboutPage() {
  const { copy, isHebrew } = useLanguage();
  return (
    <div className="inner-page about-page">
      <Seo title={copy.about.eyebrow} path="/about" />
      <section className="about-vision-hero">
        <div className="about-vision-copy">
          <p className="eyebrow">{copy.about.eyebrow}</p>
          <h1>{copy.about.title}</h1>
          <i className="short-rule" aria-hidden="true" />
          <p>{copy.about.body1}</p>
          <a className="outline-link" href="#philosophy">{copy.about.philosophy}<span aria-hidden="true">{isHebrew ? '←' : '→'}</span></a>
        </div>
        <div className="about-vision-image">
          <ResponsiveImage image={homeEditorial.stoneLiving} alt="" eager sizes="(min-width: 1024px) 72vw, 100vw" />
          <span>{copy.projects.tagline}</span>
        </div>
      </section>
      <section id="philosophy" className="about-philosophy site-grid">
        <Reveal className="about-detail-image" variant="image"><ResponsiveImage image={homeEditorial.livingRoom} alt="" sizes="40vw" /></Reveal>
        <Reveal className="about-philosophy-copy">
          <p className="eyebrow">{copy.about.philosophy}</p>
          <h2>{copy.about.philosophyTitle}</h2>
          <i className="short-rule" aria-hidden="true" />
          <p>{copy.about.philosophyBody}</p>
        </Reveal>
        <Reveal className="about-still-life" variant="image"><ResponsiveImage image={homeEditorial.libraryDetail} alt="" sizes="28vw" /><span>{copy.home.imageNote}</span></Reveal>
      </section>
      <ProcessSection className="about-process" />
      <ContactCTA />
    </div>
  );
}
