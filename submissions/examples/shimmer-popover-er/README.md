# Shimmer Sweep Popover – Marketing Landing Page

Pure CSS popover with a smooth shimmer sweep animation, designed for marketing landing pages.

## What it is

A CSS-only popover component that reveals content with a shimmer light sweep effect when triggered by hover or focus. The shimmer is a semi-transparent gradient that glides across the popover surface, creating a premium, polished feel.

## How it works

The popover uses CSS animations for both the entrance and the shimmer sweep. No JavaScript is used.

```css
/* Popover entrance */
.popover-trigger:hover ~ .popover--shimmer {
    animation: ease-kf-popover-in 0.3s ease-out forwards;
}

/* Shimmer sweep triggers after entrance */
.popover-trigger:hover ~ .popover--shimmer .popover__shimmer::before {
    animation: ease-kf-shimmer-sweep 0.8s ease-out 0.15s forwards;
}
```

Key techniques:
- `ease-kf-shimmer-sweep` keyframe moves a gradient across the popover
- `skewX(-15deg)` on the shimmer creates a dynamic angled sweep
- `ease-kf-popover-in` provides smooth entrance with scale + translateY
- `aria-describedby` links trigger to popover content
- `role="tooltip"` for screen reader semantics
- CSS custom properties for shimmer width, speed, and all visual parameters

## Why it matters

Marketing landing pages need tooltips and popovers that feel premium and on-brand. The shimmer sweep adds a sophisticated visual accent that signals quality — without any JavaScript overhead.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full landing page with features, pricing, and testimonials |
| `style.css` | All popover styles, shimmer animation, and layout |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-popover-shimmer-width` | `60%` | Shimmer gradient width |
| `--ez-popover-shimmer-speed` | `0.8s` | Shimmer sweep duration |
| `--ez-popover-duration` | `0.3s` | Popover entrance duration |
| `--ez-popover-bg` | `#ffffff` | Background color |
| `--ez-popover-color` | `#1e293b` | Text color |
| `--ez-popover-accent` | `#6366f1` | Accent highlight color |
| `--ez-popover-radius` | `12px` | Border radius |
| `--ez-popover-shadow` | `0 12px 40px...` | Box shadow |

## Keyframes

- `ease-kf-popover-in` — scale + translateY entrance
- `ease-kf-shimmer-sweep` — angled gradient sweep across surface

## Issue

Closes #49996