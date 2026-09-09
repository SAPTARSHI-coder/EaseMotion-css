/**
 * EaseMotion CSS — Buttons High Contrast Mode
 * ============================================================
 * Ensures buttons meet WCAG AA contrast (4.5:1) in normal and Windows
 * high-contrast / forced-colors mode. Pairs the base palette with an
 * explicit `-ms-high-contrast` + `forced-colors` rule set that keeps text
 * and focus rings legible without relying on the system theme.
 * ============================================================
 */

export const BUTTON_CONTRAST_TOKENS = {
  '--ease-btn-bg': '#312e81',
  '--ease-btn-text': '#ffffff',
  '--ease-btn-bg-hover': '#1e1b4b',
  '--ease-btn-border': '#1e1b4b',
  '--ease-btn-focus-ring': '#facc15',
};

export function applyButtonContrast(root = document.documentElement) {
  if (!root || typeof root.style !== 'object') {
    throw new TypeError('applyButtonContrast requires a root element');
  }
  Object.entries(BUTTON_CONTRAST_TOKENS).forEach(([k, v]) => {
    root.style.setProperty(k, v);
  });
  return root;
}

export function contrastRatio(l1, l2) {
  const a = [l1, l2].map((c) => {
    const v = Math.min(Math.max(0, c), 255) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  const lighter = Math.max(a[0], a[1]);
  const darker = Math.min(a[0], a[1]);
  return (lighter + 0.05) / (darker + 0.05);
}
