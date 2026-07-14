# ease-avatar-status-indicator — Avatar with Status Dot

## What does this do?

A reusable avatar component with an animated status indicator dot. Supports four color-coded statuses — **online** (green), **away** (yellow), **busy** (red), and **offline** (gray) — with a pulse ring animation on active statuses, all driven by a single CSS custom property.

## How is it used?

Open `demo.html` directly in a browser. Link EaseMotion core stylesheets and the component stylesheet:

```html
<link rel="stylesheet" href="../../../core/animations.css">
<link rel="stylesheet" href="style.css">

<!-- Via status class -->
<div class="avatar-status avatar-md status-online">
  <span class="avatar-face" style="--avatar-hue: 160">AK</span>
  <span class="status-dot"></span>
</div>

<!-- Via custom property -->
<div class="avatar-status avatar-md" style="--avatar-status: busy">
  <span class="avatar-face">RJ</span>
  <span class="status-dot"></span>
</div>
```

### Available sizes

| Class | Size |
|---|---|
| `avatar-sm` | 36px |
| `avatar-md` | 48px |
| `avatar-lg` | 64px |
| `avatar-xl` | 80px |

### Status classes / custom property values

| Status | Class | `--avatar-status` | Color | Pulse |
|---|---|---|---|---|
| Online | `status-online` | `online` | Green `#22c55e` | Yes |
| Away | `status-away` | `away` | Yellow `#eab308` | Yes |
| Busy | `status-busy` | `busy` | Red `#ef4444` | Yes |
| Offline | `status-offline` | `offline` | Gray `#9ca3af` | No |

## Component Breakdown

| Element | Role |
|---|---|
| `.avatar-status` | Wrapper — holds size vars and `--avatar-status` custom property |
| `.avatar-face` | Circular avatar with initials; `--avatar-hue` controls gradient |
| `.status-dot` | Positioned indicator dot; color from `--status-dot-color` |
| `.status-dot::before` | Expanding pulse ring on active statuses |

## Why is it useful?

This component demonstrates EaseMotion CSS's philosophy of **composable, property-driven motion**. A single `--avatar-status` custom property controls both dot color and pulse behavior — no JavaScript required for rendering. Combined with EaseMotion entrance utilities (`ease-slide-up`, `ease-card-lift`) and GPU-friendly `transform`/`opacity` animations, it delivers smooth 60fps status indicators suitable for chat apps, team dashboards, and profile UIs.

Closes [#30263](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30263).
