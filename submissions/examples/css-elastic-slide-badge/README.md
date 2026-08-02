# Ease CSS Elastic-Slide Badge for SaaS Showcase Layouts

A modern, pure CSS Elastic-Slide Badge designed for SaaS product release announcements, feature highlights, and interactive status chips.

This component features spring physics transitions (`cubic-bezier` elastic overshoot and rebound), smooth entry keyframe animations, and customizable theme tokens without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or runtime external dependencies.
- **Spring Overshoot Animation**: Custom `cubic-bezier(0.68, -0.6, 0.32, 1.6)` keyframes for realistic elastic spring motion.
- **Multi-Directional Motion**: Includes Elastic Slide Up, Left, Right, Top Drop, and Interactive Hover Rebound.
- **Theme Variants**: Pre-styled for Primary Release, Live Status (Success), Feature Promo (Purple), and Early Access Alert (Warning).
- **Responsive & Accessible**: Fully responsive layout across all viewports with keyboard focus states and `prefers-reduced-motion: reduce` compliance.

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

Include `style.css` in your HTML document:

```html
<link rel="stylesheet" href="style.css">
```

Add an Elastic-Slide Badge element:

```html
<div class="elastic-badge-wrapper">
  <a href="#release" class="elastic-badge elastic-badge--primary elastic-slide-in">
    <span class="badge-icon-box">&zap;</span>
    <span class="badge-label-tag">v3.0 RELEASE</span>
    <span class="badge-text">Next-Gen Motion Engine Active</span>
    <span class="badge-arrow-icon">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--elastic-ease-spring` | `cubic-bezier(0.68, -0.6, 0.32, 1.6)` | Easing curve for initial elastic overshoot |
| `--elastic-ease-rebound` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Rebound curve for hover micro-interactions |
| `--elastic-duration` | `0.85s` | Duration of the elastic entrance animation |
| `--elastic-primary-bg` | `rgba(99, 102, 241, 0.14)` | Background color of primary badge |
| `--elastic-primary-border` | `rgba(99, 102, 241, 0.45)` | Border color of primary badge |

---

## Accessibility & Motion Preference

```css
@media (prefers-reduced-motion: reduce) {
  .elastic-slide-in,
  .elastic-slide-left,
  .elastic-slide-right,
  .elastic-slide-top,
  .elastic-hover-bounce {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
```

Keyboard focus is managed seamlessly using `:focus-visible` with customizable outline rings.
