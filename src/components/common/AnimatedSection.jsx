import { motion } from "framer-motion";

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: .8,
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;