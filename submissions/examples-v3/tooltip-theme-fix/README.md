# Fix: Tooltip [data-theme="dark"] Support

**Fixes:** [#30737](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30737)

---

## 🐛 Bug Description

The Tooltip component (`components/tooltips.css`) only implements dark-themed background and text color overrides within a `@media (prefers-color-scheme: dark)` media query (lines 14-20). It lacks support for the `[data-theme="dark"]` selector override. If a developer toggles the theme dynamically using `<html data-theme="dark">` via JavaScript, the tooltips do not invert their colors and remain stuck in light mode (dark background with white text, instead of light background with dark text).

---

## ✅ Fix

Introduce `[data-theme="dark"]` selector overrides to map tooltip variables to light-theme colors in dark mode:

```css
[data-theme="dark"] {
  --ease-tooltip-bg: var(--ease-color-neutral-100, #f3f4f6);
  --ease-tooltip-text: var(--ease-color-neutral-900, #111827);
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the tooltips in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
