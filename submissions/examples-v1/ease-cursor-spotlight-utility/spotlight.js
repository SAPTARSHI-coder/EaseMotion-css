(function () {
  function bindSpotlight(el) {
    if (el.dataset.spotlightBound) return;
    el.dataset.spotlightBound = "true";

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--spotlight-x", `${x}%`);
      el.style.setProperty("--spotlight-y", `${y}%`);
    });

    el.addEventListener("mouseleave", () => {
      el.style.setProperty("--spotlight-x", "50%");
      el.style.setProperty("--spotlight-y", "50%");
    });
  }

  document.querySelectorAll(".spotlight").forEach(bindSpotlight);

  const observer = new MutationObserver(() => {
    document.querySelectorAll(".spotlight").forEach(bindSpotlight);
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();