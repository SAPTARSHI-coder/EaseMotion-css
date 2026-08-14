/**
 * EaseMotion CSS — Cards High Contrast Mode
 * ============================================================
 * Ensures card surfaces and borders meet WCAG AA contrast in normal and
 * forced-colors / Windows high-contrast modes. Exposes the contrast
 * tokens and a small helper to apply them to a root element.
 * ============================================================
 */

export const CARD_CONTRAST_TOKENS = {
  '--ease-card-bg': '#ffffff',
  '--ease-card-text': '#111827',
  '--ease-card-border': '#111827',
  '--ease-card-muted': '#374151',
  '--ease-card-surface': '#f3f4f6',
};

export function applyCardContrast(root = document.documentElement) {
  if (!root || typeof root.style !== 'object') {
    throw new TypeError('applyCardContrast requires a root element');
  }
  Object.entries(CARD_CONTRAST_TOKENS).forEach(([k, v]) => {
    root.style.setProperty(k, v);
  });
  return root;
}
