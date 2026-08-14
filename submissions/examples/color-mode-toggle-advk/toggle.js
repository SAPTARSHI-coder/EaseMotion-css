/* Color Mode Toggle behaviour — submission for #75549
 *
 * 'System' clears the stored override entirely (removeAttribute on <html> +
 * localStorage.removeItem) rather than resolving and storing a fixed value,
 * so prefers-color-scheme keeps tracking OS changes live afterward.
 */
(function () {
  var root = document.documentElement;
  var KEY = "color-mode-advk";

  function apply(mode) {
    if (mode === "light" || mode === "dark") {
      root.setAttribute("data-color-mode", mode);
      localStorage.setItem(KEY, mode);
    } else {
      // System: clear the override so prefers-color-scheme stays authoritative.
      root.removeAttribute("data-color-mode");
      localStorage.removeItem(KEY);
    }
    document.querySelectorAll(".color-mode-toggle-advk__btn").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-mode") === mode));
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".color-mode-toggle-advk__btn");
    if (!btn) return;
    apply(btn.getAttribute("data-mode"));
  });

  // Seed from stored override only; if none, leave 'system' live.
  var stored = localStorage.getItem(KEY);
  if (stored === "light" || stored === "dark") {
    apply(stored);
  } else {
    apply("system");
  }
})();
