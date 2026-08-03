# Creative Portfolio Shimmer Sweep Popover

Pure CSS popover with a smooth shimmer sweep animation, styled for creative portfolio layouts.

## What it is

A CSS-only popover component that reveals content with a shimmer light sweep effect when triggered by hover or focus. Designed for creative portfolios: project detail cards, team member bios, skill tags, and contact CTAs.

## How it works

The popover uses CSS animations for both the entrance and the shimmer sweep. No JavaScript is used.

```css
/* Popover entrance */
.project-card__trigger:hover ~ .popover--shimmer {
    animation: ease-kf-popover-in 0.3s ease-out forwards;
}

/* Shimmer sweep triggers after entrance */
.project-card__trigger:hover ~ .popover--shimmer .popover__shimmer::before {
    animation: ease-kf-shimmer-sweep 0.8s ease-out 0.15s forwards;
}
```

Key techniques:
- `ease-kf-shimmer-sweep` keyframe moves an angled gradient across the popover
- `skewX(-15deg)` creates a dynamic angled sweep
- `ease-kf-popover-in` provides smooth entrance with scale + translateY
- `aria-describedby` links trigger to popover content
- `role="tooltip"` for screen reader semantics
- CSS custom properties for shimmer width, speed, and all visual parameters

## Why it matters

Creative portfolios need elegant, non-intrusive ways to surface project details. The shimmer sweep adds a premium, artistic accent that complements portfolio aesthetics — without any JavaScript overhead.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full portfolio with projects, team, skills, and contact |
| `style.css` | All popover styles, shimmer animation, and layout |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-popover-shimmer-width` | `60%` | Shimmer gradient width |
| `--ez-popover-shimmer-speed` | `0.8s` | Shimmer sweep duration |
| `--ez-popover-duration` | `0.3s` | Entrance duration |
| `--ez-popover-bg` | `#1a1a2e` | Background color |
| `--ez-popover-color` | `#f0f0f0` | Text color |
| `--ez-popover-accent` | `#a78bfa` | Accent color |
| `--ez-popover-radius` | `12px` | Border radius |

## Keyframes

- `ease-kf-popover-in` — scale + translateY entrance
- `ease-kf-shimmer-sweep` — angled gradient sweep across surface

## Issue

Closes #50007