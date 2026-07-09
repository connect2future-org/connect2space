import { motion } from "framer-motion";
import WorkspaceCard from "./WorkspaceCard";
import workspaceData from "./workspaceData";
import maleMascot from "../../../assets/images/male1.png";
import femaleMascot from "../../../assets/images/female2.png";

const WorkspaceShowcase = () => {
  return (
    <section id="workspace" className="section relative">
      <div className="container relative">
        {/* Mascots – hidden on mobile, smaller on tablet */}
        <div className="hidden md:block absolute left-[6%] lg:left-[12%] top-[110px] lg:top-[100px] z-[2] pointer-events-none">
          <motion.img
            src={maleMascot}
            alt=""
            className="w-[130px] lg:w-[220px] h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            loading="lazy"
          />
        </div>

        <div className="hidden md:block absolute right-[6%] lg:right-[12%] top-[110px] lg:top-[100px] z-[2] pointer-events-none">
          <motion.img
            src={femaleMascot}
            alt=""
            className="w-[140px] lg:w-[230px] h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            loading="lazy"
          />
        </div>

        {/* Original content unchanged */}
        <div className="section-header">
          <span className="badge">Workspace</span>
          <h2 className="heading-lg">
            Designed for <span className="gradient-text">Creativity</span>
          </h2>
          <p className="text-lg text-muted">
            Modern spaces that inspire innovation and collaboration.
          </p>
        </div>

        <div className="space-y-24">
          {workspaceData.map((item, index) => (
            <WorkspaceCard key={item.id} item={item} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkspaceShowcase;