import PropTypes from 'prop-types';

const SectionHeading = ({ title, highlight, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="font-heading font-extrabold text-4xl md:text-5xl heading-glow">
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-muted max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['center', 'left', 'right']),
};

export default SectionHeading;