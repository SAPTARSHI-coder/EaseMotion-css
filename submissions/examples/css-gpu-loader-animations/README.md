# CSS Hardware-Accelerated GPU Loader Animations

A collection of 60fps, high-performance loader animations built with pure HTML5 and CSS3. Designed strictly using layout-free composite properties (`transform`, `opacity`, `will-change`) to eliminate browser repaints and reflows.

## Overview

Traditional loader animations frequently animate layout properties such as `width`, `height`, `top`, or `margin`, forcing the browser engine to execute continuous layout calculation and paint passes. These GPU-accelerated loaders utilize hardware compositing layers (`transform: scale()`, `rotate3d()`, `opacity`) to deliver 60fps performance on the GPU with zero repaint overhead.

## Features

- **Pure HTML5 & CSS3**: Zero JavaScript execution.
- **GPU Accelerated**: Strictly uses composite-only properties (`transform`, `opacity`).
- **Zero Repaints**: Eliminates browser layout reflows during animation loops.
- **Hardware Hints**: Utilizes `will-change: transform, opacity` to promote elements to dedicated GPU layers.
- **ARIA Status Attributes**: Accessible `role="status"` and `aria-label` markup.
- **Prefers-Reduced-Motion**: Pauses physics animations for motion-sensitive users.

## Folder Structure

```
css-gpu-loader-animations/
├── demo.html    # Showcase markup with 4 loader variants
├── style.css    # GPU keyframes, variables & composite styling
└── README.md    # Component documentation
```

## Usage

Include `style.css` in your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

## HTML Example

```html
<!-- Orbital Pulse Loader -->
<div class="loader-preview" role="status" aria-label="Loading content">
  <div class="loader-orbital">
    <span class="orbit-ring"></span>
    <span class="orbit-core"></span>
  </div>
</div>
```

## CSS Variables

Customizable design tokens defined in `:root`:

```css
:root {
  --bg-main: #0b0f19;
  --bg-card: #151d30;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-subtle: #2d3748;

  --accent-cyan: #38bdf8;
  --accent-indigo: #6366f1;
  --accent-emerald: #10b981;
  --accent-pink: #ec4899;

  --radius-lg: 16px;
}
```

## Customization

You can change loader colors or animation speeds by targeting keyframe properties:

```css
.orbit-ring {
  border-top-color: #f59e0b; /* Customize ring color */
  animation-duration: 0.8s;  /* Faster GPU spin */
}
```

## Accessibility

- **ARIA Semantics**: `role="status"` and descriptive `aria-label` announce loading state to screen readers.
- **Motion Safety**: Full support for `@media (prefers-reduced-motion: reduce)`.
- **WCAG AA Compliance**: High-contrast dark mode palette.

## Responsive Behaviour

- **Desktop (768px+)**: Responsive 4-column loader preview grid.
- **Mobile (<540px)**: Single-column grid for mobile viewports.

## Browser Compatibility

- Chrome / Edge 80+
- Firefox 75+
- Safari 14+
- iOS Safari / Android Chrome
