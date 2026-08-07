# Cyberpunk Neon Fade-In Tabs

Pure CSS tab component with fade-in animation and neon glow effects, styled for cyberpunk interfaces.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels fade in smoothly with a neon glow aesthetic. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Fade-in animation */
.tabs__panel {
    animation: ease-kf-fade-in-tab 0.35s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-fade-in-tab` keyframe for smooth panel entrance
- `ease-kf-glow-pulse` keyframe for neon glow on active tab
- `ease-kf-border-scan` for animated gradient border effect
- CSS custom properties for all neon colors and timing

## Why it matters

Cyberpunk-themed interfaces need tab components that feel alive. The neon glow pulse and fade-in transitions create an immersive, futuristic feel — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Cyberpunk character profiles and weapon loadouts demo |
| `style.css` | Tab styles, neon effects, and animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tab-duration` | `0.35s` | Fade-in animation duration |
| `--ez-tab-glow-color` | `#ff2a6d` | Active tab neon glow |
| `--ez-tab-accent` | `#05d9e8` | Secondary accent color |
| `--ez-tab-bg` | `#0d0221` | Background color |
| `--ez-tab-color` | `#d1f7ff` | Text color |
| `--ez-tab-border` | `#1a1a3e` | Border color |

## Keyframes

- `ease-kf-fade-in-tab` — translateY + opacity fade-in
- `ease-kf-glow-pulse` — pulsing neon box-shadow
- `ease-kf-border-scan` — animated gradient border sweep

## Issue

Closes #50018