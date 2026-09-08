import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CONTACT, projects, SITE } from '../data/siteContent.js';
import { getProjectTitle, useLanguage } from '../i18n/LanguageContext.jsx';

const navigation = [
  { key: 'designs', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const overHero = pathname === '/';
  const { copy, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusable = menuRef.current?.querySelectorAll('a, button');
    focusable?.[0]?.focus();
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key !== 'Tab' || !focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  const headerClass = `site-header ${overHero && !scrolled && !open ? 'is-over-hero' : 'is-solid'} ${open ? 'menu-is-open' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-inner site-grid">
        <Link className="brand-lockup ltr-isolate" to="/" aria-label={copy.accessibility.home}>
          <span>{SITE.englishName}</span>
          <small>INTERIOR DESIGN STUDIO</small>
        </Link>
        <div className="desktop-actions">
          <nav className="desktop-nav" aria-label={copy.accessibility.primaryNav}>
          {navigation.map((link) => (
            <NavLink key={link.href} to={link.href} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
              {copy.nav[link.key]}
            </NavLink>
          ))}
          </nav>
          <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={copy.accessibility.switchLanguage}>
            {copy.languageCode}
          </button>
        </div>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? copy.accessibility.closeMenu : copy.accessibility.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div ref={menuRef} id="mobile-menu" className="mobile-menu" aria-hidden={!open}>
        <nav aria-label={copy.accessibility.primaryNav}>
          {navigation.map((link, index) => (
            <Link to={link.href} tabIndex={open ? 0 : -1} key={link.href}>
              <span>0{index + 1}</span>{copy.nav[link.key]}
            </Link>
          ))}
        </nav>
        <div className="mobile-projects">
          {projects.map((project) => (
            <Link to={`/projects/${project.slug}`} tabIndex={open ? 0 : -1} key={project.slug}>{getProjectTitle(project, language)}</Link>
          ))}
        </div>
        <div className="mobile-contact ltr-isolate">
          <a href={CONTACT.phoneHref} tabIndex={open ? 0 : -1}>{CONTACT.phoneDisplay}</a>
          <a href={CONTACT.emailHref} tabIndex={open ? 0 : -1}>{CONTACT.email}</a>
          <button className="language-toggle" type="button" tabIndex={open ? 0 : -1} onClick={toggleLanguage} aria-label={copy.accessibility.switchLanguage}>
            {copy.languageName}
          </button>
        </div>
      </div>
    </header>
  );
}
