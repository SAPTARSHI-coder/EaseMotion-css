# Fix: Pagination Component Dark Mode Support

**Fixes:** [#30738](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30738)

---

## 🐛 Bug Description

The Pagination component (`components/pagination.css`) lacks dark mode support entirely. It uses hardcoded light-theme colors for its borders (`#e5e7eb`, `#d1d5db`) and hover backgrounds (`#f3f4f6`). In dark mode, the page buttons render with bright white borders and flash bright white on hover, creating a harsh contrast and breaking the dark mode design.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using theme-appropriate design tokens:

```css
@media (prefers-color-scheme: dark) {
  .ease-page-btn {
    border-color: var(--ease-color-neutral-700, #334155);
    color: var(--ease-color-text-dark, #f8fafc);
  }
  .ease-page-btn:hover:not(:disabled, .ease-page-btn-active) {
    background: var(--ease-color-neutral-800, #1e293b);
    border-color: var(--ease-color-neutral-600, #4b5563);
    color: #ffffff;
  }
}

[data-theme="dark"] .ease-page-btn {
  border-color: #334155;
  color: #f8fafc;
}
[data-theme="dark"] .ease-page-btn:hover:not(:disabled, .ease-page-btn-active) {
  background: #1e293b;
  border-color: #4b5563;
  color: #ffffff;
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the pagination component in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
