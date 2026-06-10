# Ease Rotate Sn

## What does this do?
A CSS-only rotation animation utility with spin (360-degree continuous), swing (pendulum oscillation), and hover-rotate effects — all with configurable speed and angle via CSS custom properties.

## How is it used?

```html
<!-- Continuous 360-degree spin -->
<div class="animate-spin">Spinning element</div>

<!-- Pendulum swing -->
<div class="animate-swing">Swinging element</div>

<!-- Hover rotation -->
<div class="hover-rotate">Rotates 45deg on hover</div>
<div class="hover-rotate-full">Full 360deg rotation on hover</div>
```

Speed modifier classes:
- `.spin-fast` — sets `--spin-speed: 0.4s`
- `.spin-slow` — sets `--spin-speed: 2s`
- `.spin-slower` — sets `--spin-speed: 4s`

Swing modifier classes:
- `.swing-wide` — sets `--swing-angle: 30deg`
- `.swing-narrow` — sets `--swing-angle: 8deg`
- `.swing-slow` / `.swing-fast` — duration variants

Customize via CSS custom properties:
- `--spin-speed` — controls rotation duration (default: `1s`)
- `--swing-angle` — controls swing arc (default: `15deg`)
- `--hover-rotate-angle` — controls hover rotation (default: `45deg`)

## Why is it useful?
Rotation animations are essential for loading spinners, interactive icons, notification bells, settings gear icons, and decorative UI elements. This implementation uses GPU-accelerated CSS transforms for optimal performance, is zero-dependency CSS-only, and respects `prefers-reduced-motion`.