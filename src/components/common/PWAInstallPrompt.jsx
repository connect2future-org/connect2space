import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import logo from '../../../assets/images/logo.png';
import { usePWAInstall } from '../../hooks/usePWAInstall';

const PWAInstallPrompt = () => {
  const { showPrompt, triggerInstall, dismissPrompt } = usePWAInstall();

  if (!showPrompt) return null;

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed top-4 right-4 z-[99999] w-[320px] sm:w-[340px] bg-white rounded-2xl shadow-xl border border-gray-100/80 p-4 flex items-start gap-3"
        >
          {/* Close button */}
          <button
            onClick={dismissPrompt}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close install prompt"
          >
            <FaTimes size={16} />
          </button>

          {/* Icon */}
          <div className="flex-shrink-0 mt-1">
            <img
              src={logo}
              alt="Connect2Space"
              className="w-12 h-12 rounded-xl object-contain bg-gray-50"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-800">Install Connect2Space</h3>
            <p className="text-sm text-gray-500 leading-tight mt-0.5">
              Book Workspaces, Podcast Studio & Events in One Place
            </p>
          </div>

          {/* Install Button */}
          <button
            onClick={triggerInstall}
            className="flex-shrink-0 px-4 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 mt-1"
          >
            Install
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;