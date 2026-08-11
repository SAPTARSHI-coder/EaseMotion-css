# SaaS Showcase Zoom-In Popover

Pure CSS popover component with zoom-in animation, designed for SaaS showcase layouts.

## What it is

A CSS-only popover component that zooms in smoothly on hover or focus — designed for SaaS landing pages and feature showcases. Popovers reveal rich detail content with checklists and metrics. No JavaScript is required.

## How it works

The popover uses CSS `:hover` and `:focus-within` on the parent card to control visibility. The `ease-kf-zoom-in-popover` keyframe animates the popover into view.

```css
/* Show popover on hover or focus */
.feature-card:hover .popover,
.feature-card:focus-within .popover {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1) translateY(0);
}

/* Zoom-in animation */
.popover {
    animation: ease-kf-zoom-in-popover 0.3s ease-out forwards;
}
```

Key techniques:
- `:hover` and `:focus-within` for dual trigger (mouse + keyboard)
- `ease-kf-zoom-in-popover` keyframe for smooth scale + translateY entrance
- `ease-kf-popover-arrow` for the arrow pop-in effect
- Configurable `--ez-popover-scale` for initial zoom factor
- `role="tooltip"` for screen reader semantics
- CSS custom properties for all colors, timing, and scale

## Why it matters

SaaS landing pages need popover components that provide contextual details without cluttering the interface. The zoom-in transition creates a polished, app-like feel that enhances feature discovery — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | SaaS landing page with nav, hero, feature cards with zoom-in popovers, and pricing |
| `style.css` | SaaS styles, zoom-in popover animations, and responsive rules |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-popover-duration` | `0.3s` | Zoom-in animation duration |
| `--ez-popover-scale` | `0.9` | Initial zoom scale |
| `--ez-popover-accent` | `#6366f1` | Active accent color |
| `--ez-popover-bg` | `#ffffff` | Background color |
| `--ez-popover-color` | `#1e293b` | Text color |
| `--ez-popover-border` | `#e2e8f0` | Border color |

## Keyframes

- `ease-kf-zoom-in-popover` — scale + translateY zoom-in entrance
- `ease-kf-popover-arrow` — arrow pop-in effect

## Issue

Closes #46399
