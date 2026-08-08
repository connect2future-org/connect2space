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

  // Handle Home-section navigation from both:
  // 1. Home page
  // 2. Space/Service detail pages
  //
  // Works with:
  // - Desktop + Lenis
  // - Mobile + native browser scrolling
  // - Lazy-loaded Home sections

  useEffect(() => {
    const hash = location.hash;

    // When opening a detail page without a hash,
    // always start from the top.
    if (!hash) {
      if (location.pathname !== "/") {
        const resetScroll = () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
          });

          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, {
              immediate: true,
            });
          }
        };

        requestAnimationFrame(resetScroll);
      }

      return;
    }

    const targetId = hash.substring(1);

    // Home should always start at the absolute top.
    // Do not apply the navbar offset to Home.
    if (targetId === "home") {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "auto",
        });

        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, {
            immediate: true,
          });
        }
      });

      return;
    }

    let attempts = 0;
    const maxAttempts = 120;

    const findAndScroll = () => {
      const element = document.getElementById(targetId);

      // Lazy-loaded sections may not exist immediately.
      if (!element) {
        attempts += 1;

        if (attempts < maxAttempts) {
          requestAnimationFrame(findAndScroll);
        }

        return;
      }

      const navbarOffset = 100;

      const targetTop =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        navbarOffset;

      const finalPosition = Math.max(0, targetTop);

      // Desktop: use Lenis.
      if (lenisRef.current) {
        lenisRef.current.scrollTo(finalPosition, {
          duration: 1.1,
        });
      } else {
        // Mobile/tablet: use native smooth scrolling.
        window.scrollTo({
          top: finalPosition,
          left: 0,
          behavior: "smooth",
        });
      }
    };

    // Give React one frame to render the Home page.
    requestAnimationFrame(findAndScroll);

    return () => {
      attempts = maxAttempts;
    };
  }, [location.pathname, location.hash]);

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