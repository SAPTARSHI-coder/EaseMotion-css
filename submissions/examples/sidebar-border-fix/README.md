# Fix: Sidebar Right Border Color in Dark Mode

**Fixes:** [#26462](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26462)

---

## 🐛 Bug Description

The Sidebar component (`components/sidebar.css`) has a dark background (`var(--ease-color-neutral-900, #111)`) but uses a hardcoded light-theme border color `border-right: 1px solid var(--ease-color-neutral-200, #e5e7eb)` on line 18. This creates a bright, near-white vertical border against the dark sidebar in both light and dark modes, breaking theme consistency.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using a darker, theme-appropriate border color:

```css
@media (prefers-color-scheme: dark) {
  .ease-sidebar {
    border-right-color: var(--ease-color-neutral-800, #1e293b);
  }
}

[data-theme="dark"] .ease-sidebar {
  border-right-color: #1e293b;
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the sidebar border in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
