import { useState } from 'react';
import Seo from '../components/Seo.jsx';
import ResponsiveImage from '../components/ResponsiveImage.jsx';
import Reveal from '../components/Reveal.jsx';
import { CONTACT, projects } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const { copy, isHebrew } = useLanguage();
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [
      `${copy.contact.greeting} ${data.get('name')}.`,
      data.get('phone') && `${copy.contact.phoneMessage}: ${data.get('phone')}`,
      data.get('email') && `${copy.contact.emailMessage}: ${data.get('email')}`,
      data.get('message') && `${copy.contact.projectMessage}: ${data.get('message')}`,
    ].filter(Boolean);
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    setStatus(copy.contact.status);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="inner-page contact-page">
      <Seo title={copy.nav.contact} path="/contact" />
      <Reveal as="header" className="page-intro contact-heading site-grid">
        <p className="eyebrow">{copy.contact.eyebrow}</p>
        <h1>{copy.contact.title}</h1>
        <i className="short-rule" aria-hidden="true" />
        <p>{copy.contact.body}</p>
      </Reveal>
      <div className="contact-layout site-grid">
        <Reveal as="form" className="contact-form" onSubmit={submit}>
          <label>
            <span>{copy.contact.name}</span>
            <input name="name" autoComplete="name" required />
          </label>
          <div className="form-row">
            <label>
              <span>{copy.contact.phone}</span>
              <input name="phone" type="tel" autoComplete="tel" inputMode="tel" />
            </label>
            <label>
              <span>{copy.contact.email}</span>
              <input name="email" type="email" autoComplete="email" />
            </label>
          </div>
          <label>
            <span>{copy.contact.message}</span>
            <textarea name="message" rows="5" required />
          </label>
          <button className="form-submit" type="submit">{copy.contact.submit} <span aria-hidden="true">{isHebrew ? '←' : '→'}</span></button>
          <p className="form-status" aria-live="polite">{status}</p>
        </Reveal>
        <Reveal as="address" className="contact-details ltr-isolate" delay={80}>
          <p className="eyebrow">{copy.contact.direct}</p>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WHATSAPP ↗</a>
        </Reveal>
      </div>
      <Reveal className="contact-banner" variant="image"><ResponsiveImage image={projects[0].gallery[1]} alt="" sizes="100vw" /><span>{copy.home.imageNote}</span></Reveal>
    </div>
  );
}
