import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 4000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-8">
      <h3 className="text-xl font-bold text-white mb-4">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-muted mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            required
            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-1">Service Interested In *</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-white placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-sm appearance-none"
          >
            <option value="">Select a service</option>
            <option value="Premium Workspace">Premium Workspace</option>
            <option value="Creator Corner">Creator Corner</option>
            <option value="Podcast Studio">Podcast Studio</option>
            <option value="Meeting Space">Meeting Space</option>
            <option value="Event Space">Event Space</option>
            <option value="Content Studio">Content Studio</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-muted mb-1">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            required
            rows="4"
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-2.5 text-white placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none text-sm"
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full text-sm py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass rounded-3xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border border-white/10"
            >
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white">Enquiry Submitted Successfully!</h3>
              <p className="text-muted mt-2 text-sm">
                Thank you for contacting Connect2Space. <br />
                Our team will get in touch with you shortly.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="btn btn-primary mt-6 text-sm px-6 py-2"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;