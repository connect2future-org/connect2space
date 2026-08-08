/**
 * Navigate to a section on the Home page.
 *
 * If already on Home:
 *   Scroll directly to the requested section.
 *
 * If on another page:
 *   Navigate to Home with the section hash.
 *   App.jsx handles the actual scroll after the Home page renders.
 */

export const scrollToSection = (sectionId, navigate, currentPath) => {
  // If we are on a detail page such as /spaces/1,
  // first navigate to Home with the requested section.
  if (currentPath !== "/") {
    navigate(`/#${sectionId}`);
    return;
  }

  // We are already on Home.
  const element = document.getElementById(sectionId);

  if (!element) {
    console.warn(`Navigation section not found: #${sectionId}`);
    return;
  }

  const navbarOffset = sectionId === "home" ? 0 : 100;

  const targetTop =
    element.getBoundingClientRect().top +
    window.pageYOffset -
    navbarOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior: "smooth",
  });
};