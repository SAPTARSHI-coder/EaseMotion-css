# Accordion Component — EaseMotion CSS

**Issue:** [#22078 — Add accordion component for collapsible content sections](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22078)

A CSS-only accordion component built with semantic `<details>` / `<summary>` HTML. Zero JavaScript required. Fully accessible (keyboard-navigable, screen-reader friendly).

## Structure

```
components/
└── accordion.css              # Core component styles

submissions/core_changes-issue-22078/
├── accordion-demo.html        # Live demo page showing all variants
└── README.md                  # This file
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
<link rel="stylesheet" href="components/accordion.css" />

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

## Accessibility

- Uses semantic `<details>` / `<summary>` HTML — natively keyboard-navigable and screen-reader friendly
- Hidden `::-webkit-details-marker` for consistent cross-browser appearance
- `prefers-reduced-motion` disables animations for users with motion sensitivity
- Windows High Contrast Mode support via `forced-colors` media query
- Dark mode support via `prefers-color-scheme`
