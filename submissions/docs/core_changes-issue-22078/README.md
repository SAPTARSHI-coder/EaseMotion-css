# Accordion Component — EaseMotion CSS

**Issue:** [#22078 — Add accordion component for collapsible content sections](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22078)

A CSS-only accordion component built with semantic `<details>` / `<summary>` HTML. Zero JavaScript required. Fully accessible (keyboard-navigable, screen-reader friendly).

## Structure

```
submissions/core_changes-issue-22078/
├── demo.html       # Live demo page showing all variants
├── style.css       # Component styles (default + 5 variants + animated)
└── README.md       # This file
```

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| **Default** | `.ease-accordion` | Standard bordered accordion with rounded corners |
| **Bordered** | `.ease-accordion-bordered` | Thicker 2px border for more prominence |
| **Minimal** | `.ease-accordion-minimal` | No borders, separated by divider lines |
| **Compact** | `.ease-accordion-compact` | Reduced padding for space-constrained layouts |
| **Ghost** | `.ease-accordion-ghost` | No border, subtle background only on open items |
| **Animated** | `.ease-accordion-animate` | Smooth expand/collapse via CSS `@keyframes` |

## Usage

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css" />
<link rel="stylesheet" href="path/to/style.css" />

<div class="ease-accordion">
  <details class="ease-accordion-item" open>
    <summary class="ease-accordion-trigger">
      Question
      <span class="ease-accordion-icon">▼</span>
    </summary>
    <div class="ease-accordion-content">
      Answer text here.
    </div>
  </details>
</div>
```

## Features

- Semantic `<details>` / `<summary>` HTML — natively keyboard-accessible and screen-reader friendly
- `@layer easemotion-components` for proper cascade ordering
- CSS custom properties for theme consistency
- Dark mode via `prefers-color-scheme`
- Reduced motion support via `prefers-reduced-motion`
- Windows High Contrast Mode support via `forced-colors`
