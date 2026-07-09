import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 -> end once `start` is true (e.g. driven by
 * an in-view observer). Returns the current displayed value.
 */
export const useCounter = (end, { duration = 2000, start = true, decimals = 0 } = {}) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!start) return undefined;

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = end * eased;
      setValue(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start, decimals]);

  return value;
};

export default useCounter;
