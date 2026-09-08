import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, homeEditorial } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import ResponsiveImage from './ResponsiveImage.jsx';
import Reveal from './Reveal.jsx';

export default function ContactCTA({ compact = false, variant = 'default' }) {
  const { copy, isHebrew } = useLanguage();
  const [status, setStatus] = useState('');

  if (variant === 'project') {
    return (
      <Reveal as="section" className="project-contact-cta site-grid" aria-labelledby="project-contact-title">
        <div className="project-contact-heading">
          <p className="eyebrow">{copy.project.contactEyebrow}<i aria-hidden="true" /></p>
          <h2 id="project-contact-title">{copy.project.contactTitle}</h2>
        </div>
        <p>{copy.project.contactBody}</p>
        <Link className="outline-link" to="/contact">{copy.project.contactAction}<span aria-hidden="true">{isHebrew ? '←' : '→'}</span></Link>
      </Reveal>
    );
  }

  if (compact) {
    const submit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const message = [
        `${copy.contact.greeting} ${data.get('name')}.`,
        data.get('email') && `${copy.contact.emailMessage}: ${data.get('email')}`,
      ].filter(Boolean).join('\n');
      setStatus(copy.contact.status);
      window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    };

    return (
      <section className="home-contact" aria-labelledby="home-contact-title">
        <div className="home-contact-inner site-grid">
          <Reveal className="home-contact-copy">
            <p className="eyebrow">{copy.home.ctaEyebrow}</p>
            <h2 id="home-contact-title">{copy.home.ctaTitle}</h2>
            <i className="short-rule" aria-hidden="true" />
            <p>{copy.contact.body}</p>
          </Reveal>
          <Reveal as="form" className="home-contact-form" onSubmit={submit} delay={80}>
            <label><span>{copy.contact.name}</span><input name="name" autoComplete="name" required /></label>
            <label><span>{copy.contact.email}</span><input name="email" type="email" autoComplete="email" required /></label>
            <button type="submit">{copy.contact.submit}<span aria-hidden="true">{isHebrew ? '←' : '→'}</span></button>
            <p className="form-status" aria-live="polite">{status}</p>
          </Reveal>
        </div>
        <Reveal as="figure" className="home-contact-image" variant="image">
          <ResponsiveImage image={homeEditorial.livingTv} alt="" sizes="100vw" />
          <figcaption>{copy.home.imageNote}</figcaption>
        </Reveal>
      </section>
    );
  }

  return (
    <section className="contact-cta site-grid" aria-labelledby="contact-cta-title">
      <p className="eyebrow">{copy.home.ctaEyebrow}</p>
      <h2 id="contact-cta-title">{copy.home.ctaTitle}</h2>
      <Link className="outline-link" to="/contact">{copy.home.ctaAction} <span aria-hidden="true">{isHebrew ? '←' : '→'}</span></Link>
    </section>
  );
}
