(function () {
  "use strict";

  // Check if native scroll timelines are supported
  const supportsNativeScroll =
    globalThis.CSS &&
    CSS.supports &&
    CSS.supports("animation-timeline: scroll()");

  // Skip fallback script if browser supports native CSS scroll timeline,
  // unless we are simulating unsupported environment for demonstration/testing
  const isSimulationMode = document.documentElement.classList.contains(
    "simulate-no-scroll-timeline"
  );
  if (supportsNativeScroll && !isSimulationMode) {
    return;
  }

  // Check reduced motion preference (WCAG 2.1 SC 2.3.3)
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  function updateScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;

    // Bind variable to document root so all progress bars can read it
    document.documentElement.style.setProperty("--scroll-percentage", scrolled);
  }

  // Use passive listeners to ensure smooth scrolling performance
  window.addEventListener("scroll", updateScroll, { passive: true });
  window.addEventListener("resize", updateScroll, { passive: true });

  // Initial calculation
  updateScroll();
})();
