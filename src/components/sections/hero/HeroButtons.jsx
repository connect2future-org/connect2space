import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { WHATSAPP_URL, PHONE_LINK } from "../../../utils/contact";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="flex flex-wrap items-center gap-4"
    >
      <motion.a
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href="#contact"
        className="btn btn-primary text-sm"
      >
        Book Your Space <FaArrowRight />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="btn btn-outline text-sm"
      >
        <FaWhatsapp /> WhatsApp
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href={PHONE_LINK}
        className="btn btn-outline text-sm"
      >
        <FaPhoneAlt /> Call
      </motion.a>
    </motion.div>
  );
};

export default HeroButtons;