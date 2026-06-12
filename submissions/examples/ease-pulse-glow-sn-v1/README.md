# Ease Pulse Glow Sn

## What does this do?

A set of CSS animation utility classes for pulse (gentle scale) and glow (shadow pulsing) effects that create subtle attention-grabbing animations for important UI elements.

## How is it used?

```html
<!-- Pulse animation (gently scales 1 to 1.05) -->
<div class="animate-pulse">Live indicator</div>

<!-- Glow animation (shadow pulsing effect) -->
<button class="animate-glow glow-primary">Get Started</button>

<!-- Hover pulse -->
<button class="hover-pulse">Hover me</button>

<!-- Hover glow -->
<input class="hover-glow glow-primary" placeholder="Email" />

<!-- Custom intensity -->
<div class="animate-pulse" style="--pulse-intensity: 0.1">Stronger pulse</div>

<!-- Custom glow color -->
<div class="animate-glow" style="--glow-color: rgba(255, 165, 0, 0.5)">
  Orange glow
</div>

<!-- Speed variants -->
<div class="animate-pulse-fast">Fast pulse</div>
<div class="animate-pulse-slow">Slow pulse (4s)</div>

<!-- Glow color presets -->
<div class="animate-glow glow-success">Green glow</div>
<div class="animate-glow glow-danger">Red glow</div>
<div class="animate-glow glow-warning">Yellow glow</div>
<div class="animate-glow glow-info">Blue glow</div>
```

## Why is it useful?

Pulse and glow effects are essential for drawing user attention to key interface elements. Pulse is ideal for live indicators, recording dots, active states, and notification badges. Glow is perfect for call-to-action buttons, active form fields, and featured content highlights. Both use performant CSS properties (transform and box-shadow) with no JavaScript overhead, and fully respect `prefers-reduced-motion`.
