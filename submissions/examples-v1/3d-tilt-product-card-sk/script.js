document.addEventListener("DOMContentLoaded", () => {
  const tiltElements = document.querySelectorAll("[data-tilt]");

  // Check user preference for reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  if (prefersReducedMotion.matches) {
    return; // Do not attach JS listeners if reduced motion is preferred
  }

  tiltElements.forEach((wrapper) => {
    const card = wrapper.querySelector(".product-card");
    if (!card) return;

    // Max rotation in degrees
    const maxTilt = 15;

    wrapper.addEventListener("mousemove", (e) => {
      // Get bounding rect of the wrapper
      const rect = wrapper.getBoundingClientRect();

      // Calculate mouse position relative to the center of the card
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation percentages (-1 to 1)
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      // Dynamic shadow based on mouse position
      const shadowX = ((x - centerX) / centerX) * -15;
      const shadowY = ((y - centerY) / centerY) * -15;

      // Apply transforms
      // Use requestAnimationFrame for smoother rendering
      window.requestAnimationFrame(() => {
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.style.boxShadow = `${shadowX}px ${shadowY + 10}px 30px -10px rgba(0, 0, 0, 0.2)`;
        card.style.transition = "none"; // Remove transition during movement for zero latency
      });
    });

    wrapper.addEventListener("mouseleave", () => {
      // Reset card to default state
      window.requestAnimationFrame(() => {
        card.style.transition =
          "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease";
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
        card.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.15)";
      });
    });

    // Add touch support for mobile
    wrapper.addEventListener(
      "touchmove",
      (e) => {
        // Prevent scrolling while tilting the card
        if (e.cancelable) e.preventDefault();

        const touch = e.touches[0];
        const rect = wrapper.getBoundingClientRect();

        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        window.requestAnimationFrame(() => {
          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          card.style.transition = "none";
        });
      },
      { passive: false }
    );

    wrapper.addEventListener("touchend", () => {
      window.requestAnimationFrame(() => {
        card.style.transition =
          "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease";
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
      });
    });
  });
});
