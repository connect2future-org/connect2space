import { useInView } from 'react-intersection-observer';

/**
 * Thin wrapper around react-intersection-observer tuned for scroll-reveal
 * animations (fade + slide up on enter). Returns a ref to attach and an
 * `isVisible` flag plus ready-made framer-motion props you can spread.
 */
export const useScrollReveal = ({ threshold = 0.2, triggerOnce = true, delay = 0 } = {}) => {
  const [ref, isVisible] = useInView({ threshold, triggerOnce });

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    animate: isVisible ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  };

  return { ref, isVisible, motionProps };
};

export default useScrollReveal;
