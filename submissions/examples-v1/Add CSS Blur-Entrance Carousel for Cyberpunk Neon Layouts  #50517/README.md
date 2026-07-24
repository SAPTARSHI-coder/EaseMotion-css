# Blur-Entrance Carousel (Cyberpunk Neon)

A pure CSS animated carousel featuring a dramatic blur-entrance transition, styled for high-tech, aggressive Cyberpunk Neon interfaces.

## Features
- **Pure CSS State Engine**: Fully functional interaction and state management without JavaScript using standard visually hidden radio inputs.
- **Blur-Entrance Animation**: Inactive slides are heavily blurred, desaturated (grayscale), scaled down, and pushed backwards into the Z-axis using CSS `perspective`. When selected, they aggressively snap into focus, regaining full color and glowing intensely.
- **Cyberpunk Aesthetics**: Incorporates signature cyberpunk design patterns: 
  - Neon colors (`#00ffff` Cyan, `#ff00ff` Magenta, `#fcee0a` Yellow)
  - Clipped sci-fi corners using `clip-path: polygon()`
  - Scanlines and an animated 3D grid floor
  - Chromatic aberration text-shadows
  - High-contrast typography (`Rajdhani` and `Share Tech Mono`)
- **Accessible Navigation**: Keyboard friendly with native focus management. Use `Tab` to reach the controls and `Arrow Keys` (Left/Right) to navigate the slides.

## Customization
Tweak the blur intensity, scale factors, and transition timing globally by modifying the CSS variables exposed in `:root`:

```css
:root {
    --crsl-duration: 0.8s;
    --crsl-easing: cubic-bezier(0.19, 1, 0.22, 1);
    
    --crsl-blur-inactive: 24px;
    --crsl-scale-inactive: 0.85;
}
```
