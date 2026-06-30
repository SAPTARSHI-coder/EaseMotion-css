/* ============================================================
   EaseMotion CSS — accordion.js
   Minimal interaction logic for accordion components.
   Zero dependencies.
   ============================================================ */

const EaseAccordion = (() => {
  const SELECTORS = {
    ITEM: ".ease-accordion-item",
    HEADER: ".ease-accordion-header",
    ACTIVE_CLASS: "is-active",
  };

  /**
   * Initializes all accordion headers on the page.
   * Enables toggling of the 'is-active' class on the parent item.
   */
  const init = () => {
    const headers = document.querySelectorAll(SELECTORS.HEADER);

    headers.forEach((header) => {
      // Prevent multiple listener attachments if init is called again
      if (header.hasAttribute("data-ease-accordion-init")) return;
      header.setAttribute("data-ease-accordion-init", "true");

      header.addEventListener("click", () => {
        const item = header.closest(SELECTORS.ITEM);
        if (!item) return;

        const isCurrentlyActive = item.classList.contains(
          SELECTORS.ACTIVE_CLASS
        );

        // Optional: If you want accordion to act as a single-open panel, you can close others here
        // For standard accordion, we just toggle the clicked one
        if (isCurrentlyActive) {
          item.classList.remove(SELECTORS.ACTIVE_CLASS);
          header.setAttribute("aria-expanded", "false");
        } else {
          item.classList.add(SELECTORS.ACTIVE_CLASS);
          header.setAttribute("aria-expanded", "true");
        }
      });
    });
  };

  // Auto-initialize if DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  return { init };
})();

// Export for module environments if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { EaseAccordion };
}
