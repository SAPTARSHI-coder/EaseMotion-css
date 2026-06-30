/* ============================================================
   ease-theme-switcher — JavaScript
   Handles theme toggle, localStorage persistence,
   and prefers-color-scheme fallback.
   Submission for EaseMotion CSS · Issue #28602
   ============================================================ */

(function () {
  "use strict";

  const STORAGE_KEY = "ease-theme";

  function getPreferredTheme() {
    if (localStorage.getItem(STORAGE_KEY)) {
      return localStorage.getItem(STORAGE_KEY);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  }

  function init() {
    applyTheme(getPreferredTheme());

    const toggles = document.querySelectorAll(".ease-theme-switcher");
    toggles.forEach(function (btn) {
      btn.addEventListener("click", toggleTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
