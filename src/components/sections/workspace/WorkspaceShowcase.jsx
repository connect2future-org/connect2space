import { motion } from "framer-motion";
import WorkspaceCard from "./WorkspaceCard";
import workspaceData from "./workspaceData";
import maleMascot from "../../../assets/images/male1.png";
import femaleMascot from "../../../assets/images/female2.png";

const WorkspaceShowcase = () => {
  return (
    <section id="workspace" className="section relative">
      <div className="container">
        {/* --- ORIGINAL HEADER (unchanged) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">Workspace</span>
          <h2 className="heading-lg">
            Designed for <span className="gradient-text">Creativity</span>
          </h2>
          <p className="text-lg text-muted">
            Modern spaces that inspire innovation and collaboration.
          </p>
        </motion.div>

        {/* --- ORIGINAL GRID OF CARDS (unchanged) --- */}
        <div className="space-y-24">
          {workspaceData.map((item, index) => (
            <WorkspaceCard key={item.id} item={item} reverse={index % 2 !== 0} />
          ))}
        </div>

        {/* --- DECORATIVE MASCOTS (absolute, larger) --- */}
        {/* Male mascot – left */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            top: '100px',
            left: '12%',
            width: '220px',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <motion.img
            src={maleMascot}
            alt=""
            className="w-full h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Female mascot – right */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            top: '100px',
            right: '12%',
            width: '230px',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <motion.img
            src={femaleMascot}
            alt=""
            className="w-full h-auto object-contain"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkspaceShowcase;