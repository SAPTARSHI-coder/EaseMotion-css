# Fix: Password Strength Component Dark Mode Support

**Fixes:** [#30739](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30739)

---

## 🐛 Bug Description

The Password Strength component (`components/password-strength.css`) lacks dark mode support. The background of the strength bar container is hardcoded to a light-theme gray (`#e2e8f0`) on line 9, and the label text color is hardcoded to `#94a3b8` on line 34. In dark mode, the empty bar container and the text labels do not adapt, breaking theme consistency.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using theme-appropriate design tokens:

```css
@media (prefers-color-scheme: dark) {
  .ease-password-strength-bar {
    background: var(--ease-color-neutral-700, #334155);
  }
  .ease-password-strength-label {
    color: var(--ease-color-muted, #94a3b8);
  }
}

[data-theme="dark"] .ease-password-strength-bar {
  background: #334155;
}
[data-theme="dark"] .ease-password-strength-label {
  color: #94a3b8;
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the password strength component in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
