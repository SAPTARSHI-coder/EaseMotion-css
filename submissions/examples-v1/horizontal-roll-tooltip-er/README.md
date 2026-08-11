# Horizontal Roll Tooltip – Marketing Landing Page

Pure CSS tooltip with a smooth horizontal roll-in animation, styled for modern marketing landing pages.

## What it is

A CSS-only tooltip component that slides in horizontally when the user hovers or focuses a trigger element. Designed specifically for marketing contexts: product feature cards, pricing tables, and CTA sections.

Two animation directions:
- **Roll Left** — tooltip appears to the left, sliding in from the right
- **Roll Right** — tooltip appears to the right, sliding in from the left

## How it works

The tooltip uses CSS `translateX()` animations triggered by `:hover` and `:focus-visible` pseudo-classes. No JavaScript is used.

```css
/* Trigger focus/hover reveals tooltip */
.feature-card__trigger:hover ~ .tooltip--roll-left {
    animation: ease-kf-roll-in-left 0.35s cubic-bezier(.4,0,.2,1) forwards;
}
```

Key techniques:
- `translateX()` for horizontal slide motion
- `ease-kf-roll-in-left` / `ease-kf-roll-in-right` keyframes for directional entry
- `aria-describedby` links trigger to tooltip content
- `role="tooltip"` for screen reader semantics
- CSS custom properties for full theme control

## Why it matters

Marketing landing pages need tooltips that feel polished and on-brand. The horizontal roll animation adds a premium, purposeful feel that static tooltips lack — without any JavaScript overhead.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full demo with features, pricing, and CTA sections |
| `style.css` | All tooltip styles and animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tooltip-roll-distance` | `24px` | Horizontal travel distance |
| `--ez-tooltip-duration` | `0.35s` | Animation duration |
| `--ez-tooltip-easing` | `cubic-bezier(.4,0,.2,1)` | Timing function |
| `--ez-tooltip-bg` | `#ffffff` | Background color |
| `--ez-tooltip-color` | `#1e293b` | Text color |
| `--ez-tooltip-accent` | `#6366f1` | Accent highlight color |

## Keyframes

- `ease-kf-roll-in-left` — slides in from right (+24px → 0)
- `ease-kf-roll-in-right` — slides in from left (-24px → 0)

## Issue

Closes #46256