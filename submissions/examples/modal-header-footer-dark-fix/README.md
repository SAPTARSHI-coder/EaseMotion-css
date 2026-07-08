# Fix: Modal Header Borders & Footer Background/Borders Dark Mode Support

**Fixes:** [#30736](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30736)

---

## 🐛 Bug Description

The Modal component (`components/modals.css`) lacks dark mode overrides for its header borders, footer backgrounds, and footer borders. 

In `components/modals.css`, the header uses `border-bottom: 1px solid var(--ease-color-neutral-200, #e5e7eb)` and the footer uses `background: var(--ease-color-neutral-50, #f9fafb)` and `border-top: 1px solid var(--ease-color-neutral-200, #e5e7eb)`. Since `neutral-200` and `neutral-50` do not have dark-mode overrides in `core/variables.css` (they are absolute colors), the modal header/footer borders and footer background remain bright white/light-gray in dark mode, breaking theme styling.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using darker backgrounds and borders:

```css
@media (prefers-color-scheme: dark) {
  .ease-modal-header {
    border-bottom-color: var(--ease-color-neutral-800, #1e293b);
  }
  .ease-modal-footer {
    background: var(--ease-color-neutral-900, #0f172a);
    border-top-color: var(--ease-color-neutral-800, #1e293b);
  }
}

[data-theme="dark"] .ease-modal-header {
  border-bottom-color: #1e293b;
}
[data-theme="dark"] .ease-modal-footer {
  background: #0f172a;
  border-top-color: #1e293b;
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the modal header/footer in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
