# Magnetic Pull Tooltip — SaaS Showcase

A clean, solid-card tooltip built for SaaS product showcase layouts. It snaps
into place with a magnetic pull motion — a slight overshoot past its resting
position — when its trigger button is hovered or focused.

## What it does

- Single `@keyframes` animation (`ease-magnet-saas-pull`), no JavaScript
- Tooltip starts below and slightly scaled down, "pulls" upward with a small
  overshoot, then settles into place
- Solid white card styling with a colored top accent border and soft drop
  shadow — designed to read as a SaaS product UI element, distinct from the
  dark/neumorphic/glass treatments used in other Magnetic Pull submissions
  in this repo

## How to use it

```html
<div class="magnet-tooltip-saas">
  <button class="magnet-tooltip-saas__trigger">Notifications</button>
  <div class="magnet-tooltip-saas__bubble">
    <span class="magnet-tooltip-saas__title">Stay in the loop</span>
    <span class="magnet-tooltip-saas__body">
      Get alerts when a teammate mentions you or shares a file.
    </span>
  </div>
</div>
```

Just drop the markup in and hover (or Tab to focus) the trigger button.

## Customization

Tunable via CSS custom properties on `:root` or scoped to a component:

| Property | Default | Description |
|---|---|---|
| `--ease-magnet-saas-duration` | `500ms` | Animation duration |
| `--ease-magnet-saas-curve` | `cubic-bezier(0.3, 1.4, 0.6, 1)` | Easing curve (drives the overshoot) |
| `--ease-magnet-saas-scale` | `1` | Final resting scale of the tooltip |
| `--ease-magnet-saas-pull-distance` | `24px` | Starting vertical offset before the pull |

## Accessibility

- Triggers via `:hover` **and** `:focus-visible`, so keyboard users see the
  tooltip too
- Respects `prefers-reduced-motion`: animation is skipped and the tooltip
  simply appears in its resting state
- Responsive down to mobile widths (bubble width adjusts at 480px)

## Why it fits EaseMotion CSS

Readable, single-purpose CSS animation with no dependencies, exposed
customization points, and accessibility built in — in line with the
library's animation-first philosophy.