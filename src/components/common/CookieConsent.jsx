import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  const handleAccept = () => {
    setVisible(false);
    // Optionally store in sessionStorage to hide for the current session
    sessionStorage.setItem('cookieConsent', 'accepted');
  };

  const handleDecline = () => {
    setVisible(false);
    sessionStorage.setItem('cookieConsent', 'declined');
  };

  // If you want to persist across sessions, you can keep localStorage,
  // but the user asked to show on every visit, so we don't check storage on load.
  // But we might want to hide it after accept for the current session.
  // We'll check sessionStorage so it doesn't reappear on every page reload within same session.

  // Actually, to truly show on every visit, we should not check any storage.
  // But we can check sessionStorage to avoid showing again on the same session.
  // Let's implement: show by default, but if sessionStorage has a value, hide.

  // To keep it showing every visit (new session), we can just use state.

  // We'll keep it simple: always show on first load, and close on accept/decline.

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