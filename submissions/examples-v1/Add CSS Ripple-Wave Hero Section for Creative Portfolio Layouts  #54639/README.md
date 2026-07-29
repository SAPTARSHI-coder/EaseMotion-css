# CSS Ripple-Wave Hero Section for Creative Portfolio Layouts

A striking, modern hero section for creative portfolios, featuring a continuous "Ripple-Wave" background animation powered purely by CSS. 

## Features

- **Pure CSS / HTML**: Relies entirely on `@keyframes` for the ripple effect, eliminating the need for JavaScript or canvas elements.
- **Ripple-Wave Animation**: Uses staggered animation delays and concentric scaling with opacity fades to create a smooth, pulsing wave effect outward from the center of the viewport.
- **Glassmorphism Integration**: The central content box utilizes `backdrop-filter: blur()` to softly blur the passing ripples underneath, enhancing depth and focus.
- **Responsive & Dynamic**: Uses CSS clamps (`clamp()`) for fluid typography that scales beautifully from mobile devices to ultrawide monitors.
- **Accessible (Prefers-Reduced-Motion)**: Automatically suppresses the infinite ripple animations for users who have requested reduced motion in their operating system settings.

## Customization

The scale, speed, and color of the ripple effect can be customized via the CSS custom properties located in `:root` inside `style.css`:

```css
:root {
  /* Ripple and Accent Colors */
  --accent-primary: #06b6d4; /* Cyan */
  --accent-secondary: #3b82f6; /* Blue */
  --ripple-color: rgba(6, 182, 212, 0.4);
  --ripple-glow: rgba(59, 130, 246, 0.3);
  
  /* Ripple Animation Parameters */
  --ripple-base-size: 300px;
  --ripple-duration: 6s;
  --ripple-scale-start: 0.2;
  --ripple-scale-end: 3.5;
}
```

## How to use

1. Open `demo.html` in your web browser.
2. Watch the subtle, infinite pulse effect occurring in the background. Note how it interacts with the frosted glass content container!
