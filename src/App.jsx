import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import { useLanguage } from './i18n/LanguageContext.jsx';

export default function App() {
  const { copy } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main-content">{copy.accessibility.skip}</a>
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
