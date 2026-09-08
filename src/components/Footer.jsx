import { Link } from 'react-router-dom';
import { CONTACT, SITE } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

const navigation = [
  { key: 'designs', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

export default function Footer() {
  const { copy } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="footer-main site-grid">
        <div>
          <Link className="footer-brand ltr-isolate" to="/">{SITE.englishName}</Link>
          <p className="footer-discipline ltr-isolate">INTERIOR DESIGN STUDIO</p>
        </div>
        <p className="footer-tagline">{copy.footer.tagline}</p>
        <nav className="footer-nav" aria-label={copy.accessibility.footerNav}>
          {navigation.map((link) => <Link to={link.href} key={link.href}>{copy.nav[link.key]}</Link>)}
          <a href="#top">{copy.footer.backToTop} ↑</a>
        </nav>
      </div>
      <div className="footer-bottom site-grid">
        <address className="footer-contact ltr-isolate">
          <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">WHATSAPP ↗</a>
        </address>
        <span className="ltr-isolate">© {new Date().getFullYear()} {SITE.englishName}</span>
        <span>{copy.footer.rights}</span>
      </div>
    </footer>
  );
}
