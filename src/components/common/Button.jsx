import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base =
    'relative px-6 py-3 font-button font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background';
  const variants = {
    primary:
      'bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-lg hover:shadow-glow-primary',
    outline:
      'border border-gradient-primary text-white bg-transparent hover:bg-white/10',
    ghost: 'text-white hover:bg-white/10',
  };

  return (
    <motion.button
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(217,70,239,0.3)' }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost']),
  className: PropTypes.string,
};

export default Button;