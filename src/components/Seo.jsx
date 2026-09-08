import { useEffect } from 'react';
import { SITE } from '../data/siteContent.js';
import { useLanguage } from '../i18n/LanguageContext.jsx';

function setMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
}

export default function Seo({ title, description, path = '/', image = '/media/site/og-cover.jpg', schema }) {
  const { language, isHebrew } = useLanguage();
  const resolvedDescription = description || (isHebrew
    ? SITE.description
    : 'Yahav Rosen interior design studio — thoughtful, timeless spaces for modern living.');

  useEffect(() => {
    const brand = isHebrew ? SITE.name : SITE.englishName;
    const pageTitle = title ? `${title} | ${brand}` : (isHebrew ? `${SITE.name} | עיצוב פנים` : `${SITE.englishName} | INTERIOR DESIGN`);
    const canonical = new URL(path, SITE.url).toString();
    const shareImage = new URL(image, SITE.url).toString();
    document.title = pageTitle;

    setMeta('meta[name="description"]', { name: 'description', content: resolvedDescription });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: resolvedDescription });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    setMeta('meta[property="og:image"]', { property: 'og:image', content: shareImage });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: resolvedDescription });
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: shareImage });

    let canonicalNode = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalNode) {
      canonicalNode = document.createElement('link');
      canonicalNode.rel = 'canonical';
      document.head.appendChild(canonicalNode);
    }
    canonicalNode.href = canonical;

    const schemaId = 'page-schema';
    document.getElementById(schemaId)?.remove();
    if (schema) {
      const script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById(schemaId)?.remove();
  }, [image, isHebrew, language, path, resolvedDescription, schema, title]);

  return null;
}
