# Ease CSS Bounce-Pulse Badge for SaaS Showcase Layouts

A high-energy, pure CSS/HTML Bounce-Pulse Badge component designed for SaaS landing pages, feature announcements, system status indicators, and call-to-action hero headers.

This component combines downward bounce entrance keyframe physics with ambient pulse glow rings and responsive micro-interactions without requiring JavaScript.

---

## Features

- **Pure HTML & CSS**: Zero JavaScript or external runtime dependencies.
- **Squash-and-Stretch Bounce Physics**: Performant keyframe drop animation using `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- **Ambient Pulse Glow Rings**: Concentric expanding aura surrounding the badge for organic visual depth.
- **Theme Variants**: Pre-styled for Feature Release (Primary), System Health (Success), Pro Upgrade (Purple Glow), and Urgency Alert (Warning).
- **Fully Responsive**: Adapts fluidly across mobile, tablet, and high-density screens.
- **Accessible Design**: Complies with `:focus-visible` keyboard focus indicators and `prefers-reduced-motion: reduce`.

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

Include the stylesheet in your project head:

```html
<link rel="stylesheet" href="style.css">
```

Add the Bounce-Pulse Badge to your HTML page:

```html
<div class="bounce-badge-wrapper">
  <a href="#new-feature" class="bounce-badge bounce-badge--primary">
    <span class="badge-pulse-glow-ring"></span>
    <span class="badge-status-dot"></span>
    <span class="badge-label-tag">NEW FEATURE</span>
    <span class="badge-divider" aria-hidden="true">|</span>
    <span class="badge-text">WebSockets v3.2 Active</span>
    <span class="badge-arrow-icon" aria-hidden="true">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-bounce-physics` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Squash-and-stretch bounce curve |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.12)` | Background color for primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.45)` | Border accent color for primary badge |
| `--badge-primary-dot` | `#6366f1` | Rhythm pulse indicator dot color |
| `--badge-primary-glow` | `rgba(99, 102, 241, 0.35)` | Ambient pulse ring aura color |

---

## Reduced Motion Compliance

For users with motion sensitivity or vestibular disorders, bounce keyframes and pulse ring oscillations automatically disable when `prefers-reduced-motion: reduce` is enabled:

```css
@media (prefers-reduced-motion: reduce) {
  .bounce-badge,
  .badge-pulse-glow-ring,
  .badge-status-dot {
    animation: none !important;
    transition: none !important;
  }
}
```
