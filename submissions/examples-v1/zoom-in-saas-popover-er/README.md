# SaaS Showcase Zoom-In Popover

Pure CSS popover component with zoom-in animation, designed for SaaS showcase layouts.

## What it is

A CSS-only popover component using checkbox toggles for state management. Popovers zoom in smoothly when clicking feature cards, revealing detailed information. No JavaScript is required.

## How it works

The popover component uses CSS `:checked` pseudo-class on hidden checkboxes to control which popover is visible. The `general sibling combinator` (`~`) selects the corresponding popover.

```css
/* Only show popover matching checked checkbox */
.feature-card__toggle:checked ~ .feature-card__popover {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    animation: ease-kf-zoom-in-popover 0.35s ease-out forwards;
}

/* Zoom-in animation */
.feature-card__popover {
    animation: ease-kf-zoom-out-popover 0.35s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="checkbox">` controls state — fully keyboard accessible
- `ease-kf-zoom-in-popover` keyframe for smooth scale entrance
- `ease-kf-zoom-out-popover` keyframe for smooth scale exit
- Configurable `--ez-zoom-scale` for initial scale factor
- `role="dialog"` for screen reader semantics
- CSS custom properties for all colors, timing, and scale

## Why it matters

SaaS showcase pages need popover components that reveal feature details without navigating away. The zoom-in transition provides a polished, app-like feel that keeps users engaged — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | SaaS landing page with nav, hero, 6 feature cards with zoom-in popovers, and pricing |
| `style.css` | SaaS styles, zoom-in popover animations, and responsive rules |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-zoom-duration` | `0.35s` | Zoom animation duration |
| `--ez-zoom-scale` | `0.88` | Initial zoom scale |
| `--ez-zoom-accent` | `#6366f1` | Accent color |
| `--ez-zoom-bg` | `#ffffff` | Background color |
| `--ez-zoom-color` | `#1e293b` | Text color |
| `--ez-zoom-border` | `#e2e8f0` | Border color |

## Keyframes

- `ease-kf-zoom-in-popover` — scale entrance animation
- `ease-kf-zoom-out-popover` — scale exit animation

## Issue

Closes #46399
