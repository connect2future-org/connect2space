import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SectionWrapper = ({ id, children, className = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 md:px-12 lg:px-24 ${
        dark ? 'bg-gradient-dark' : ''
      } ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

SectionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  dark: PropTypes.bool,
};

export default SectionWrapper;