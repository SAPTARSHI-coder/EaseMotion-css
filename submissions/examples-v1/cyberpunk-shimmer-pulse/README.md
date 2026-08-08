# Cyberpunk Shimmer Pulse Animation

A zero-JavaScript Cyberpunk Neon layout animation built entirely with CSS. This example combines a smooth shimmer sweep with a subtle pulse effect to create a futuristic interface suitable for dashboards, authentication panels, status cards, and control center layouts.

## Features

- **Pure CSS Animation:** Zero JavaScript or runtime dependencies for smooth, lightweight performance.
- **Cyberpunk Neon Styling:** Multi-layer neon glow with animated shimmer effects inspired by futuristic UI design.
- **Responsive Layout:** Automatically adapts across desktop, tablet, and mobile screen sizes.
- **CSS Variable Architecture:** Easily customize colors, animation durations, border radius, and glow intensity using CSS custom properties.
- **Accessibility Ready:** Supports the `prefers-reduced-motion` media query to reduce motion for users who prefer minimal animations.

## Customization

The animation can be customized through the variables defined inside `:root`.

```css
:root {
  --cyber-accent: #ff0055;
  --cyber-secondary: #00ffcc;
  --pulse-duration: 3s;
  --shimmer-duration: 2.2s;
  --radius: 18px;
}
```

## Project Structure

```text
cyberpunk-shimmer-pulse/
├── demo.html      # Standalone demo
├── style.css       # Cyberpunk shimmer pulse animation
└── README.md       # Documentation
```

## Browser Support

Works in all modern evergreen browsers supporting:

- CSS Custom Properties
- CSS Keyframe Animations
- Flexbox
- Linear Gradients
- `prefers-reduced-motion`

## Highlights

- Zero JavaScript
- Pure CSS implementation
- Responsive by default
- Accessible motion preferences
- Easy to customize using CSS variables
- Designed for Cyberpunk Neon interface layouts