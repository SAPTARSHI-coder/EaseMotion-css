# Creative Portfolio Horizontal Roll Tooltip

Pure CSS tooltip with a smooth horizontal roll-in animation, styled for creative portfolio layouts.

## What it is

A CSS-only tooltip component that slides in horizontally when the user hovers or focuses a trigger element. Designed for creative portfolio contexts: project showcase cards, skill listings, stat counters, and contact CTAs.

Two animation directions:
- **Roll Left** — tooltip appears to the left, sliding in from the right
- **Roll Right** — tooltip appears to the right, sliding in from the left

## How it works

The tooltip uses CSS `translateX()` animations triggered by `:hover` and `:focus-visible` pseudo-classes. No JavaScript is used.

```css
/* Trigger focus/hover reveals tooltip */
.project-card__trigger:hover ~ .tooltip--roll-left {
    animation: ease-kf-roll-in-left 0.32s cubic-bezier(.4,0,.2,1) forwards;
}
```

Key techniques:
- `translateX()` for horizontal slide motion
- `ease-kf-roll-in-left` / `ease-kf-roll-in-right` keyframes for directional entry
- `aria-describedby` links trigger to tooltip content
- `role="tooltip"` for screen reader semantics
- CSS custom properties for full theme control

## Why it matters

Creative portfolios need elegant, non-intrusive ways to surface project details. Horizontal roll tooltips add a premium, purposeful feel that complements artistic aesthetics — without any JavaScript overhead.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full portfolio demo with projects, skills, stats, and contact |
| `style.css` | All tooltip styles, portfolio layout, and animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tooltip-roll-distance` | `22px` | Horizontal travel distance |
| `--ez-tooltip-duration` | `0.32s` | Animation duration |
| `--ez-tooltip-easing` | `cubic-bezier(.4,0,.2,1)` | Timing function |
| `--ez-tooltip-bg` | `#1a1a2e` | Background color |
| `--ez-tooltip-color` | `#f0f0f0` | Text color |
| `--ez-tooltip-accent` | `#a78bfa` | Accent highlight color |

## Keyframes

- `ease-kf-roll-in-left` — slides in from right (+22px → 0)
- `ease-kf-roll-in-right` — slides in from left (-22px → 0)

## Issue

Closes #46266