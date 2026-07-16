import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { WHATSAPP_URL } from "../../../utils/contact";

const WorkspaceCard = ({ item, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <div className="overflow-hidden rounded-[28px] group shadow-glass">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[380px] object-cover duration-700 group-hover:scale-105"
          />
        </div>
      </div>
      <div>
        <p className="uppercase tracking-[3px] text-primary text-sm">{item.subtitle}</p>
        <h2 className="text-3xl lg:text-4xl font-heading font-bold mt-4">{item.title}</h2>
        <p className="text-muted leading-relaxed mt-4">{item.description}</p>
        <div className="grid grid-cols-2 gap-3 mt-6">
          {item.features.map((feature) => (
            <div key={feature} className="glass glass-hover rounded-xl px-4 py-3 text-sm hover:shadow-pink transition">
              ✓ {feature}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-8">
          <h3 className="text-2xl font-number gradient-text">{item.price}</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary flex items-center gap-2 text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition"
          >
            Book Your Space <FaArrowRight />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkspaceCard;