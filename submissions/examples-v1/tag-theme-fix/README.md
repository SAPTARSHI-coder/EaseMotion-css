# Fix: Tag Component Dark Mode Support

**Fixes:** [#26461](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26461)

---

## 🐛 Bug Description

The Tag component (`components/tag.css`) has no dark mode support. The base `.ease-tag` uses hardcoded background and text colors (`background: #e0e7ff; color: #4338ca;`) and the semantic classes (`.ease-tag-success`, `.ease-tag-danger`, `.ease-tag-warning`, `.ease-tag-info`) also use hardcoded light-theme colors. In dark mode, these tags remain extremely bright, causing poor contrast and breaking the dark mode design.

---

## ✅ Fix

Introduce dark mode overrides (for both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`) using darker backgrounds and lighter text colors:

```css
@media (prefers-color-scheme: dark) {
  .ease-tag { background: var(--ease-color-neutral-800, #1e293b); color: var(--ease-color-neutral-200, #e2e8f0); }
  .ease-tag-success { background: rgba(21, 128, 61, 0.2); color: var(--ease-color-success-light, #86efac); }
  .ease-tag-danger { background: rgba(185, 28, 28, 0.2); color: var(--ease-color-danger-light, #fca5a5); }
  .ease-tag-warning { background: rgba(180, 83, 9, 0.2); color: var(--ease-color-warning-light, #fcd34d); }
  .ease-tag-info { background: rgba(59, 130, 246, 0.2); color: var(--ease-color-info-light, #93c5fd); }
}

[data-theme="dark"] .ease-tag { background: #1e293b; color: #e2e8f0; }
[data-theme="dark"] .ease-tag-success { background: rgba(21, 128, 61, 0.2); color: #86efac; }
[data-theme="dark"] .ease-tag-danger { background: rgba(185, 28, 28, 0.2); color: #fca5a5; }
[data-theme="dark"] .ease-tag-warning { background: rgba(180, 83, 9, 0.2); color: #fcd34d; }
[data-theme="dark"] .ease-tag-info { background: rgba(59, 130, 246, 0.2); color: #93c5fd; }
```

---

## 📁 Submission Contents

| File | Purpose |
|------|---------|
| `demo.html` | Live demonstration of the tag component in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout |
| `README.md` | This documentation file |
