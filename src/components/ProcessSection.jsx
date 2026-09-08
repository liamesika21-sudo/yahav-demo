import Reveal from './Reveal.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ProcessSection({ className = '' }) {
  const { copy } = useLanguage();

  return (
    <section className={`process-section site-grid ${className}`} aria-labelledby="process-heading">
      <Reveal className="process-heading">
        <div className="ruled-heading">
          <p className="eyebrow">{copy.home.processEyebrow}</p>
          <span aria-hidden="true" />
        </div>
        <h2 id="process-heading">{copy.home.processTitle}</h2>
      </Reveal>
      <div className="process-grid">
        {copy.about.steps.map((step, index) => (
          <Reveal as="article" delay={index * 80} key={step.number}>
            <span>{step.number}</span>
            <i aria-hidden="true" />
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {index < copy.about.steps.length - 1 && <b className="process-arrow" aria-hidden="true">↓</b>}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
