# Pulse Glow Effect Utilities

Pulsing glow animations for status indicators, notifications, and attention-grabbing UI elements. Creates rhythmic, eye-catching animations using box-shadow and scale transforms.

## Features

- **Pulsing dots**: 5 size variants (xs to xl), all colors
- **Glow badges**: pill-shaped badges with pulsing box-shadow
- **Online indicators**: dot + expanding ring animation
- **Glow card**: card with pulsing gradient border via pseudo-element
- **Icon glow**: circular icon container with pulse animation
- **Notification badge**: count badge with expanding ring pulse
- **Glowing button**: button with pulsing shadow
- **Glow spinner**: loading spinner with glow aura
- **Color variants**: primary, secondary, success, danger, warning, info
- **Reduced motion** support

## Usage

```html
<!-- Pulsing dot -->
<span class="pulse-dot"></span>

<!-- Pulsing badge -->
<span class="pulse-glow pulse-glow--success">Online</span>

<!-- Online indicator -->
<div class="pulse-indicator">
  <div class="pulse-indicator__dot"></div>
  <div class="pulse-indicator__ring"></div>
</div>
```

## Files

- `style.css` — all pulse glow utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
