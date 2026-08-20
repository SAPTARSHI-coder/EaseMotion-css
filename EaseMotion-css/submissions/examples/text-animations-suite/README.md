# Text Animations Suite — EaseMotion CSS

A collection of 6 pure CSS text animation utilities for titles, hero headers, callouts, and interactive UI elements.

## Features Included

1. **Text Gradient Wave (`.text-gradient-wave`)**: Smooth multi-color animated gradient text background sweep.
2. **Neon Glow Pulse (`.text-glow-pulse`)**: Pulsing cyber neon glow animation with layered text-shadows.
3. **Kinetic Pop & Bounce (`.text-kinetic-pop`)**: High-energy spring scaling and vertical bounce effect.
4. **Cyber RGB Glitch (`.text-cyber-glitch`)**: Chromatic aberration glitch effect using dynamic pseudo-elements.
5. **Metallic Shimmer Sweep (`.text-shimmer-sweep`)**: Premium metallic highlight light-sweep traversing across header text.
6. **Typewriter Cursor (`.text-typewriter-cursor`)**: Typing text effect with realistic blinking block cursor.

## Quick Usage

```html
<!-- Gradient Wave -->
<h1 class="text-gradient-wave">Gradient Header</h1>

<!-- Neon Glow Pulse -->
<h2 class="text-glow-pulse">Pulsing Neon</h2>

<!-- Cyber RGB Glitch -->
<h2 class="text-cyber-glitch" data-text="SYSTEM ERROR">SYSTEM ERROR</h2>

<!-- Typewriter Loop -->
<h2 class="text-typewriter-cursor">Typewriter Animation</h2>
```

## CSS Custom Variables

Each effect can be customized easily via CSS custom properties:

```css
/* Customizing Gradient Wave Speed & Colors */
.text-gradient-wave {
  --gradient-colors: linear-gradient(90deg, #ff416c, #8a2387, #e94057);
  --gradient-speed: 3s;
}

/* Customizing Neon Glow Color */
.text-glow-pulse {
  --glow-color: #10b981;
  --glow-speed: 1.5s;
}
```

## Why it Fits EaseMotion CSS

- **Animation-First**: Enhances typographic visual hierarchy with zero JavaScript overhead.
- **Composable & Lightweight**: Pure CSS animations built with modern CSS properties like `background-clip: text` and CSS custom variables.
- **Zero Dependencies**: Pure HTML + CSS, works directly out of the box in any web browser.

## Browser Support

- Chrome 80+
- Firefox 75+
- Edge 80+
- Safari 13+
