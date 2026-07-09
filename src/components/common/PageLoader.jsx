import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0F071C]"
        >
          <img
            src={logo}
            alt="Connect2Space"
            className="h-36 md:h-48 w-auto object-contain mb-8"
          />

          <div className="w-64 max-w-[80%] h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;