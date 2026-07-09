import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-[28px] glass glass-hover p-6 h-full flex flex-col transition-all duration-300 hover:border-primary/30 hover:shadow-pink"
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.gradient} transition duration-500`}
        style={{ mixBlendMode: "soft-light" }}
      />
      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:shadow-purple-500/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        <Icon className="text-white text-2xl group-hover:scale-110 transition-all duration-300" />
      </div>
      <h3 className="mt-6 text-xl font-heading font-bold">{service.title}</h3>
      <p className="mt-3 text-muted text-sm leading-relaxed flex-1">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;