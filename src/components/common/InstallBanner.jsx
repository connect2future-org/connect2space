import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InstallBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Check if already installed (standalone)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) {
      setIsVisible(false);
      return;
    }

    // Check if user dismissed recently (7-day cooldown)
    const dismissedUntil = localStorage.getItem('installBannerDismissed');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
      setIsVisible(false);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        // User installed – hide banner forever
        setIsVisible(false);
        setDeferredPrompt(null);
        // Add standalone class to body (already handled by CSS detection)
        // but we can also force a reload to pick up standalone mode
        window.location.reload(); // optional, to apply standalone styles
      } else {
        // User declined – hide banner, but we can show again next time
        setIsVisible(false);
        setDeferredPrompt(null);
        // We'll keep the dismissal cooldown to avoid annoying them
        // but they clicked "Install" and then declined, so we can still show later
        // We'll just hide for now and let the event fire again on next visit.
      }
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    // Store dismissal for 7 days
    const until = Date.now() + 7 * 24 * 60 * 60 * 1000;
    localStorage.setItem('installBannerDismissed', String(until));
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 right-0 z-[99999] bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📲</span>
            <div>
              <p className="text-sm font-semibold text-gray-800">Install Connect2Space</p>
              <p className="text-xs text-gray-500">Get a better experience on your device.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleInstall}
              className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              Install
            </button>
            <button
              onClick={handleDismiss}
              className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Not now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InstallBanner;