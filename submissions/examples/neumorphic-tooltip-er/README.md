# Neumorphic Soft Tooltip

A pure-CSS animated tooltip with a soft zoom-out reveal transition, styled with neumorphic soft shadows for modern soft interfaces. **No JavaScript required** — tooltip visibility is handled entirely via `:hover` and `:focus-visible` pseudo-classes.

## What does this do?

Provides a neumorphic settings/control card component with tooltips that appear on hover or keyboard focus using a zoom-out animation (scaling from 0.6 to 1). Tooltips feature soft extruded shadows, muted tones, and a convex-to-concave interaction effect on the trigger elements.

## How is it used?

```html
<div class="neu-item" tabindex="0">
  <div class="neu-item__icon neu-item__icon--convex">
    <span aria-hidden="true">&#9881;</span>
  </div>
  <span class="neu-item__label">Settings</span>
  <div class="neu-tooltip" role="tooltip">
    <span class="neu-tooltip__title">Preferences</span>
    <span class="neu-tooltip__desc">Customize theme, notifications, and accessibility options.</span>
    <span class="neu-tooltip__notch"></span>
  </div>
</div>
```

Add `tabindex="0"` to make the card keyboard-focusable. The tooltip appears on `:hover` and `:focus-visible` automatically.

## Why is it useful?

Neumorphic interfaces need tooltips that match their soft, extruded aesthetic without harsh borders or high contrast. This soft variant provides a polished, reusable building block with consistent shadow depth that complements neumorphic design systems. It fits EaseMotion CSS's animation-first philosophy by using `ease-kf-neu-tt-*` keyframes and CSS custom properties for theming, while remaining fully accessible and responsive.

## Features

- Pure CSS — zero JavaScript dependencies
- Zoom-out reveal animation (scale from 0.6 to 1) with spring easing
- Soft extruded shadows (convex/concave states) for neumorphic feel
- Convex-to-concave icon transition on hover
- Tooltip notch with matching neumorphic shadow
- Keyboard accessible via `tabindex` + `:focus-visible`
- `prefers-reduced-motion` support — disables animations for accessibility
- Responsive sizing via CSS custom properties
- BEM naming convention with `neu-` prefix
- Muted, pastel color palette typical of neumorphic design

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--neu-tt-duration` | `0.32s` | Base transition duration |
| `--neu-tt-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring easing for zoom-out |
| `--neu-tt-ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Smooth ease-out for opacity |
| `--neu-tt-scale-from` | `0.6` | Tooltip starting scale |
| `--neu-tt-scale-to` | `1` | Tooltip ending scale |
| `--neu-tt-bg` | `#e0e5ec` | Page/surface background |
| `--neu-tt-tooltip-bg` | `#e8edf2` | Tooltip surface background |
| `--neu-tt-shadow-light` | `#ffffff` | Light shadow color |
| `--neu-tt-shadow-dark` | `#a3b1c6` | Dark shadow color |
| `--neu-tt-accent` | `#6c5ce7` | Accent color (purple) |

## Accessibility

- Uses `tabindex="0"` on cards for keyboard focusability
- `:focus-visible` outline on focused cards triggers tooltip
- `role="tooltip"` on tooltip element for screen reader association
- Semantic `<section>`, `<main>`, `<header>`, `<span>` elements
- `prefers-reduced-motion: reduce` collapses all transitions
- Sufficient color contrast on muted neumorphic palette
