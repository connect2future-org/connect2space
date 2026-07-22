import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { PHONE_NUMBER } from "../../../utils/contact";
import React from 'react';

// Map gradient colors per plan
const gradientMap = {
  "Premium Workspace": "from-pink-500 via-rose-500 to-purple-500",
  "Creator Corner": "from-purple-500 via-violet-500 to-indigo-500",
  "Podcast Studio": "from-pink-500 via-rose-500 to-magenta-500",
  "Meeting Space": "from-indigo-500 via-purple-500 to-violet-500",
  "Event Space": "from-purple-500 via-violet-500 to-blue-500",
  "Content Studio": "from-cyan-500 via-teal-500 to-blue-500",
};

const PricingCard = ({ plan }) => {
  const Icon = plan.icon;
  const gradient = gradientMap[plan.name] || "from-pink-500 to-purple-500";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(plan.whatsappMessage);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="group relative glass rounded-2xl p-5 flex flex-col h-full transition-all duration-300 border border-white/10 hover:border-primary/30"
    >
      {/* Icon */}
      <div className="icon-box w-12 h-12 mb-4 text-xl text-primary group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
        <Icon />
      </div>

      {/* Premium Title Strip – centered, gradient, glass, glow */}
      <div className={`w-full py-1.5 px-4 rounded-xl bg-gradient-to-r ${gradient} backdrop-blur-sm border border-white/20 shadow-lg shadow-purple-500/10 text-center transition-all duration-300 group-hover:shadow-purple-500/30 group-hover:scale-[1.02]`}>
        <h3 className="text-lg font-bold text-white drop-shadow-sm">{plan.name}</h3>
      </div>

      {/* Description */}
      <p className="text-xs text-muted mt-3 text-center">{plan.description}</p>

      {/* Price */}
      <div className="mt-4 flex items-end justify-center gap-1">
        <span className="text-3xl font-black gradient-text">{plan.price}</span>
        {plan.period && (
          <span className="text-muted text-xs mb-0.5">{plan.period}</span>
        )}
      </div>

      {/* Features */}
      <ul className="mt-4 space-y-1.5 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-light">
            <FaCheck className="text-primary text-[10px] mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="mt-5">
        <button
          onClick={handleWhatsApp}
          className="btn w-full justify-center text-xs py-2 px-4 btn-outline hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
};

export default React.memo(PricingCard);