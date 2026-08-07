/* =============================================================
   Accessible Theme Switcher Pill with Sun/Moon Icon Morph
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label-text');
  const htmlRoot = document.documentElement;

  // 1. Check for saved user preference in localStorage
  // 2. Or fallback to OS preference (prefers-color-scheme)
  const savedTheme = localStorage.getItem('em-theme-preference');
  const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = 'light';

  if (savedTheme === 'dark' || (!savedTheme && osPrefersDark)) {
    currentTheme = 'dark';
  }

  // Initialize UI based on determined theme
  applyTheme(currentTheme);

  // Bind click event to the toggle button
  toggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    // Persist choice to localStorage
    localStorage.setItem('em-theme-preference', currentTheme);
  });

  /**
   * Applies the theme to the DOM and updates ARIA states
   * @param {string} theme - 'light' or 'dark'
   */
  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlRoot.setAttribute('data-theme', 'dark');
      toggleBtn.setAttribute('aria-checked', 'true');
      if (themeLabel) themeLabel.textContent = 'Dark Mode';
    } else {
      htmlRoot.setAttribute('data-theme', 'light');
      toggleBtn.setAttribute('aria-checked', 'false');
      if (themeLabel) themeLabel.textContent = 'Light Mode';
    }
  }

  // Optionally listen for OS level changes if user hasn't forced a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('em-theme-preference')) {
      const newOsTheme = e.matches ? 'dark' : 'light';
      currentTheme = newOsTheme;
      applyTheme(newOsTheme);
    }
  });
});
