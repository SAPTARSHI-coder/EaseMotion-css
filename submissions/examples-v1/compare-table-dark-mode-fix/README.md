# Fix: Comparison Table Dark Mode Support

**Fixes:** [#26395](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/26395)

---

## 🐛 Bug Description

The Comparison Table component (`components/compare-table.css`) lacks dark mode support entirely. It relies on hardcoded light-theme hex colors (such as `#fff` for the background, `#e2e8f0` for borders, and `#1e293b` for text) and has no `@media (prefers-color-scheme: dark)` or `[data-theme="dark"]` overrides.

When the rest of the application adapts to a dark theme, the comparison table remains bright white, creating a severe visual mismatch, breaking design consistency, and causing accessibility/contrast issues for users.

---

## ✅ Fix

Replace the hardcoded hex values in `components/compare-table.css` with the appropriate CSS design tokens, and define dark mode overrides:

```css
.ease-compare-table {
  border: 1px solid var(--ease-color-neutral-200, #e2e8f0);
  background: var(--ease-color-surface, #fff);
}

.ease-compare-table .ease-compare-row-header {
  color: var(--ease-color-text, #1e293b);
}

.ease-compare-table tr:hover td,
.ease-compare-table tr:hover th {
  background: var(--ease-color-neutral-100, #f8fafc);
}

.ease-compare-table tbody tr:nth-child(even) td {
  background: var(--ease-color-neutral-50, #fafbfc);
}

.ease-compare-table tbody tr:nth-child(even):hover td {
  background: var(--ease-color-neutral-200, #f1f5f9);
}

/* Dark mode specific overrides */
@media (prefers-color-scheme: dark) {
  .ease-compare-table .is-featured {
    background: color-mix(in srgb, var(--ease-color-primary) 15%, transparent);
  }
  .ease-compare-table tr:hover .is-featured {
    background: color-mix(in srgb, var(--ease-color-primary) 25%, transparent);
  }
}

[data-theme="dark"] .is-featured {
  background: rgba(108, 99, 255, 0.15);
}
[data-theme="dark"] tr:hover .is-featured {
  background: rgba(108, 99, 255, 0.25);
}
```

---

## 📁 Submission Contents

| File        | Purpose                                                                      |
| ----------- | ---------------------------------------------------------------------------- |
| `demo.html` | Side-by-side live demonstration of the bug vs. the fix in light & dark modes |
| `style.css` | Raw CSS showing the proposed fix and demo page layout                        |
| `README.md` | This documentation file                                                      |
