# Fix: Read More Component Dark Mode Support

**Fixes:** [#30740](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30740)

---

## 🐛 Bug Description

The Read More component (`components/read-more.css`) lacks dark mode support entirely. 

It uses a hardcoded white-to-transparent gradient background (`linear-gradient(transparent, #fff)`) on line 20 to create the bottom fade-out effect. In dark mode, this fade-out remains bright white, creating a severe visual glitch. Additionally, the summary link uses a hardcoded `#6c63ff` and the body text uses a hardcoded `#475569` which has extremely poor contrast on dark backgrounds.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using theme-appropriate design tokens:

```css
@media (prefers-color-scheme: dark) {
  .ease-read-more details .ease-read-more-content::after {
    background: linear-gradient(transparent, var(--ease-color-surface, #1e293b)) !important;
  }
  .ease-read-more summary {
    color: var(--ease-color-primary-light, #a09af8);
  }
  .ease-read-more .ease-read-more-text {
    color: var(--ease-color-muted, #94a3b8);
  }
}

[data-theme="dark"] .ease-read-more details .ease-read-more-content::after {
  background: linear-gradient(transparent, #1e293b) !important;
}
[data-theme="dark"] .ease-read-more summary {
  color: #a09af8;
}
[data-theme="dark"] .ease-read-more .ease-read-more-text {
  color: #94a3b8;
}
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the read more component in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
