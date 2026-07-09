/**
 * Smoothly scroll to a section with a fixed offset above the element.
 * @param {string} sectionId – the ID of the target section (without #)
 * @param {function} navigate – react-router navigate function
 * @param {string} currentPath – current location pathname
 */
export const scrollToSection = (sectionId, navigate, currentPath) => {
  const target = document.getElementById(sectionId);
  if (!target) return;

  // How much space you want between the top of the section and the viewport top
  // Negative = move section higher (toward top), Positive = lower
  const offset = -80; // Try -100, -120, etc. to move it higher

  // Helper to perform the scroll
  const performScroll = () => {
    const rect = target.getBoundingClientRect();
    const absoluteTop = rect.top + window.pageYOffset;
    const scrollY = absoluteTop + offset;
    window.scrollTo({ top: scrollY, behavior: 'smooth' });
    console.log(`Scrolled to ${sectionId} with offset ${offset}: top=${scrollY}`);
  };

  // If not on home page, navigate and scroll after navigation
  if (currentPath !== '/') {
    navigate('/');
    // Wait for navigation to complete, then scroll
    setTimeout(performScroll, 300);
    return;
  }

  // Already on home – scroll immediately
  performScroll();
};