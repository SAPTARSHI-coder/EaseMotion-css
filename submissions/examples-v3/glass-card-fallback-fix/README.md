# Fix: Glass Card Fallback Dark Mode Support

**Fixes:** [#30732](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30732)

---

## 🐛 Bug Description

In `components/cards.css`, the `@supports not ((backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)))` fallback (lines 145-150) is hardcoded to a solid white background (`rgba(255, 255, 255, 0.92)`). On browsers or devices that do not support `backdrop-filter`, the glass card renders as a solid bright white block in dark mode, breaking design consistency.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) inside the `@supports` fallback block:

```css
@supports not ((backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))) {
  @media (prefers-color-scheme: dark) {
    .ease-card-glass {
      background: rgba(15, 23, 42, 0.92) !important;
      border-color: rgba(255, 255, 255, 0.12) !important;
    }
  }
  [data-theme="dark"] .ease-card-glass {
    background: rgba(15, 23, 42, 0.92) !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
  }
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the glass card fallback in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
