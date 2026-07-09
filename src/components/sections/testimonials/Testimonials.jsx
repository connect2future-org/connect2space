import { motion } from "framer-motion";
import { FaQuoteLeft, FaGem } from "react-icons/fa";

const leadershipData = [
  {
    name: "Mr. Karthik",
    role: "Founder & CEO",
    avatar: "K",
    quote: "At Connect2Space, we believe every great idea deserves a great space. Whether you're a startup, a creator, or an established business, our workspace is built to inspire innovation, foster collaboration, and turn dreams into reality. Welcome to a community where creativity meets opportunity.",
  },
  {
    name: "Vikas Gowda J A",
    role: "Co-Founder",
    avatar: "V",
    quote: "Connect2Space is more than a workspace – it's a launchpad for creators and entrepreneurs. Our mission is to provide premium environments that empower you to do your best work. From podcast studios to event spaces, we're here to support your journey every step of the way.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">Leadership</span>
          <h2 className="heading-lg">Our <span className="gradient-text">Leadership</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {leadershipData.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="card glass p-6 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {person.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{person.name}</h4>
                    <p className="text-xs text-muted">{person.role}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-primary/30 text-xl" />
              </div>
              <div className="flex items-center gap-0.5 mt-3">
                <FaGem className="text-primary text-xs" />
                <span className="text-xs text-muted ml-1">Vision</span>
              </div>
              <p className="text-sm text-muted mt-3 leading-relaxed flex-1">“{person.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;