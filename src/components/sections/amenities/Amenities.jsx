import { motion } from "framer-motion";
import { FaWifi, FaCoffee, FaChair, FaMicrophone, FaClock, FaHeadset } from "react-icons/fa";

const amenitiesData = [
  { icon: FaWifi, title: "High-speed WiFi", desc: "500 Mbps dedicated internet for seamless work." },
  { icon: FaCoffee, title: "Coffee & Tea Bar", desc: "Premium coffee, teas, and refreshments all day." },
  { icon: FaChair, title: "Standing Desks", desc: "Ergonomic sit-stand desks for your comfort." },
  { icon: FaMicrophone, title: "Podcast Equipment", desc: "Professional mics, mixers, and soundproofing." },
  { icon: FaClock, title: "10-6pm Access", desc: "Round-the-clock entry for members." },
  { icon: FaHeadset, title: "On-site Support", desc: "Dedicated staff to assist you anytime." },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenitiesData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-pink transition-all duration-300 group hover:border-primary/30"
              >
                <div className="icon-box mx-auto mb-4 text-2xl text-primary group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="text-2xl group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-sm text-muted mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;