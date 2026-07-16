import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const HeroContent = () => {
  return (
    <motion.div
      className="hero-content flex flex-col items-start"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Badge – forced white & bold with inline style */}
      <span
        className="badge"
        style={{
          color: '#FFFFFF',
          fontWeight: 700,
          marginTop: 0,
          marginBottom: '4px',
        }}
      >
        Premium Workspace • Podcast Studio • Creator Hub
      </span>
      <h1 className="mt-1 heading-xl">
        Create.<br />Collaborate.<br /><span className="gradient-text">Connect.</span>
      </h1>
      <p className="text-lg text-muted max-w-[600px] mt-3 leading-relaxed">
        Experience Mysuru's most premium workspace, podcast studio and creator hub designed for
        entrepreneurs, startups, freelancers, creators and growing businesses.
      </p>
      <div className="mt-5">
        <HeroButtons />
      </div>
      <div className="mt-8 w-full">
        <HeroStats />
      </div>
    </motion.div>
  );
};

export default HeroContent;