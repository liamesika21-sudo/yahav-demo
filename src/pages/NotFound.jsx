import { Link } from 'react-router-dom';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import Seo from '../components/Seo.jsx';
import { projects } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function NotFound() {
  const { copy, isHebrew } = useLanguage();
  return (
    <section className="not-found inner-page">
      <Seo title={copy.notFound.title} path="/404" />
      <div className="not-found-image" aria-hidden="true">
        <ResponsiveImage image={projects[0].gallery[3]} alt="" eager sizes="100vw" />
      </div>
      <div className="not-found-content">
        <p>YAHAV ROSEN</p>
        <h1>{copy.notFound.title}</h1>
        <Link className="text-link" to="/projects">{copy.notFound.action} <span aria-hidden="true">{isHebrew ? '←' : '→'}</span></Link>
      </div>
    </section>
  );
}
