// Utility functions for PWA installation

export const isStandalone = () => {
  return window.matchMedia('(display-mode: standalone)').matches;
};

export const getInstallPromptDismissed = () => {
  const until = localStorage.getItem('pwaInstallDismissed');
  if (until && Date.now() < parseInt(until)) {
    return true;
  }
  return false;
};

export const setInstallPromptDismissed = () => {
  const until = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  localStorage.setItem('pwaInstallDismissed', String(until));
};

export const setInstallAccepted = () => {
  localStorage.setItem('pwaInstallAccepted', 'true');
};

export const getInstallAccepted = () => {
  return localStorage.getItem('pwaInstallAccepted') === 'true';
};