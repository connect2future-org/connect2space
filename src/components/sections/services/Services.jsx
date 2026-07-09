import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">Services</span>
          <h2 className="heading-lg">What We <span className="gradient-text">Offer</span></h2>
          <p className="text-lg text-muted">End-to-end solutions for the modern enterprise.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;