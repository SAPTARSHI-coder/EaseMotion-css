# Ease CSS Float-Drift Tooltip for SaaS Showcase Layouts

A modern, accessible pure CSS/HTML Float-Drift Tooltip component designed for SaaS landing pages, interactive dashboards, status indicators, and control toolbars.

This component features ambient vertical/horizontal float-drift keyframes, multi-directional arrow positioning (`top`, `right`, `bottom`, `left`), and ARIA-compliant markup without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Ambient Float-Drift Keyframes**: Smooth 8px floating oscillation using `ease-in-out` animation cycles.
- **Multi-Directional Positioning**: Preset CSS classes for `.tooltip--top`, `.tooltip--right`, `.tooltip--bottom`, and `.tooltip--left`.
- **Theme Variants**: Pre-styled for Default (Slate), System Health (Emerald), Upgrade Offer (Violet), and Quota Alert (Warning).
- **Fully Accessible**: Linked via `role="tooltip"` and `aria-describedby`, supporting both `:hover` and `:focus-within` trigger states.
- **Reduced Motion Compliant**: Disables floating keyframes automatically when `prefers-reduced-motion: reduce` is enabled.

---

## Folder Structure

```text
submissions/examples/css-float-drift-tooltip/
├── demo.html
├── style.css
└── README.md
```

---

## Quick Usage Example

Include the stylesheet in your document head:

```html
<link rel="stylesheet" href="style.css">
```

Insert the Float-Drift Tooltip into your HTML layout:

```html
<div class="tooltip-trigger-wrapper">
  <button class="card-action-btn has-tooltip tooltip--top" aria-describedby="my-tooltip">
    Action Button
  </button>
  
  <div id="my-tooltip" class="float-tooltip tooltip-content" role="tooltip">
    <span class="tooltip-title">Tooltip Title</span>
    <span class="tooltip-desc">Detailed contextual explanation.</span>
    <span class="tooltip-arrow"></span>
  </div>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--float-duration` | `3.2s` | Continuous float-drift oscillation period |
| `--entrance-duration` | `0.3s` | Scale and opacity fade entrance time |
| `--tooltip-bg` | `#1e293b` | Background color for tooltip box |
| `--tooltip-border` | `#475569` | Border stroke color for tooltip |
| `--tooltip-shadow` | `0 10px 30px rgba(0, 0, 0, 0.45)` | Elevation shadow |

---

## Reduced Motion Compliance

For users with motion sensitivity, float-drift keyframes automatically fallback to static placement when `prefers-reduced-motion: reduce` is active:

```css
@media (prefers-reduced-motion: reduce) {
  .float-tooltip {
    animation: none !important;
    transition: opacity 0.15s ease !important;
  }
}
```
