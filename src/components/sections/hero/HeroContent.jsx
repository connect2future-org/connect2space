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
      <span className="badge">Premium Workspace • Podcast Studio • Creator Hub</span>
      <h1 className="mt-4 heading-xl">
        Create.<br />Collaborate.<br /><span className="gradient-text">Connect.</span>
      </h1>
      <p className="text-lg text-muted max-w-[600px] mt-6 leading-relaxed">
        Experience Mysuru's most premium workspace, podcast studio and creator hub designed for
        entrepreneurs, startups, freelancers, creators and growing businesses.
      </p>
      <div className="mt-8">
        <HeroButtons />
      </div>
      <div className="mt-12 w-full">
        <HeroStats />
      </div>
    </motion.div>
  );
};

export default HeroContent;