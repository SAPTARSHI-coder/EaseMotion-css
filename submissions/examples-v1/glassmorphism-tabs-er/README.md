# Glassmorphism 3D Flip Tabs

Pure CSS tab component with 3D flip animation and glassmorphism UI styling.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels flip in with a smooth 3D rotateY transition through frosted glass surfaces. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel inside a 3D-transformed stage.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__stage .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: rotateY(0deg) scale(1);
}

/* 3D Flip animation */
.tabs__panel {
    animation: ease-kf-flip-in 0.5s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-flip-in` keyframe for smooth 3D rotateY flip entrance
- `perspective` on the tabs container for realistic 3D depth
- `backface-visibility: hidden` to prevent rendering artifacts
- Glassmorphism via `backdrop-filter: blur()` and semi-transparent backgrounds
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors, timing, blur, and perspective

## Why it matters

Glassmorphism is a dominant design trend in modern interfaces. A 3D flip tab component provides a premium, app-like interaction feel — the frosted glass aesthetic combined with depth-aware transitions creates an immersive user experience, all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Glassmorphism landing page with hero, 3D flip tabs, and glass card content |
| `style.css` | Glassmorphism styles, 3D flip animations, floating background blobs |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-flip-duration` | `0.5s` | 3D flip animation duration |
| `--ez-flip-perspective` | `800px` | 3D perspective depth |
| `--ez-flip-accent` | `#60a5fa` | Active tab accent color |
| `--ez-glass-bg` | `rgba(255,255,255,0.12)` | Glass background opacity |
| `--ez-glass-border` | `rgba(255,255,255,0.18)` | Glass border opacity |
| `--ez-glass-blur` | `16px` | Backdrop blur amount |
| `--ez-page-bg` | `#0f172a` | Page background color |
| `--ez-text` | `#f1f5f9` | Primary text color |
| `--ez-text-muted` | `#94a3b8` | Muted text color |

## Keyframes

- `ease-kf-flip-in` — 3D rotateY flip entrance (0 to 90 degrees)
- `ease-kf-flip-out` — 3D rotateY flip exit (for reference)
- `ease-kf-glass-float` — Floating background blob animation
- `ease-kf-glass-float-2` — Secondary floating blob animation

## Issue

Closes #50059
