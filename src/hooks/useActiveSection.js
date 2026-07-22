import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash'; // or you can implement a simple throttle function

const sections = ['home', 'workspace', 'services', 'about', 'gallery', 'pricing', 'contact'];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(
    throttle(() => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return activeSection;
};