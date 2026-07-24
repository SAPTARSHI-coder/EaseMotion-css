# Gradient Text Animation Utilities

Animated gradient fills, shimmer sweeps, and flowing color text for eye-catching headlines and callouts. Uses CSS `background-clip: text` with animated `background-position`.

## Features

- **8 gradient variants**: primary, secondary, sunset, neon, ocean, fire, violet-pink, default
- **Animated flowing**: background-position shifts 0% → 100% → 0%
- **Shimmer effect**: metallic sweep highlight animation
- **Glow pulse**: text shadow with opacity pulse
- **Size modifiers**: xs, sm, lg, xl, 2xl, 3xl
- **Bold weight** variant
- **Underline accent** variant
- **Outline stroke** variant (webkit)
- **Dark mode** shimmer adjustment
- **Reduced motion** support

## Usage

```html
<!-- Basic gradient text -->
<span class="gradient-text gradient-text--primary">Primary</span>

<!-- Animated flowing gradient -->
<span class="gradient-text gradient-text--animated gradient-text--primary gradient-text--bold">
  Animated Text
</span>

<!-- Shimmer metallic -->
<span class="gradient-text gradient-text--shimmer">Metallic Shimmer</span>
```

## Files

- `style.css` — all gradient text utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
