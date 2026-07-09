import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { WHATSAPP_URL, PHONE_LINK, PHONE_DISPLAY } from "../../../utils/contact";

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <span className="badge">Contact</span>
          <h2 className="heading-lg">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-lg text-muted">We’d love to hear from you. Reach out anytime.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass p-5 rounded-3xl flex items-center gap-4 hover:shadow-pink transition">
              <FaWhatsapp className="text-2xl text-green-400" />
              <div>
                <p className="text-xs text-muted">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-primary transition text-sm">
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="glass p-5 rounded-3xl flex items-center gap-4 hover:shadow-pink transition">
              <FaEnvelope className="text-2xl text-primary" />
              <div>
                <p className="text-xs text-muted">Email</p>
                <a href="mailto:hr@connect2future.com" className="text-white font-bold hover:text-primary transition text-sm">hr@connect2future.com</a>
              </div>
            </div>
            <div className="glass p-5 rounded-3xl flex items-center gap-4 hover:shadow-pink transition">
              <FaPhoneAlt className="text-2xl text-cyan-400" />
              <div>
                <p className="text-xs text-muted">Call</p>
                <a href={PHONE_LINK} className="text-white font-bold hover:text-primary transition text-sm">{PHONE_DISPLAY}</a>
              </div>
            </div>
            <div className="glass p-5 rounded-3xl flex items-start gap-4 hover:shadow-pink transition">
              <FaMapMarkerAlt className="text-2xl text-pink-400 mt-1" />
              <div>
                <p className="text-xs text-muted">Location</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Connect2Future+Krishna+Building+Near+Nirmithi+Kendra+Bogadi+2nd+Stage+Mysuru+Karnataka+570006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-primary transition text-sm"
                >
                  Connect2Future, Krishna Building, Near Nirmithi Kendra, Bogadi 2nd Stage, Mysuru, Karnataka 570006
                </a>
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-2 rounded-3xl overflow-hidden"
          >
            <iframe
              title="Connect2Space Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.4567!2d76.6345!3d12.2956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE3JzQ0LjIiTiA3NsKwMzgnMDQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;