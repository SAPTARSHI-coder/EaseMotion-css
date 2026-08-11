# Right-to-Left (RTL) Support for Components

1. **What does this do?** Provides RTL-aware component styles using logical CSS properties (`margin-inline-start`, `inset-inline-end`, `border-inline-start`, `padding-block`, `text-align: start`) instead of physical properties (`left`, `right`, `margin-left`, etc.). Components auto-adapt when `dir="rtl"` is set on `<html>` — navbar, sidebar, toast, breadcrumb, tabs, and pagination all mirror correctly.

2. **How is it used?** Set `dir="rtl"` on the `<html>` element — all components using logical CSS properties automatically flip. For cases where logical properties alone aren't sufficient, `[dir="rtl"]` override selectors handle animation direction, arrow icon swapping, and sidebar slide position.

```html
<html dir="rtl">
```

```css
/* Use logical properties instead of physical ones */
.component {
  margin-inline-start: 1rem;  /* instead of margin-left */
  inset-inline-end: 1rem;     /* instead of right */
  border-inline-start: 3px solid #7c3aed; /* instead of border-left */
  text-align: start;          /* instead of text-align: left */
}

/* RTL overrides for animations and icons */
[dir="rtl"] .sidebar {
  inset-inline-end: -280px;
  inset-inline-start: auto;
}

[dir="rtl"] .pagination .prev-icon::before {
  content: "\2192";
}
```

3. **Why is it useful?** EaseMotion components assume left-to-right text direction — navbar, sidebar, modal, toast, tabs, pagination, and breadcrumb use hardcoded `left`/`right` values that break in RTL contexts (Arabic, Hebrew, Persian, Urdu). This submission provides a drop-in RTL strategy using logical CSS properties and targeted `[dir="rtl"]` overrides, eliminating the need for duplicated RTL stylesheets.

### Logical CSS Properties Reference

| Physical | Logical | Purpose |
|---|---|---|
| `margin-left` / `margin-right` | `margin-inline-start` / `margin-inline-end` | Inline margin |
| `padding-left` / `padding-right` | `padding-inline-start` / `padding-inline-end` | Inline padding |
| `margin-top` / `margin-bottom` | `margin-block-start` / `margin-block-end` | Block margin |
| `padding-top` / `padding-bottom` | `padding-block-start` / `padding-block-end` | Block padding |
| `left` / `right` | `inset-inline-start` / `inset-inline-end` | Positioning |
| `border-left` / `border-right` | `border-inline-start` / `border-inline-end` | Borders |
| `text-align: left/right` | `text-align: start/end` | Text alignment |

Fixes #16388
