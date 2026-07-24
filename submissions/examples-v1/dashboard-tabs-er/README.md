# Responsive Dashboard Zoom-In Tabs

Pure CSS tab component with zoom-in animation, designed for responsive dashboard interfaces.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels zoom in smoothly when switching between content — ideal for dashboard analytics, reports, and settings views. No JavaScript is required.

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
    animation: ease-kf-zoom-in-panel 0.35s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-zoom-in-panel` keyframe for smooth panel zoom entrance
- Configurable `--ez-tab-scale` for zoom factor
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors, timing, and scale

## Why it matters

Dashboard interfaces need tab components that feel responsive and polished. The zoom-in transition provides an app-like feel that helps users track content changes — all in pure CSS with zero JavaScript.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full dashboard layout with sidebar, stats cards, and zoom-in tabs |
| `style.css` | Dashboard layout, tab styles, zoom-in animations, and responsive rules |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tab-duration` | `0.35s` | Zoom-in animation duration |
| `--ez-tab-scale` | `0.9` | Initial zoom scale |
| `--ez-tab-accent` | `#3b82f6` | Active tab accent color |
| `--ez-tab-bg` | `#ffffff` | Background color |
| `--ez-tab-color` | `#0f172a` | Text color |
| `--ez-tab-border` | `#e2e8f0` | Border color |
| `--ez-tab-sidebar-bg` | `#0f172a` | Sidebar background |

## Keyframes

- `ease-kf-zoom-in-panel` — scale + opacity zoom-in entrance

## Issue

Closes #50048
