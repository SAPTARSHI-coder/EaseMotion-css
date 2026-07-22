# Aurora Theme Crossfade 🌗

A smooth CSS-only dark/light theme transition demo that uses CSS custom properties to morph background, surface, and text tokens with a soft logo crossfade effect.

## What does this do?

Aurora Theme Crossfade demonstrates a modern dark/light theme system where UI colors smoothly transition instead of switching instantly.

It includes:

- CSS variable based theme tokens
- Smooth background, surface, and text morphing
- Soft sun/moon logo crossfade
- Glassmorphism UI surfaces
- Responsive layout
- Reduced motion support for accessibility

## How is it used?

The demo uses CSS custom properties for theme values.

Example:

```css
:root {
  --bg: #ffffff;
  --surface: #f8fafc;
  --text: #111827;
}

.dark {
  --bg: #020617;
  --surface: #111827;
  --text: #f8fafc;
}
```

Why is it useful?

This approach allows developers to create smooth theme transitions without rewriting component styles.

Using CSS tokens makes themes easier to maintain, customize, and scale while keeping the UI consistent with EaseMotion's animation philosophy.

Features
🌞 Light and dark theme toggle
🎨 Token-based color morphing
✨ Smooth crossfade transitions
🪟 Glass UI preview surfaces
📱 Responsive design
♿ prefers-reduced-motion support
