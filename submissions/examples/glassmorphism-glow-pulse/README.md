# Glow Pulse Animation - Glassmorphism (Pure CSS)

A pure CSS animated Glow Pulse tailored for modern Glassmorphism interfaces. Instead of a harsh digital flash, this utilizes a soft, ethereal `box-shadow` breathing effect that perfectly complements frosted glass elements (`backdrop-filter`) and translucent borders.

## Features
- 🪞 **Glassmorphic Aesthetic**: Pre-configured with heavily translucent backgrounds, inset white highlights, and a vibrant background mesh to demonstrate the `blur()` filter.
- 🌟 **Ethereal Pulse**: Uses an `ease-in-out` keyframe to create a slow, expanding, and fading aura around primary UI elements.
- ♿ **Accessibility First**: Includes native support for the `@media (prefers-reduced-motion: reduce)` query. For users with vestibular disorders, the continuous background drift and the breathing pulse are disabled, falling back to a static, elegant glow.
- ⚡ **Zero JavaScript**: Completely driven by CSS `@keyframes`.

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-timing` | `3s` | Slower duration for a calm, breathing glow effect. |
| `--glow-color` | `rgba(216, 180, 254, 0.4)` | The core color of the aura (defaults to a soft purple). |
| `--glass-bg` | `rgba(255...0.08)` | The semi-transparent background color of the UI elements. |

## Usage
Drop the HTML structure into your project and link the stylesheet. Ensure that your application has a background (images, gradients, or colorful shapes) behind these components, otherwise, the `backdrop-filter: blur()` effect will not be visible!