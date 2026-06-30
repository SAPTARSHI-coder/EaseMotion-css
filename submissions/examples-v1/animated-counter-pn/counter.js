document.addEventListener("DOMContentLoaded", () => {
  const counterElements = document.querySelectorAll(".ease-count-up");
  const observerOptions = { root: null, threshold: 0.3 };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseInt(
          el.getAttribute("data-target") || el.textContent,
          10
        );
        el.style.setProperty("--ease-target", targetValue);
        el.textContent = "";
        el.classList.add("ease-count-animate");
        counterObserver.unobserve(el);
      }
    });
  }, observerOptions);

  counterElements.forEach((el) => counterObserver.observe(el));
});
