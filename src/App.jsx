import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import SpaceDetail from './pages/SpaceDetail';
import metaData from './data/meta.json';

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // native scroll on mobile

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          lenis.scrollTo(element, { offset: -100 });
        } else {
          lenis.scrollTo(0, { immediate: true });
        }
      }, 300);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location]);

  return (
    <Layout>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={metaData.twitterSite} />
        <link rel="canonical" href="https://connect2space.in" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/spaces/:id" element={<SpaceDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;