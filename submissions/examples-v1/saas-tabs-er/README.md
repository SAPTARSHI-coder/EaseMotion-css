# Modern SaaS Zoom-In Tabs

Pure CSS tab component with zoom-in animation, designed for modern SaaS interfaces.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels zoom in smoothly when switching between content. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

/* Zoom-in animation */
.tabs__panel {
    animation: ease-kf-zoom-in-panel 0.3s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-zoom-in-panel` keyframe for smooth panel zoom entrance
- Configurable `--ez-tab-scale` for zoom factor
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors, timing, and scale

## Why it matters

SaaS interfaces need tab components that feel modern and responsive. The zoom-in transition provides a polished, app-like feel that enhances the user experience — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | SaaS landing page with features, pricing, and metrics |
| `style.css` | Tab styles, zoom-in animations, and layout |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tab-duration` | `0.3s` | Zoom-in animation duration |
| `--ez-tab-scale` | `0.92` | Initial zoom scale |
| `--ez-tab-accent` | `#6366f1` | Active tab accent color |
| `--ez-tab-bg` | `#ffffff` | Background color |
| `--ez-tab-color` | `#1e293b` | Text color |
| `--ez-tab-border` | `#e2e8f0` | Border color |

## Keyframes

- `ease-kf-zoom-in-panel` — scale + opacity zoom-in entrance

## Issue

Closes #50038