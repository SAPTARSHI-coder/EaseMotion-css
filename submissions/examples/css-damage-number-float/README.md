# CSS Damage Number Float

A pure CSS RPG-style damage number animation that makes numeric values pop into view, float upward, and gradually fade away.

## Features

- Pure HTML and CSS
- No JavaScript required
- RPG-inspired floating damage effect
- Pop and scale entrance
- Upward movement
- Smooth fade-out
- Responsive design
- Reduced-motion support
- CSS custom properties for easy customization

## Usage

Add the animation element:

```html
<span class="damage-number" aria-label="Critical damage: 248">
  -248
</span>
```

Then include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

The `.damage-number` class automatically applies the floating animation.

## Customization

The main colors can be customized through CSS variables:

```css
:root {
  --damage-primary: #ff3b30;
  --damage-secondary: #ffb020;
}
```

The animation duration can also be adjusted:

```css
.damage-number {
  animation-duration: 2.2s;
}
```

## Animation Technique

The animation combines:

- `opacity` for the fade effect
- `transform: translateY()` for upward movement
- `scale()` for the impact/pop effect
- `rotate()` for a subtle game-like motion
- CSS keyframes for the complete animation sequence

## Accessibility

The demo provides an accessible label for the damage value and respects the user's `prefers-reduced-motion` setting.

## Why it fits EaseMotion CSS

This component provides a reusable CSS-only motion pattern commonly used in games, dashboards, statistics interfaces, and interactive UI experiences. It demonstrates how transforms and opacity can create expressive feedback without JavaScript.