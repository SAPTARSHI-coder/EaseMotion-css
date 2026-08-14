/**
 * Ease Animated Skills Progress Bars — scroll reveal
 *
 * The fill animation itself is pure CSS (transform: scaleX transition).
 * This script only toggles the `.is-visible` class when a `.skills-container`
 * scrolls into view, which is what triggers the CSS transition — width/scale
 * targets come from each `.skill-fill`'s inline `--fill-scale` custom property.
 */
(function () {
  const containers = document.querySelectorAll(".skills-container");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.3 }
  );

  containers.forEach((el) => observer.observe(el));
})();