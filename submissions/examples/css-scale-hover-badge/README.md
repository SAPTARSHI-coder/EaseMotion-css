# Ease CSS Scale-Hover Badge for SaaS Showcase Layouts

A modern, high-impact pure CSS/HTML Scale-Hover Badge component designed for SaaS landing pages, feature update announcements, operational status indicators, and promotional banners.

This component features micro-spring scaling entrance keyframes, fluid 1.08x scale hover expansion, and responsive theme support without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Spring Scale Physics**: Tactile spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for realistic expansion response.
- **Interactive Micro-Zoom**: Fluid 1.08x scale expansion on hover/focus states.
- **Theme Variants**: Pre-styled for Feature Release (Primary), Health Status (Success), Upgrade Offer (Purple), and Urgent Waitlist (Warning).
- **Responsive Design**: Touch-friendly dimensions adaptable across mobile, tablet, and desktop viewports.
- **Accessibility Adaptive**: Full support for `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/css-scale-hover-badge/
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

Insert the Scale-Hover Badge into your HTML layout:

```html
<div class="scale-badge-wrapper">
  <a href="#new-feature" class="scale-badge scale-badge--primary">
    <span class="badge-scale-indicator"></span>
    <span class="badge-label-tag">SCALE ENGINE</span>
    <span class="badge-divider" aria-hidden="true">|</span>
    <span class="badge-text">v8.0 Micro-Spring Scale Active</span>
    <span class="badge-arrow-icon" aria-hidden="true">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-scale-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-spring scaling timing curve |
| `--scale-duration` | `0.65s` | Duration of spring scale entrance |
| `--pulse-duration` | `1.8s` | Indicator pulse aura expansion duration |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.14)` | Background color for primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.45)` | Border accent color for primary badge |

---

## Reduced Motion Compliance

For users with motion sensitivity, scaling keyframes automatically disable when `prefers-reduced-motion: reduce` is active:

```css
@media (prefers-reduced-motion: reduce) {
  .scale-badge {
    animation: none !important;
    transition: none !important;
  }
}
```
