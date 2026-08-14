# Fix: Neumorphic Card [data-theme="dark"] Support

**Fixes:** [#30734](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30734)

---

## 🐛 Bug Description

The Neumorphic Card (`.ease-card-neumorphic`) in `components/cards.css` only implements dark-theme background and shadow overrides within a `@media (prefers-color-scheme: dark)` media query (lines 180-201). It lacks support for the `[data-theme="dark"]` selector override. If a developer toggles the theme dynamically using `<html data-theme="dark">` via JavaScript, the neumorphic cards do not adapt and remain stuck in light mode.

---

## ✅ Fix

Introduce `[data-theme="dark"]` selector overrides alongside the media query rules:

```css
[data-theme="dark"] .ease-card-neumorphic {
  background-color: var(--ease-color-surface, #141e33) !important;
  box-shadow:
    8px 8px 20px rgba(0, 0, 0, 0.32),
    -8px -8px 20px rgba(255, 255, 255, 0.04) !important;
}

@media (hover: hover) and (pointer: fine) {
  [data-theme="dark"] .ease-card-neumorphic:hover {
    box-shadow:
      12px 12px 26px rgba(0, 0, 0, 0.36),
      -10px -10px 24px rgba(255, 255, 255, 0.055) !important;
  }
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the neumorphic cards in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
