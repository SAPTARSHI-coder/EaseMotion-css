# Cyberpunk Neon Scale-Hover Tabs

Pure CSS tab component with scale-hover animation, designed for cyberpunk neon interface layouts.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels scale in smoothly when switching content — styled with neon glow effects, dark surfaces, and a scrolling grid background for a cyberpunk aesthetic. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

/* Scale-hold animation */
.tabs__panel {
    animation: ease-kf-scale-in 0.35s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-scale-in` keyframe for smooth scale entrance
- Configurable `--ez-scale-hover` for hover scale factor on cards
- Neon glow via `box-shadow` with cyan, magenta, and green colors
- `ease-kf-neon-pulse` for animated text glow effect
- `ease-kf-grid-scroll` for scrolling grid background
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors, timing, and scale

## Why it matters

Cyberpunk and neon-themed interfaces demand bold, futuristic interactions. The scale-hover transition provides a high-tech, holographic feel that reinforces the aesthetic — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Cyberpunk landing page with nav, hero, scale-hover tabs (Neural/Combat/Velocity), and pricing |
| `style.css` | Neon styles, scale-hover animations, grid background, glow effects |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-scale-duration` | `0.35s` | Scale animation duration |
| `--ez-scale-hover` | `1.03` | Hover scale factor |
| `--ez-neon-cyan` | `#00f0ff` | Primary neon color |
| `--ez-neon-magenta` | `#ff00e5` | Secondary neon color |
| `--ez-neon-green` | `#39ff14` | Accent neon color |
| `--ez-neon-red` | `#ff1744` | Danger neon color |
| `--ez-page-bg` | `#0a0a0f` | Page background |

## Keyframes

- `ease-kf-scale-in` — scale entrance animation
- `ease-kf-neon-pulse` — animated neon text glow
- `ease-kf-grid-scroll` — scrolling grid background

## Issue

Closes #50089
