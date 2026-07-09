import SectionWrapper from '../../common/SectionWrapper';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <SectionWrapper id="about" className="section">
      <div className="container">
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
      </div>
    </SectionWrapper>
  );
};

export default About;