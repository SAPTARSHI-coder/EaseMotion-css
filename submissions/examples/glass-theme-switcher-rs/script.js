/**
 * EaseMotion CSS: Glassmorphic Floating System Theme Switcher Pill
 * Handles: Theme detection, localStorage persistence, sliding pill indicator,
 *          ARIA radiogroup keyboard navigation, and icon rotation transitions.
 */

(function () {
  'use strict';

  // ── Constants ──────────────────────────────────────────────────────────────
  const STORAGE_KEY   = 'easemotion-theme';
  const THEMES        = ['light', 'system', 'dark'];
  const ROOT          = document.documentElement;

  // ── DOM Elements ───────────────────────────────────────────────────────────
  let pill, indicator, options, activeLabel, storageBadge;
  let storageBadgeTimer = null;

  // ── Resolve the actual applied theme for "system" ─────────────────────────
  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function resolveApplied(theme) {
    return theme === 'system' ? getSystemPreference() : theme;
  }

  // ── Apply theme to <html data-theme="..."> ────────────────────────────────
  function applyTheme(theme) {
    ROOT.setAttribute('data-theme', resolveApplied(theme));
  }

  // ── Move the sliding indicator pill ──────────────────────────────────────
  function moveIndicator(activeBtn) {
    if (!indicator || !pill) return;
    const pillRect = pill.getBoundingClientRect();
    const btnRect  = activeBtn.getBoundingClientRect();
    indicator.style.left  = `${btnRect.left - pillRect.left}px`;
    indicator.style.width = `${btnRect.width}px`;
  }

  // ── Update ARIA + visual states ────────────────────────────────────────────
  function setActive(theme, animate = true) {
    options.forEach((btn, i) => {
      const isActive = btn.getAttribute('data-theme') === theme;
      btn.setAttribute('aria-checked', isActive ? 'true' : 'false');
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    const activeBtn = pill.querySelector(`[data-theme="${theme}"]`);
    if (!activeBtn) return;

    if (animate) {
      moveIndicator(activeBtn);
    } else {
      // Instant placement without transition (initial render)
      indicator.style.transition = 'none';
      moveIndicator(activeBtn);
      // Re-enable transition next frame
      requestAnimationFrame(() => {
        indicator.style.transition = '';
      });
    }

    // Update demo label
    if (activeLabel) {
      const labels = { light: 'Light', system: 'System', dark: 'Dark' };
      activeLabel.textContent = labels[theme] || 'System';
    }

    // Apply theme to document
    applyTheme(theme);
  }

  // ── Persist to localStorage + show badge ─────────────────────────────────
  function persistTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) { /* private browsing / quota exceeded */ }

    // Show save badge briefly
    if (storageBadge) {
      storageBadge.classList.add('visible');
      clearTimeout(storageBadgeTimer);
      storageBadgeTimer = setTimeout(() => {
        storageBadge.classList.remove('visible');
      }, 2000);
    }
  }

  // ── Select a theme (visual + persist) ─────────────────────────────────────
  function selectTheme(theme) {
    setActive(theme, true);
    persistTheme(theme);
  }

  // ── Load saved or default theme ───────────────────────────────────────────
  function loadSavedTheme() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return THEMES.includes(saved) ? saved : 'system';
  }

  // ── Keyboard navigation (Arrow keys across radiogroup) ────────────────────
  function handleKeydown(e) {
    const current  = pill.querySelector('[aria-checked="true"]');
    const idx      = options.indexOf(current);

    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      next = options[(idx + 1) % options.length];
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      next = options[(idx - 1 + options.length) % options.length];
    }

    if (next) {
      e.preventDefault();
      next.focus();
      selectTheme(next.getAttribute('data-theme'));
    }
  }

  // ── System preference change listener ─────────────────────────────────────
  function onSystemChange() {
    // Only re-apply if user is in "system" mode
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved || saved === 'system') {
        applyTheme('system');
      }
    } catch (e) {
      applyTheme('system');
    }
  }

  // ── Reposition indicator on window resize ─────────────────────────────────
  function onResize() {
    const activeBtn = pill && pill.querySelector('[aria-checked="true"]');
    if (activeBtn) moveIndicator(activeBtn);
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  function init() {
    pill         = document.getElementById('theme-pill');
    indicator    = document.getElementById('pill-indicator');
    activeLabel  = document.getElementById('active-theme-label');
    storageBadge = document.getElementById('storage-badge');

    if (!pill) return;

    options = Array.from(pill.querySelectorAll('.pill-option'));

    // Apply saved theme (no animation) on first render
    const saved = loadSavedTheme();
    requestAnimationFrame(() => {
      setActive(saved, false);
    });

    // Click handlers
    options.forEach(btn => {
      btn.addEventListener('click', () => {
        selectTheme(btn.getAttribute('data-theme'));
      });
    });

    // Keyboard handler on radiogroup
    pill.addEventListener('keydown', handleKeydown);

    // System preference change
    window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', onSystemChange);

    // Resize repositioning
    window.addEventListener('resize', onResize);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
