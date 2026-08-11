# Ease CSS 3D-Flip Badge for SaaS Showcase Layouts

A modern, dual-sided pure CSS/HTML 3D-Flip Badge component designed for SaaS landing pages, feature announcements, cluster status dashboards, and promo offers.

This component features GPU-accelerated 3D perspective transforms (`perspective: 1000px`, `transform-style: preserve-3d`), dual-sided front/back contextual faces, and interactive 180-degree flip physics without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Dual-Sided 3D Geometry**: Front face displays primary title/tag while back face reveals instant metrics, action CTAs, or promo codes.
- **GPU Accelerated**: Driven by `preserve-3d`, `backface-visibility: hidden`, and `rotateY(180deg)` transitions.
- **Theme Variants**: Pre-styled for Feature Release (Primary), Health Status (Success), Upgrade Offer (Purple), and Urgent Waitlist (Warning).
- **Responsive & Touch Ready**: Maintains proportional dimensions across desktop, tablet, and touch screens.
- **Accessibility Adaptive**: Full support for `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/css-3d-flip-badge/
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

Insert the 3D-Flip Badge into your HTML layout:

```html
<div class="flip-badge-perspective">
  <a href="#new-feature" class="flip-badge flip-badge--primary">
    <div class="flip-badge-inner">
      <!-- Front Face -->
      <div class="flip-badge-face flip-badge-front">
        <span class="badge-status-dot"></span>
        <span class="badge-label-tag">v6.0 RELEASE</span>
        <span class="badge-text">Interactive 3D-Flip Engine</span>
      </div>

      <!-- Back Face -->
      <div class="flip-badge-face flip-badge-back">
        <span class="badge-text-bold">10x Faster Pipeline &rarr;</span>
      </div>
    </div>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-flip-curve` | `cubic-bezier(0.34, 1.45, 0.64, 1)` | 3D flip spring timing curve |
| `--flip-duration` | `0.65s` | Duration of 180-degree card flip transition |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.14)` | Background color for front face |
| `--badge-primary-back-bg` | `linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)` | Gradient background for reverse face |

---

## Reduced Motion Compliance

For users with motion sensitivity, 3D flip rotations automatically fallback to flat presentation when `prefers-reduced-motion: reduce` is enabled:

```css
@media (prefers-reduced-motion: reduce) {
  .flip-badge,
  .flip-badge-inner {
    animation: none !important;
    transition: none !important;
  }
}
```
