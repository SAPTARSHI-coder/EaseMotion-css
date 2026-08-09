# Marketing Rotate-Click Tabs

Pure CSS tab component with rotate-click animation, designed for marketing landing page layouts.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels rotate in with a smooth rotateX transition when clicking tabs — designed for marketing and landing page contexts. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: rotateX(0deg) translateY(0) scale(1);
}

/* Rotate-click animation */
.tabs__panel {
    animation: ease-kf-rotate-in 0.45s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-rotate-in` keyframe for smooth rotateX rotate-click entrance
- Configurable `--ez-rotate-angle` for rotation depth
- `transform-origin: top center` for natural pivot point
- `perspective` on container for realistic 3D feel
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors, timing, and angle

## Why it matters

Marketing landing pages need tab components that feel dynamic and engaging. The rotate-click transition provides a tactile, physical interaction feel that draws user attention and increases engagement — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Marketing landing page with nav, hero, rotate-click tabs (Launch/Growth/Scale), and pricing |
| `style.css` | Marketing styles, rotate-click animations, and responsive rules |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-rotate-duration` | `0.45s` | Rotate-click animation duration |
| `--ez-rotate-angle` | `8deg` | Initial rotation angle |
| `--ez-rotate-accent` | `#f97316` | Active tab accent color |
| `--ez-rotate-bg` | `#ffffff` | Background color |
| `--ez-rotate-color` | `#0f172a` | Text color |
| `--ez-rotate-border` | `#e2e8f0` | Border color |

## Keyframes

- `ease-kf-rotate-in` — rotateX + translateY + scale rotate-click entrance
- `ease-kf-badge-pop` — badge pop-in animation

## Issue

Closes #50069
