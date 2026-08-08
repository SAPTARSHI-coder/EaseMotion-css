# E-Commerce Checkout Slide-Up Tabs

Pure CSS tab component with slide-up animation, designed for e-commerce checkout flows.

## What it is

A CSS-only tab component using radio buttons for state management. Tab panels slide up smoothly when switching between checkout steps. No JavaScript is required.

## How it works

The tab component uses CSS `:checked` pseudo-class on hidden radio buttons to control which panel is visible. The `general sibling combinator` (`~`) selects the corresponding panel.

```css
/* Only show panel matching checked radio */
.tabs__radio:nth-of-type(1):checked ~ .tabs__panels .tabs__panel:nth-child(1) {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Slide-up animation */
.tabs__panel {
    animation: ease-kf-slide-up-panel 0.35s ease-out forwards;
}
```

Key techniques:
- Hidden `<input type="radio">` controls state — fully keyboard accessible
- `ease-kf-slide-up-panel` keyframe for smooth panel slide-up entrance
- Configurable `--ez-tab-slide-distance` for travel distance
- `role="tabpanel"` for screen reader semantics
- CSS custom properties for all colors and timing

## Why it matters

E-commerce checkout flows need tab components that feel smooth and trustworthy. The slide-up transition provides a polished, professional feel that guides users through the purchase process — all in pure CSS.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Full checkout demo with shipping, payment, and review steps |
| `style.css` | Tab styles, form styles, and slide-up animations |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--ez-tab-duration` | `0.35s` | Slide-up animation duration |
| `--ez-tab-slide-distance` | `20px` | Slide travel distance |
| `--ez-tab-accent` | `#6366f1` | Active tab accent color |
| `--ez-tab-bg` | `#ffffff` | Background color |
| `--ez-tab-color` | `#1e293b` | Text color |
| `--ez-tab-border` | `#e2e8f0` | Border color |

## Keyframes

- `ease-kf-slide-up-panel` — translateY + opacity slide-up entrance

## Issue

Closes #50028