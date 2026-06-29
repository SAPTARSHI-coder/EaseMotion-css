# Animated Notification Badge (.ease-badge)

A pure CSS, animation-focused notification badge component featuring a pulsing "ping" indicator. Perfect for avatars, icons, and live activity statuses.

## Features
- **Pure CSS**: Zero JavaScript dependencies.
- **Pulsing Animation**: Smooth scale + opacity "ping" effect.
- **Variants**: Supports both small dots (`.ease-badge--dot`) and numeric counts (`.ease-badge--count`).
- **Positioning**: Built-in utilities for top-right corner placement.
- **Customizable**: Control colors, sizes, and speeds via CSS variables.

## Usage

### Basic Pulsing Dot
```html
<div class="ease-badge-wrapper">
  <div class="icon">🔔</div>
  <span class="ease-badge ease-badge--dot ease-badge--ping ease-badge--top-right"></span>
</div>
```

### Notification Count
```html
<div class="ease-badge-wrapper">
  <button class="ease-btn">Messages</button>
  <span class="ease-badge ease-badge--count ease-badge--top-right">5</span>
</div>
```

## CSS Variables
| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-badge-color` | `var(--ease-color-danger)` | Background color of the badge |
| `--ease-badge-size` | `0.5rem` | Size of the dot variant |
| `--ease-badge-ping-speed` | `1.5s` | Duration of the pulsing animation |

## Classes
- `.ease-badge`: Base badge class.
- `.ease-badge--dot`: Dot variant.
- `.ease-badge--count`: Count variant with padding and font-size.
- `.ease-badge--ping`: Adds the pulsing animation.
- `.ease-badge--top-right`: Positions the badge at the top-right of a `.ease-badge-wrapper`.
- `.ease-badge--success`, `--warning`, `--primary`, `--info`: Color variants.
