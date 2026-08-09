# Ease CSS Zoom-In Badge for SaaS Showcase Layouts

A modern, high-impact pure CSS/HTML Zoom-In Badge component designed for SaaS landing pages, feature announcements, operational status indicators, and promotional banners.

This component features spring-assisted zoom-in scale entrance keyframe physics, interactive zoom-hover dynamics, and responsive theme support without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Spring-Assisted Zoom-In Keyframes**: Smooth scaling entrance using `scale(0.4)` to `scale(1)` with `cubic-bezier(0.34, 1.56, 0.64, 1)` physics.
- **Interactive Scale Hover**: Micro-zoom scale expansion (`scale(1.06)`) on hover/focus.
- **Theme Variants**: Pre-styled for Feature Release (Primary), Health Status (Success), Upgrade Offer (Purple), and Urgent Waitlist (Warning).
- **Responsive Design**: Touch-friendly dimensions adaptable across mobile, tablet, and desktop viewports.
- **Accessibility Adaptive**: Full support for `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/css-zoom-in-badge/
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

Insert the Zoom-In Badge into your HTML layout:

```html
<div class="zoom-badge-wrapper">
  <a href="#new-feature" class="zoom-badge zoom-badge--primary">
    <span class="badge-zoom-indicator"></span>
    <span class="badge-label-tag">v7.0 RELEASE</span>
    <span class="badge-divider" aria-hidden="true">|</span>
    <span class="badge-text">Zoom-In Engine Active</span>
    <span class="badge-arrow-icon" aria-hidden="true">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-zoom-curve` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring zoom-in timing curve |
| `--zoom-duration` | `0.7s` | Duration of spring scale entrance |
| `--pulse-duration` | `1.8s` | Indicator pulse aura expansion duration |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.14)` | Background color for primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.45)` | Border accent color for primary badge |

---

## Reduced Motion Compliance

For users with motion sensitivity, zoom scale keyframes automatically disable when `prefers-reduced-motion: reduce` is active:

```css
@media (prefers-reduced-motion: reduce) {
  .zoom-badge {
    animation: none !important;
    transition: none !important;
  }
}
```
