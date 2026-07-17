import { useState, useEffect, useCallback } from 'react';
import { isStandalone, getInstallPromptDismissed, setInstallPromptDismissed, setInstallAccepted } from '../utils/pwa';

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  // Check if already installed or dismissed
  useEffect(() => {
    const installed = isStandalone();
    const dismissed = getInstallPromptDismissed();
    const accepted = localStorage.getItem('pwaInstallAccepted') === 'true';
    if (installed || dismissed || accepted) {
      setIsInstalled(true);
      setShowPrompt(false);
    } else {
      setIsInstalled(false);
      setShowPrompt(true); // Will be shown later after delay/scroll
    }
  }, []);

  // Listen for beforeinstallprompt
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // We already set showPrompt based on the earlier check, but we can also ensure it's true here
      if (!isStandalone() && !getInstallPromptDismissed() && localStorage.getItem('pwaInstallAccepted') !== 'true') {
        setShowPrompt(true);
      }
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  // Listen for app installed event (optional)
  useEffect(() => {
    const handleAppInstalled = () => {
      setShowPrompt(false);
      setIsInstalled(true);
      setInstallAccepted();
    };
    window.addEventListener('appinstalled', handleAppInstalled);
    return () => window.removeEventListener('appinstalled', handleAppInstalled);
  }, []);

  const triggerInstall = useCallback(async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        setShowPrompt(false);
        setIsInstalled(true);
        setInstallAccepted();
        // Show a success message if you want
        console.log('User accepted install');
      } else {
        // User dismissed the native prompt – we can hide our banner
        setShowPrompt(false);
        setInstallPromptDismissed(); // 7-day cooldown
        console.log('User dismissed install');
      }
      setDeferredPrompt(null);
    }
  }, [deferredPrompt]);

  const dismissPrompt = useCallback(() => {
    setShowPrompt(false);
    setInstallPromptDismissed();
  }, []);

  // Trigger after delay and scroll conditions
  useEffect(() => {
    if (!showPrompt) return;
    let timer;
    let scrollHandler;

    const checkConditions = () => {
      // Show after 5–8 seconds OR after scrolling 30%
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) > 0.3;
      const timeElapsed = Date.now() - pageLoadTime > 5000; // 5 seconds
      if (scrolled || timeElapsed) {
        // We already have showPrompt true, but we can ensure it's shown
        setShowPrompt(true);
        // Cleanup listeners
        window.removeEventListener('scroll', scrollHandler);
        clearTimeout(timer);
      }
    };

    const pageLoadTime = Date.now();
    // Set a timeout for 8 seconds max
    timer = setTimeout(() => {
      checkConditions();
    }, 8000);

    scrollHandler = () => {
      checkConditions();
    };
    window.addEventListener('scroll', scrollHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [showPrompt]);

  return {
    showPrompt,
    triggerInstall,
    dismissPrompt,
    isInstalled,
    deferredPrompt,
  };
};