# Accordion / Collapse Component — EaseMotion CSS

**Issue:** [#30304 — Add Accordion/Collapse component with smooth expand/collapse animations](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30304)

A CSS-only accordion/collapse component with smooth expand/collapse animations. Supports two approaches: checkbox `:checked` hack and native `<details>`/`<summary>` elements.

## Structure

```
submissions/docs/core_changes-issue-30304/
├── demo.html       # Demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-accordion` | Container wrapper for the accordion |
| `.ease-accordion-item` | Individual accordion section |
| `.ease-accordion-header` | Clickable header with arrow indicator |
| `.ease-accordion-content` | Collapsible content panel |
| `.ease-accordion-checkbox` | Hidden checkbox for toggle mechanics |
| `.ease-accordion-simple` | Variant using `<details>`/`<summary>` HTML |

## Variants

### Checkbox (`.ease-accordion`)
Uses a hidden `<input type="checkbox">` with `:checked ~ .ease-accordion-content` for toggling. The `<label>` serves as the click target. Supports multiple open panels simultaneously.

### Details/Summary (`.ease-accordion-simple`)
Uses native `<details>`/`<summary>` elements for semantic HTML with built-in keyboard accessibility. Only one panel open at a time by default; use `name` attribute for named groups.

## Features

- **CSS-only:** No JavaScript required
- **Smooth animation:** `max-height` + `opacity` for expand/collapse
- **Arrow indicator:** Chevron rotates 180 degrees on open via `::after`
- **Keyboard accessible:** `<label>` association for checkbox; native `<summary>` for details variant
- **Reduced motion:** All transitions disabled when `prefers-reduced-motion: reduce`
- **Customizable:** All colors via `--ease-color-*` and spacing via `--ease-spacing-*` variables
- **Layer-scoped:** All styles wrapped in `@layer easemotion-components`
