import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import femaleMascot from "../../assets/images/female11111.png";
import maleMascot from "../../assets/images/male11111.png";

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
          {/* Main row: Female Mascot + Logo + Male Mascot – massively enlarged */}
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 px-4">
            {/* Female mascot – left */}
            <motion.img
              src={femaleMascot}
              alt="Connect2Space Mascot"
              className="h-32 md:h-44 lg:h-52 w-auto object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo – massively enlarged */}
            <img
              src={logo}
              alt="Connect2Space"
              className="h-32 md:h-44 lg:h-52 w-auto object-contain"
            />

            {/* Male mascot – right */}
            <motion.img
              src={maleMascot}
              alt="Connect2Space Mascot"
              className="h-32 md:h-44 lg:h-52 w-auto object-contain"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Loading Bar – much wider and thicker */}
          <div className="w-96 max-w-[95%] h-2 bg-white/10 rounded-full overflow-hidden mt-5 md:mt-6">
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