# Fix: Accent Card Borders [data-theme="dark"] Support

**Fixes:** [#30733](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30733)

---

## 🐛 Bug Description

The Accent Cards (`.ease-card-accent`, `.ease-card-accent-success`, etc.) in `components/cards.css` only implement dark-theme border colors within a `@media (prefers-color-scheme: dark)` media query (lines 258-263). They lack support for the `[data-theme="dark"]` selector override. If a developer toggles the theme dynamically using `<html data-theme="dark">` via JavaScript, the accent borders do not adapt and remain stuck in their light-theme versions.

---

## ✅ Fix

Introduce `[data-theme="dark"]` selector overrides alongside the media query rules:

```css
[data-theme="dark"] .ease-card-accent { border-left-color: var(--ease-color-primary-light, #a09af8); }
[data-theme="dark"] .ease-card-accent-success { border-left-color: var(--ease-color-success-light, #86efac); }
[data-theme="dark"] .ease-card-accent-danger { border-left-color: var(--ease-color-danger-light, #fca5a5); }
[data-theme="dark"] .ease-card-accent-warning { border-left-color: var(--ease-color-warning-light, #fcd34d); }
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the accent cards in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
