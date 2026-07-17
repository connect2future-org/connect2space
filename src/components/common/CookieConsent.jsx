import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  // Check if the app is installed (standalone mode) – inside the component
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (isStandalone) {
    // Don't show cookie consent if the app is installed
    return null;
  }

  // We'll use sessionStorage to remember if the user has accepted in this session
  const [visible, setVisible] = useState(() => {
    const consent = sessionStorage.getItem('cookieConsent');
    return !consent; // show only if not set
  });

  const handleAccept = () => {
    setVisible(false);
    sessionStorage.setItem('cookieConsent', 'accepted');
  };

  const handleDecline = () => {
    setVisible(false);
    sessionStorage.setItem('cookieConsent', 'declined');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[9999] max-w-md glass rounded-2xl p-5 shadow-xl backdrop-blur-xl border border-white/10"
        >
          <p className="text-sm text-slate-300 leading-relaxed">
            We use cookies to improve your experience, analyze traffic and enhance our services.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              onClick={handleAccept}
              className="btn btn-primary text-xs py-1.5 px-4"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="btn btn-outline text-xs py-1.5 px-4"
            >
              Decline
            </button>
            <a
              href="/privacy-policy"
              className="text-xs text-muted hover:text-primary transition self-center"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;