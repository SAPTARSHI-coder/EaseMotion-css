# Fix: Glass Navbar Fallback in Dark Mode

**Fixes:** [#26463](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26463)

---

## 🐛 Bug Description

In `components/navbar.css`, the `@supports not (backdrop-filter: blur(0))` fallback (lines 98-104) is hardcoded to a solid white background (`rgba(255, 255, 255, 0.92)`). On browsers or devices that do not support `backdrop-filter` (or have it disabled), the navbar renders as a solid bright white block in dark mode, completely breaking the dark theme.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) inside the `@supports` fallback block:

```css
@supports not (backdrop-filter: blur(0)) {
  @media (prefers-color-scheme: dark) {
    .ease-navbar-glass,
    .ease-navbar-glass-blur {
      background: var(--ease-color-surface, #141e33) !important;
      border-color: var(--ease-color-neutral-700, #334155) !important;
    }
  }
  [data-theme="dark"] .ease-navbar-glass,
  [data-theme="dark"] .ease-navbar-glass-blur {
    background: #141e33 !important;
    border-color: #334155 !important;
  }
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the navbar fallback in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
