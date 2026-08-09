# Creative Portfolio Rotate-Click Tabs

Pure CSS tab component with rotate-click animation, designed for creative portfolio layouts.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels rotate in with a smooth rotateX transition when clicking tabs — designed for creative portfolio and personal site contexts. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: rotateX(0deg) translateY(0) scale(1);
}

/* Rotate-click animation */
.tabs__panel {
    animation: ease-kf-rotate-in 0.45s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-rotate-in` keyframe for smooth rotateX rotate-click entrance
- Configurable `--ez-rotate-angle` for rotation depth
- `transform-origin: top center` for natural pivot point
- `perspective` on container for realistic 3D feel
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors, timing, and angle

## Why it matters

Creative portfolio sites need tab components that feel dynamic and expressive. The rotate-click transition provides a tactile, physical interaction feel that showcases projects and skills with polish — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Portfolio layout with sidebar, topbar, and 3 rotate-click tabs (Projects, Skills, About) |
| `style.css` | Portfolio layout, sidebar, rotate-click animations, and responsive rules |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-rotate-duration` | `0.45s` | Rotate-click animation duration |
| `--ez-rotate-angle` | `10deg` | Initial rotation angle |
| `--ez-rotate-accent` | `#8b5cf6` | Active tab accent color |
| `--ez-rotate-bg` | `#ffffff` | Background color |
| `--ez-rotate-color` | `#18181b` | Text color |
| `--ez-rotate-border` | `#e4e4e7` | Border color |
| `--ez-rotate-sidebar-bg` | `#18181b` | Sidebar background |

## Keyframes

- `ease-kf-rotate-in` — rotateX + translateY + scale rotate-click entrance
- `ease-kf-card-reveal` — staggered card reveal animation

## Issue

Closes #50079
