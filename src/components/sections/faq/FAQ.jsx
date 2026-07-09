import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    { q: "What are the operating hours?", a: "We are open 24/7 for members with 24/7 access." },
    { q: "Can I book a room for a day?", a: "Yes, you can book meeting rooms and studios by the hour or day." },
    { q: "Is there parking available?", a: "Yes, we have dedicated parking for members and guests." },
    { q: "Do you offer virtual office services?", a: "Yes, we provide mail handling and virtual reception." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">FAQ</span>
          <h2 className="heading-lg">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-bold text-white text-sm">{faq.q}</span>
                <span className="text-primary">{openIndex === idx ? <FaMinus /> : <FaPlus />}</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-muted text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;