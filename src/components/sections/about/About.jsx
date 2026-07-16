import SectionWrapper from '../../common/SectionWrapper';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import iitLogo from "../../../assets/images/iit-guwahati-logo.png";
import nsdcLogo from "../../../assets/images/certification-badge.png";
import masaiLogo from "../../../assets/images/connect2creovox-logo.png";
import ventureLogo from "../../../assets/images/connect2future-logo.png";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <SectionWrapper id="about" className="section">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="badge">About Us</span>
          <h2 className="mt-2 heading-lg">
            Who is <span className="gradient-text">Connect2Space</span>?
          </h2>
          <p className="mt-6 text-muted max-w-3xl mx-auto text-lg">
            We are a premium creative ecosystem designed for creators, startups, and businesses.
            Our spaces blend luxury, functionality, and inspiration to help you produce your best work.
          </p>
        </motion.div>

        {/* Stats */}
        <div ref={ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Spaces', value: 12, suffix: '+' },
            { label: 'Happy Clients', value: 350, suffix: '+' },
            { label: 'Events Hosted', value: 80, suffix: '+' },
            { label: '5-Star Reviews', value: 98, suffix: '%' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center hover:shadow-pink transition">
              <div className="text-4xl md:text-5xl font-number font-bold gradient-text">
                {inView && <CountUp end={stat.value} duration={2} suffix={stat.suffix} />}
              </div>
              <p className="mt-2 text-muted text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ---- CERTIFICATION CARD WITH DARKER GLOW ---- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          {/* Animated border wrapper */}
          <div className="animated-border-card max-w-sm md:max-w-md w-full">
            {/* Inner card with side glow – darker purple/pink */}
            <div
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/40 shadow-xl shadow-gray-200/30 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-300/40 hover:-translate-y-1 overflow-hidden"
              style={{
                boxShadow: 'inset 0 0 60px rgba(184,77,255,0.15), inset 0 0 120px rgba(217,70,239,0.08), 0 10px 30px rgba(0,0,0,0.06)',
              }}
            >
              {/* Darker purple side glows – left and right */}
              <div
                className="absolute inset-y-0 left-0 w-24 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(184,77,255,0.35), transparent)',
                  zIndex: 1,
                }}
              />
              <div
                className="absolute inset-y-0 right-0 w-24 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(217,70,239,0.35), transparent)',
                  zIndex: 1,
                }}
              />

              {/* Content (above glows) */}
              <div className="relative z-10" style={{ margin: 0, padding: 0 }}>
                {/* Row 1: "A Venture Of" + Logo + Tagline */}
                <div className="text-center" style={{ margin: 0, padding: 0 }}>
                  <p style={{ margin: '0 0 -2px 0', padding: 0, fontSize: '9px', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 500, lineHeight: 1 }}>
                    A Venture Of
                  </p>
                  <div style={{ margin: '-2px 0 -2px 0', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                      src={ventureLogo}
                      alt="Connect2Future"
                      style={{ display: 'block', margin: 0, padding: 0 }}
                      className="h-20 sm:h-24 md:h-28 w-auto object-contain"
                    />
                    <p style={{ margin: '-4px 0 0 0', padding: 0, fontSize: '8px', color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 500, lineHeight: 1 }}>
                      UNLOCK THE POWER OF CONNECTIVITY
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200/60 max-w-[180px] mx-auto" style={{ margin: '2px auto' }} />

                {/* Row 2: "Certified / Associated With" + Logos */}
                <div className="text-center" style={{ margin: 0, padding: 0 }}>
                  <p style={{ margin: 0, padding: 0, fontSize: '8px', color: '#4b5563', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 500, lineHeight: 1 }}>
                    Certified / Associated With
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2" style={{ marginTop: '2px' }}>
                    <img
                      src={iitLogo}
                      alt="IIT Guwahati"
                      className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <img
                      src={nsdcLogo}
                      alt="NSDC"
                      className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                    <img
                      src={masaiLogo}
                      alt="Masai"
                      className="h-7 sm:h-9 md:h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200/60 max-w-[180px] mx-auto" style={{ margin: '2px auto' }} />

                {/* Row 3: Certification Code + Badge */}
                <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5" style={{ margin: 0, padding: 0 }}>
                  <div className="bg-gray-100 rounded-full px-2.5 sm:px-3 py-0.5 border border-gray-200 shadow-sm">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-gray-900 tracking-wider">IITGCS/24091634</span>
                  </div>
                  <div className="bg-gray-100 rounded-full px-2 sm:px-2.5 py-0.5 border border-gray-200 flex items-center gap-0.5 shadow-sm">
                    <span className="text-emerald-500 text-[7px] sm:text-[8px]">✓</span>
                    <span className="text-[7px] sm:text-[8px] font-medium text-gray-800">Official Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;