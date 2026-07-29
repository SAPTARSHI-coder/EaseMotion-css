# Neon Glow Text Utility

A reusable CSS utility that applies a vibrant, pulsing glowing effect to text elements using optimized text-shadow layers and animations.

## 1. What does this do?

It adds a customizable neon glow effect to text using layered CSS text shadows that pulse smoothly between glow intensities.

## 2. How is it used?

Apply the `.neon-glow` utility class directly to any text element (headings, branding text, or highlighted inline elements):

```html
<h1 class="neon-glow">Neon Glow Text</h1>
```

### Color Variants

By default, the glow color is cyan (`#00e5ff`). You can change the theme color by adding one of the following variant classes:

- **Pink**: `.neon-glow-pink` (`#ff007f`)
- **Green**: `.neon-glow-green` (`#39ff14`)
- **Purple**: `.neon-glow-purple` (`#bd00ff`)
- **Amber**: `.neon-glow-amber` (`#ffaa00`)
- **Blue**: `.neon-glow-blue` (`#2979ff`)

Example with Pink Glow:

```html
<h1 class="neon-glow neon-glow-pink">Pink Neon Light</h1>
```

### Flickering Effect

To simulate a natural neon gas tube flicker, append the `.neon-flicker` class:

```html
<h1 class="neon-glow neon-flicker">Flickering Sign</h1>
```

### Custom Colors

Alternatively, you can customize the glow color directly in CSS or inline HTML by defining the `--neon-color` variable:

```html
<h1 class="neon-glow" style="--neon-color: #ff5722;">Custom Color Neon</h1>
```

## 3. Why is it useful?

This utility aligns with EaseMotion CSS's animation-first philosophy by offering a highly performant, human-readable text animation that works on all modern browsers with single-class styling. It provides responsive and accessible animations (including automatic overrides when users request reduced motion via `prefers-reduced-motion: reduce`) without requiring custom CSS or heavy frameworks.
