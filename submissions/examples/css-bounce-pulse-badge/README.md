# Ease CSS Bounce-Pulse Badge for SaaS Showcase Layouts

A modern, high-impact pure CSS/HTML Bounce-Pulse Badge component designed for SaaS landing pages, feature update announcements, health status indicators, and promotional banners.

This component features rhythmic vertical bounce keyframe physics, expanding dual-stage pulse aura rings, and interactive micro-bounce hover effects without JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Rhythmic Bounce Keyframes**: Smooth vertical spring bounce using `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- **Expanding Pulse Aura**: Ambient radial glow pulse on indicator dots and badge borders.
- **Theme Variants**: Pre-styled for Major Announcement (Primary), Health Indicator (Success), Limited Offer (Purple), and Urgent Waitlist (Warning).
- **Responsive Design**: Touch-friendly dimensions adaptable across mobile, tablet, and desktop viewports.
- **Accessibility Adaptive**: Full support for `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

---

## Folder Structure

```text
submissions/examples/css-bounce-pulse-badge/
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

Insert the Bounce-Pulse Badge into your HTML layout:

```html
<div class="bounce-badge-wrapper">
  <a href="#new-feature" class="bounce-badge bounce-badge--primary">
    <span class="badge-bounce-indicator"></span>
    <span class="badge-label-tag">UPDATE</span>
    <span class="badge-divider" aria-hidden="true">|</span>
    <span class="badge-text">Rhythmic Bounce Engine Active</span>
    <span class="badge-arrow-icon" aria-hidden="true">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-bounce-curve` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-bounce cubic-bezier curve |
| `--bounce-duration` | `2.2s` | Full rhythmic bounce loop cycle |
| `--pulse-duration` | `1.8s` | Indicator pulse aura expansion duration |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.14)` | Background color for primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.45)` | Border accent color for primary badge |

---

## Reduced Motion Compliance

For users with motion sensitivity, bounce and pulse keyframe loops automatically stop when `prefers-reduced-motion: reduce` is enabled:

```css
@media (prefers-reduced-motion: reduce) {
  .bounce-badge {
    animation: none !important;
    transition: none !important;
  }
}
```
