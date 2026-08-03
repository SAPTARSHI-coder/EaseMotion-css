# Ease CSS Morph-Glow Tooltip for SaaS Showcase Layouts

A modern, cyberpunk-inspired pure CSS/HTML Morph-Glow Tooltip component designed for SaaS landing pages, interactive dashboards, status indicators, and control toolbars.

This component features organic border-radius morphing keyframes (`border-radius: 16px 24px 16px 24px`), ambient radial glow pulses, directional arrow positioning (`top`, `right`, `bottom`, `left`), and ARIA-compliant markup without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Organic Border Morphing**: Continuous border-radius morphing keyframes creating a fluid organic shape.
- **Ambient Radial Glow**: Multi-colored glowing border shadow pulses.
- **Multi-Directional Positioning**: Preset CSS classes for `.tooltip--top`, `.tooltip--right`, `.tooltip--bottom`, and `.tooltip--left`.
- **Theme Variants**: Pre-styled for Default (Cyberpunk Indigo), System Status (Emerald), Upgrade Offer (Violet), and Quota Alert (Warning).
- **Fully Accessible**: Linked via `role="tooltip"` and `aria-describedby`, supporting both `:hover` and `:focus-within` trigger states.
- **Reduced Motion Compliant**: Disables morphing and glow keyframe loops automatically when `prefers-reduced-motion: reduce` is enabled.

---

## Folder Structure

```text
submissions/examples/css-morph-glow-tooltip/
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

Insert the Morph-Glow Tooltip into your HTML layout:

```html
<div class="tooltip-trigger-wrapper">
  <button class="card-action-btn has-tooltip tooltip--top" aria-describedby="my-morph-tooltip">
    Action Button
  </button>
  
  <div id="my-morph-tooltip" class="morph-tooltip tooltip-content" role="tooltip">
    <span class="tooltip-glow-aura" aria-hidden="true"></span>
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
| `--morph-duration` | `4s` | Organic border morphing cycle time |
| `--glow-duration` | `2.4s` | Ambient glow pulse cycle time |
| `--entrance-duration` | `0.3s` | Entrance scale and opacity fade time |
| `--tooltip-bg` | `rgba(15, 23, 42, 0.95)` | Background color for tooltip box |
| `--tooltip-border` | `rgba(99, 102, 241, 0.5)` | Border stroke color for tooltip |
| `--tooltip-glow` | `rgba(99, 102, 241, 0.35)` | Ambient glow shadow color |

---

## Reduced Motion Compliance

For users with motion sensitivity, organic border morphing and glow keyframes automatically fallback to static rounded corners when `prefers-reduced-motion: reduce` is active:

```css
@media (prefers-reduced-motion: reduce) {
  .morph-tooltip {
    animation: none !important;
    border-radius: 16px !important;
    transition: opacity 0.15s ease !important;
  }
}
```
