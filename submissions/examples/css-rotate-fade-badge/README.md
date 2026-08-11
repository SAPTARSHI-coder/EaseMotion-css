# Ease CSS Rotate-Fade Badge for SaaS Showcase Layouts

A modern, lightweight pure CSS/HTML Rotate-Fade Badge component designed for SaaS landing pages, feature announcements, operational status indicators, and promotional banners.

This component features 3D rotational keyframe entrance animations, continuous axis icon rotation, and responsive theme support without requiring JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **3D Rotational Keyframes**: Smooth 3D entrance transition utilizing `rotate3d(1, 1, 0, -25deg)` and opacity fading.
- **Continuous Axis Spin**: Rotating accent icon indicators adding ambient motion depth.
- **Theme Variants**: Pre-styled for Feature Release (Primary), Health Status (Success), Upgrade Offer (Purple), and Urgent Alert (Warning).
- **Responsive Design**: Touch-friendly dimensions adaptable across mobile, tablet, and desktop viewports.
- **Accessibility Adaptive**: Full support for `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/css-rotate-fade-badge/
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

Insert the Rotate-Fade Badge into your HTML layout:

```html
<div class="rotate-badge-wrapper">
  <a href="#new-feature" class="rotate-badge rotate-badge--primary">
    <span class="badge-rotate-indicator">
      <span class="badge-spin-icon" aria-hidden="true">&olcross;</span>
    </span>
    <span class="badge-label-tag">NEW FEATURE</span>
    <span class="badge-divider" aria-hidden="true">|</span>
    <span class="badge-text">3D Rotate-Fade Engine Active</span>
    <span class="badge-arrow-icon" aria-hidden="true">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-rotate-curve` | `cubic-bezier(0.34, 1.45, 0.64, 1)` | Rotational entrance timing curve |
| `--rotate-duration` | `0.75s` | Duration of the 3D rotational entrance |
| `--spin-duration` | `8s` | Continuous spinning icon cycle duration |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.12)` | Background color for primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.4)` | Border accent color for primary badge |

---

## Reduced Motion Compliance

For users with motion sensitivity, rotational keyframes and icon spin loops automatically stop when `prefers-reduced-motion: reduce` is enabled:

```css
@media (prefers-reduced-motion: reduce) {
  .rotate-badge,
  .badge-spin-icon {
    animation: none !important;
    transition: none !important;
  }
}
```
