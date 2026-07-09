import { useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * Simple scroll-linked parallax offset for a section/element.
 * speed > 0 moves slower than scroll (background), speed < 0 moves faster.
 * Usage: const { ref, y } = useParallax(0.3); <motion.div ref={ref} style={{ y }} />
 */
export const useParallax = (speed = 0.3) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`]);

  return { ref, y };
};

export default useParallax;
