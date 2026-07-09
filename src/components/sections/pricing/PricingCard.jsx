import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { PHONE_NUMBER } from "../../../utils/contact";

const PricingCard = ({ plan }) => {
  const Icon = plan.icon;

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
      {/* Icon Container – reduced size */}
      <div className="icon-box w-12 h-12 mb-4 text-xl text-primary group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-purple-500/50 group-hover:scale-110 transition-all duration-300">
        <Icon />
      </div>

      {/* Plan Name – smaller */}
      <h3 className="text-xl font-bold text-white">{plan.name}</h3>

      {/* Description – smaller */}
      <p className="text-xs text-muted mt-1.5">{plan.description}</p>

      {/* Price – smaller */}
      <div className="mt-4 flex items-end gap-1">
        <span className="text-3xl font-black gradient-text">{plan.price}</span>
        {plan.period && (
          <span className="text-muted text-xs mb-0.5">{plan.period}</span>
        )}
      </div>

      {/* Features – tighter spacing */}
      <ul className="mt-4 space-y-1.5 flex-1">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-xs text-light">
            <FaCheck className="text-primary text-[10px] mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button – smaller */}
      <div className="mt-5">
        <button
          onClick={handleWhatsApp}
          className="btn w-full justify-center text-xs py-2 px-4 btn-outline"
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;