# Ease CSS Ripple-Wave Badge for SaaS Showcase Layouts

A modern, pure CSS/HTML Ripple-Wave Badge designed for SaaS landing pages, feature release announcements, system status indicators, and promotional banners.

This component features smooth multi-ring concentric ripple wave keyframe animations, glowing status indicators, and responsive theme support without requiring any JavaScript.

---

## Features

- **Pure HTML & CSS**: No JavaScript or external dependencies required.
- **Concentric Multi-Ring Ripple Animation**: Performant keyframe wave expansion using CSS transforms and opacity.
- **Theme Variants**: Pre-styled for Primary Release, System Status (Success), Promo (Purple), and High Priority (Warning).
- **Responsive Layout**: Adapts gracefully across desktop, tablet, and mobile viewports.
- **Accessibility Compliance**: Built-in support for `prefers-reduced-motion: reduce` and keyboard focus states (`:focus-visible`).
- **Customizable CSS Variables**: Easily customize ripple speeds, colors, and scales using standard design tokens.

---

## Folder Structure

```text
submissions/examples/css-ripple-wave-badge/
├── demo.html
├── style.css
└── README.md
```

---

## Quick Usage Example

Include the stylesheet in your HTML header:

```html
<link rel="stylesheet" href="style.css">
```

Add a Ripple-Wave Badge element:

```html
<div class="ripple-badge-wrapper">
  <a href="#new-feature" class="ripple-badge ripple-badge--primary">
    <!-- Concentric Wave Rings -->
    <span class="ripple-wave-ring ring-1"></span>
    <span class="ripple-wave-ring ring-2"></span>
    <span class="ripple-wave-ring ring-3"></span>
    
    <!-- Status & Content -->
    <span class="badge-status-dot"></span>
    <span class="badge-label-tag">NEW RELEASE</span>
    <span class="badge-text">v2.4 AI Workflow Automation is Live</span>
    <span class="badge-arrow-icon">&rarr;</span>
  </a>
</div>
```

---

## CSS Custom Properties

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--badge-primary-bg` | `rgba(99, 102, 241, 0.12)` | Background color of primary badge |
| `--badge-primary-border` | `rgba(99, 102, 241, 0.4)` | Border color of primary badge |
| `--badge-primary-text` | `#818cf8` | Text color of primary badge |
| `--badge-primary-ripple` | `rgba(99, 102, 241, 0.35)` | Wave ring color for primary badge |
| `--ripple-duration` | `2.4s` | Cycle time for full wave expansion |
| `--pulse-duration` | `1.6s` | Pulse speed for status indicator dot |

---

## Accessibility & Motion Preference

This component respects user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .ripple-wave-ring,
  .badge-status-dot::after {
    animation: none !important;
    opacity: 0.2;
  }
}
```

Keyboard navigation is fully supported with explicit focus rings when navigating via keyboard (`Tab` / `:focus-visible`).
