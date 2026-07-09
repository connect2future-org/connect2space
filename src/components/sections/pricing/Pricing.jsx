import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingData } from "./pricingData";

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">Pricing</span>
          <h2 className="heading-lg">
            Choose Your <span className="gradient-text">Space</span>
          </h2>
          <p className="text-lg text-muted">
            Choose the perfect creative space for your work, meetings, recordings, and events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {pricingData.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;