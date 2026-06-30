# Fix: Chip Component [data-theme="dark"] Support

**Fixes:** [#26459](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26459)

---

## 🐛 Bug Description

The Chip component (`components/chip.css`) only implements dark mode styles within a `@media (prefers-color-scheme: dark)` media query (lines 101-119). It lacks support for the `[data-theme="dark"]` selector override. If a developer toggles the application's theme dynamically using `<html data-theme="dark">` via JavaScript, the chips do not adapt and remain stuck in light mode.

---

## ✅ Fix

Add the `[data-theme="dark"]` attribute selector rules to match the media query styles:

```css
[data-theme="dark"] .ease-chip {
  background: var(--ease-color-neutral-700, #374151);
  border-color: var(--ease-color-neutral-600, #4b5563);
  color: var(--ease-color-neutral-100, #f3f4f6);
}

[data-theme="dark"] .ease-chip:hover {
  background: var(--ease-color-neutral-600, #4b5563);
  border-color: var(--ease-color-primary, #6366f1);
}

[data-theme="dark"] .ease-chip-group input[type="checkbox"]:checked + .ease-chip {
  background: var(--ease-color-primary, #6366f1);
  border-color: var(--ease-color-primary, #6366f1);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.5);
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the chip group with a theme toggle |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
