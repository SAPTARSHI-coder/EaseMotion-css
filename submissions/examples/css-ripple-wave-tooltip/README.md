# Ease CSS Ripple-Wave Tooltip for SaaS Showcase Layouts

A modern, high-impact pure CSS/HTML Ripple-Wave Tooltip component designed for SaaS landing pages, interactive dashboards, status indicators, and control toolbars.

This component features expanding concentric wave keyframe rings (`scale(0.95)` to `scale(1.22)`), multi-directional arrow positioning (`top`, `right`, `bottom`, `left`), and ARIA-compliant markup without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Concentric Expanding Waves**: Animated multi-ring wave pulses expanding around tooltip boundaries.
- **Multi-Directional Positioning**: Preset CSS classes for `.tooltip--top`, `.tooltip--right`, `.tooltip--bottom`, and `.tooltip--left`.
- **Theme Variants**: Pre-styled for Default (Indigo), System Status (Emerald), Upgrade Offer (Violet), and Quota Alert (Warning).
- **Fully Accessible**: Linked via `role="tooltip"` and `aria-describedby`, supporting both `:hover` and `:focus-within` trigger states.
- **Reduced Motion Compliant**: Disables wave ring keyframe loops automatically when `prefers-reduced-motion: reduce` is enabled.

---

## Folder Structure

```text
submissions/examples/css-ripple-wave-tooltip/
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

Insert the Ripple-Wave Tooltip into your HTML layout:

```html
<div class="tooltip-trigger-wrapper">
  <button class="card-action-btn has-tooltip tooltip--top" aria-describedby="my-ripple-tooltip">
    Action Button
  </button>
  
  <div id="my-ripple-tooltip" class="ripple-tooltip tooltip-content" role="tooltip">
    <span class="tooltip-ripple-ring ring-1"></span>
    <span class="tooltip-ripple-ring ring-2"></span>
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
| `--ripple-duration` | `2.4s` | Concentric wave expansion cycle time |
| `--entrance-duration` | `0.3s` | Scale and opacity fade entrance time |
| `--tooltip-bg` | `#1e293b` | Background color for tooltip box |
| `--tooltip-border` | `#475569` | Border stroke color for tooltip |
| `--tooltip-ripple-color` | `rgba(99, 102, 241, 0.4)` | Concentric wave ring color |

---

## Reduced Motion Compliance

For users with motion sensitivity, concentric ripple wave keyframes automatically disable when `prefers-reduced-motion: reduce` is active:

```css
@media (prefers-reduced-motion: reduce) {
  .tooltip-ripple-ring {
    animation: none !important;
    opacity: 0 !important;
  }
}
```
