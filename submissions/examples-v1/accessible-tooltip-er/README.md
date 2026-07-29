# Accessible Web Zoom-Out Tooltip

Pure CSS zoom-out tooltip designed for accessible web interfaces — keyboard navigable, screen reader friendly, and WCAG 2.1 compliant.

## What it is

A CSS-only tooltip component that reveals content with a smooth zoom-out animation when triggered by **hover** or **keyboard focus**. Built with accessibility as the primary design constraint:

- **Keyboard accessible** — `Tab` through triggers, tooltip appears on focus
- **ARIA compliant** — uses `role="tooltip"` and `aria-describedby`
- **High contrast** — exceeds WCAG AAA 7:1 ratio for text
- **Reduced motion** — instantly shows tooltip when `prefers-reduced-motion: reduce` is active
- **Focus visible** — clear 3px focus ring on all interactive elements
- **Skip link** — included in demo for full keyboard navigation

## How it works

The tooltip uses CSS animations (`ease-kf-zoomout-tooltip`) triggered by the `:focus` and `:hover` pseudo-classes on the trigger element. No JavaScript is used.

```css
/* Trigger focus/hover reveals tooltip */
.trigger-label:focus ~ .tooltip--accessible {
    animation: ease-kf-zoomout-tooltip 0.3s ease-out forwards;
}
```

Key techniques:
- `transform: scale()` for the zoom-out effect
- `aria-describedby` links trigger to tooltip content
- `role="tooltip"` for screen reader semantics
- `:focus-visible` for keyboard-only focus ring
- CSS custom properties for full theme control

## Why it matters

Most tooltips only work with hover, excluding keyboard and screen reader users. This component ensures tooltips are accessible to everyone without sacrificing visual quality.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Standalone demo with two theme variants |
| `style.css` | All tooltip styles and animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tooltip-scale` | `0.3` | Initial scale for zoom-out |
| `--ez-tooltip-duration` | `0.3s` | Animation duration |
| `--ez-tooltip-offset` | `12px` | Gap from trigger |
| `--ez-tooltip-bg` | `#1a1a2e` | Background color |
| `--ez-tooltip-color` | `#ffffff` | Text color |
| `--ez-focus-ring-color` | `#005fcc` | Focus indicator color |

## Keyframe

- `ease-kf-zoomout-tooltip` — zoom from 0.3 to 1.0 with fade-in

## Issue

Closes #46251