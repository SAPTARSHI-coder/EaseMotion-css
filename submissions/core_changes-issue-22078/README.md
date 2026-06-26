# Accordion Component — EaseMotion CSS

**Issue:** [#22078 — Add accordion component for collapsible content sections](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22078)

A CSS-only accordion component built with semantic `<details>` / `<summary>` HTML. Zero JavaScript required. Fully accessible (keyboard-navigable, screen-reader friendly).

## Structure

```
submissions/core_changes-issue-22078/
├── accordion.css          # Component styles (default + 4 variants)
├── accordion-demo.html    # Live demo page showcasing all variants
└── README.md              # This file
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
<link rel="stylesheet" href="path/to/accordion.css" />

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

## Integration

To add this component to EaseMotion core, copy `accordion.css` into the core styles directory and reference it in the build process. The class naming follows the existing `ease-` prefix convention used throughout the framework.

## Dark Mode

The component automatically adapts to dark mode via `@media (prefers-color-scheme: dark)`.
