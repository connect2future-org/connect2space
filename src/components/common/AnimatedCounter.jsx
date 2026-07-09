import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

/**
 * Drop-in stat counter: fades/counts up once it enters the viewport.
 * Matches the gradient-text / font-number styling used on Hero & About.
 */
const AnimatedCounter = ({ value, suffix = '', label, duration = 2, className = '' }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className={`glass rounded-2xl p-6 text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-number font-bold gradient-text">
        {inView && <CountUp end={value} duration={duration} suffix={suffix} />}
      </div>
      {label && <p className="mt-2 text-muted text-sm uppercase tracking-wider">{label}</p>}
    </div>
  );
};

AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default AnimatedCounter;
