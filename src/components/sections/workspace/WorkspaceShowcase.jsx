import { motion } from "framer-motion";
import WorkspaceCard from "./WorkspaceCard";
import workspaceData from "./workspaceData";
import maleMascot from "../../../assets/images/male1.png";
import femaleMascot from "../../../assets/images/female2.png";

const WorkspaceShowcase = () => {
  return (
    <section id="workspace" className="section relative">
      <div className="container">
        {/* Mascots + Heading – using flex for perfect alignment */}
        <div className="flex items-center justify-between gap-4 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Female mascot – left */}
          <div className="hidden md:block flex-shrink-0 w-[100px] lg:w-[160px] xl:w-[180px]">
            <motion.img
              src={femaleMascot}
              alt=""
              className="w-full h-auto object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
          </div>

          {/* Heading – centered */}
          <div className="flex-1 text-center">
            <span className="badge">Workspace</span>
            <h2 className="heading-lg">
              Designed for <span className="gradient-text">Creativity</span>
            </h2>
            <p className="text-lg text-muted mt-2">
              Modern spaces that inspire innovation and collaboration.
            </p>
          </div>

          {/* Male mascot – right */}
          <div className="hidden md:block flex-shrink-0 w-[110px] lg:w-[170px] xl:w-[190px]">
            <motion.img
              src={maleMascot}
              alt=""
              className="w-full h-auto object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Workspace Cards – unchanged */}
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