# Gradient Text Utility

A set of pure CSS utilities to add beautiful, animated gradient effects to text, as requested in Issue #2704.

## Overview
This implementation provides the missing gradient text effects often seen in modern landing pages. It uses `background-clip: text` along with CSS gradients.

## Available Classes

- `.ease-gradient-text`: The base class. Applies a default purple-to-blue gradient.
- `.ease-gradient-sunset`: Overrides the gradient with a warm orange/pink/purple hue.
- `.ease-gradient-ocean`: Overrides the gradient with a cool cyan/blue/indigo hue.
- `.ease-gradient-forest`: Overrides the gradient with a natural green/teal/emerald hue.
- `.ease-gradient-text-animate`: Applies a continuous, smooth, shifting animation to the gradient position. Respects `prefers-reduced-motion: reduce`.

## Usage
Simply combine the base class with the desired theme and animation modifier:

```html
<!-- Static Sunset -->
<h1 class="ease-gradient-text ease-gradient-sunset">Sunset Glow</h1>

<!-- Animated Ocean -->
<h1 class="ease-gradient-text ease-gradient-ocean ease-gradient-text-animate">Ocean Waves</h1>
```

## Implementation Details
The animation shifts the background position from `0% 50%` to `100% 50%` over 3 seconds. The `background-size` is enlarged to `200% 200%` to create the seamless fluid motion.