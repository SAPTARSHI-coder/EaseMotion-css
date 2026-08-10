# Ease CSS Elastic-Slide Badge for SaaS Showcase Layouts

A modern, high-impact pure CSS/HTML Elastic-Slide Badge component designed for SaaS landing pages, feature announcements, cluster status dashboards, and call-to-action indicators.

This component features fluid spring-physics keyframe entrance animations, horizontal elastic stretch hover dynamics, and glowing indicator dots without requiring JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript frameworks or external runtime dependencies.
- **Spring-Physics Keyframes**: Multi-stage `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curves create realistic elastic motion.
- **Interactive Stretch Dynamics**: Elastic horizontal expansion on hover and spring compression on click.
- **Theme Variants**: Pre-styled for Feature Announcement (Primary), Realtime Status (Success), Upgrade Banner (Purple Glow), and High Urgency (Warning).
- **Fully Responsive**: Fluid typography and scale for mobile, tablet, and high-DPI viewports.
- **Accessible Design**: Built-in support for `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/css-elastic-slide-badge/
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

Insert the Elastic-Slide Badge into your HTML layout:

```html
<div class="elastic-badge-wrapper">
  <a href="#new-feature" class="elastic-badge elastic-badge--primary">
    <span class="badge-elastic-indicator"></span>
    <span class="badge-label-tag">FEATURE</span>
    <span class="badge-divider" aria-hidden="true">|</span>
    <span class="badge-text">Elastic Spring Engine Released</span>
    <span class="badge-arrow-icon" aria-hidden="true">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-elastic-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Multi-stage spring overshoot curve |
| `--badge-primary-bg` | `rgba(79, 70, 229, 0.12)` | Background color for primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.4)` | Border accent color for primary badge |
| `--badge-primary-text` | `#a5b4fc` | Text color for primary badge |
| `--badge-primary-indicator`| `#6366f1` | Spring pulse indicator dot color |

---

## Reduced Motion Compliance

For users with motion sensitivity, spring animations automatically disable when `prefers-reduced-motion` is active:

```css
@media (prefers-reduced-motion: reduce) {
  .elastic-badge {
    animation: none !important;
    transition: none !important;
  }
}
```
