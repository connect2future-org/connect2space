import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-[28px] glass glass-hover p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-pink"
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.gradient} transition duration-500`}
        style={{ mixBlendMode: "soft-light" }}
      />
      
      {/* Heading Strip – gradient background behind icon + heading */}
      <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-br ${service.gradient} shadow-md relative z-10`}>
        <div className="flex-shrink-0">
          <Icon className="text-white text-2xl transition-transform duration-300 group-hover:scale-110" />
        </div>
        <h3 className="text-xl font-heading font-bold text-white">{service.title}</h3>
      </div>
      
      {/* Description below */}
      <p className="mt-4 text-muted text-sm leading-relaxed flex-1 relative z-10">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;