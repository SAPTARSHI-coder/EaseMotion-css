# CSS Scale-Hover Badge for Fintech Dashboard Layouts

## Description
Fixes #59330 — a lightweight, pure CSS badge component designed for fintech
dashboard UIs (status indicators, percentage changes, stat pills), with a
smooth scale-up interaction on hover and keyboard focus.

## Usage
```html
<span class="ease-badge ease-badge--live" tabindex="0">
  <span class="ease-badge__dot"></span> Live
</span>

<span class="ease-badge ease-badge--positive" tabindex="0">+2.4%</span>
<span class="ease-badge ease-badge--negative" tabindex="0">-0.8%</span>
<span class="ease-badge ease-badge--pending" tabindex="0">
  <span class="ease-badge__dot"></span> Pending
</span>
<span class="ease-badge ease-badge--neutral" tabindex="0">$12.4K</span>
```

Group multiple badges with `.ease-badge-group` for consistent spacing:
```html
<div class="ease-badge-group">
  <!-- badges here -->
</div>
```

## Variants
| Class | Use case |
|---|---|
| `.ease-badge--live` | Active/live status, green |
| `.ease-badge--pending` | Pending/in-progress status, amber |
| `.ease-badge--positive` | Positive stat change (e.g. gains), blue |
| `.ease-badge--negative` | Negative stat change (e.g. losses), red |
| `.ease-badge--neutral` | Neutral value display (e.g. balances), gray |

## Custom Properties
Uses `--ease-color-primary` (falls back to `#2563eb`) for the keyboard focus
outline color, matching the framework's existing custom property convention.

## Features
- Pure CSS/HTML — no JavaScript required
- Smooth spring-like scale transform (`cubic-bezier(0.34, 1.56, 0.64, 1)`) on hover and `:focus-visible`
- Fully keyboard accessible (`tabindex="0"` + visible focus ring)
- Responsive — badges shrink slightly below 480px viewports
- Dark mode support via `prefers-color-scheme: dark`
- Respects `prefers-reduced-motion: reduce` — disables the scale transform, keeps a subtle shadow-only affordance instead

## Testing
Open `demo.html` in a browser. Hover or Tab through each badge to see the
scale interaction, resize the window to check responsive behavior, and
toggle your OS "reduce motion" setting to verify the fallback.