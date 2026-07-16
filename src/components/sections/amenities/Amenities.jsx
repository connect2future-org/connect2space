import { motion } from "framer-motion";
import { FaWifi, FaCoffee, FaChair, FaMicrophone, FaClock, FaHeadset } from "react-icons/fa";

const amenitiesData = [
  { icon: FaWifi, title: "High-speed WiFi", gradient: "from-purple-500 to-violet-500" },
  { icon: FaCoffee, title: "Coffee & Tea Bar", gradient: "from-pink-500 to-rose-500" },
  { icon: FaChair, title: "Standing Desks", gradient: "from-indigo-500 to-purple-500" },
  { icon: FaMicrophone, title: "Podcast Equipment", gradient: "from-violet-500 to-fuchsia-500" },
  { icon: FaClock, title: "24/7 Access", gradient: "from-blue-500 to-cyan-500" },
  { icon: FaHeadset, title: "On-site Support", gradient: "from-cyan-500 to-teal-500" },
];

const Amenities = () => {
  return (
    <section id="amenities" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">Amenities</span>
          <h2 className="heading-lg">Everything You <span className="gradient-text">Need</span></h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-sm mx-auto">
          {amenitiesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3, scale: 1.03 }}
                className={`relative overflow-hidden rounded-xl p-3 text-center transition-all duration-300 bg-gradient-to-br ${item.gradient} border border-white/10 shadow-md hover:shadow-lg hover:border-white/20 aspect-square flex flex-col items-center justify-center`}
              >
                <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] -z-10" />
                <div className="icon-box mx-auto mb-1.5 text-base text-white bg-white/20 backdrop-blur-sm shadow-sm w-9 h-9 flex items-center justify-center rounded-lg">
                  <Icon />
                </div>
                <h4 className="text-[10px] font-bold text-white drop-shadow-md text-center leading-tight">{item.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;