# Fix: Skeleton Loader Dark Mode Support

**Fixes:** [#26460](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26460)

---

## 🐛 Bug Description

The Skeleton component (`components/skeleton.css`) has no dark mode support. It uses a hardcoded light-theme gradient (`#e2e8f0` and `#f1f5f9`) for the shimmer animation on line 3. In dark mode, the skeleton loader flashes as a very bright white/light-gray block, creating a harsh contrast against dark backgrounds and ruining the dark mode aesthetic.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using darker, theme-appropriate colors:

```css
@media (prefers-color-scheme: dark) {
  .ease-skeleton {
    background: linear-gradient(90deg, var(--ease-color-neutral-800, #1e293b) 25%, var(--ease-color-neutral-700, #334155) 50%, var(--ease-color-neutral-800, #1e293b) 75%);
  }
}

[data-theme="dark"] .ease-skeleton {
  background: linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%);
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the skeleton loader in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
