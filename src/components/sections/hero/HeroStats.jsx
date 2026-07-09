import { motion } from "framer-motion";
import { FaUsers, FaBuilding, FaMicrophone, FaWifi } from "react-icons/fa";

const stats = [
  { icon: <FaUsers />, value: "500+", label: "Creators" },
  { icon: <FaBuilding />, value: "24/7", label: "Workspace Access" },
  { icon: <FaMicrophone />, value: "Studio", label: "Podcast Setup" },
  { icon: <FaWifi />, value: "High Speed", label: "Internet" },
];

const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="glass card flex flex-col items-center text-center p-4 group hover:border-primary/30 hover:shadow-pink transition-all duration-300"
        >
          <div className="icon-box text-fuchsia-400 text-2xl mb-3 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span className="group-hover:text-white transition-colors duration-300">
              {item.icon}
            </span>
          </div>
          <h3 className="text-xl font-bold">{item.value}</h3>
          <p className="text-xs text-muted mt-1">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroStats;