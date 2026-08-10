# Blur-Entrance Carousel (Responsive Dashboard)

A pure CSS animated carousel featuring a smooth, focused blur-entrance transition, styled specifically for data-rich Responsive Dashboard interfaces.

## Features
- **Pure CSS State Engine**: Fully functional state management without JavaScript using standard visually hidden radio inputs.
- **Contextual Blur-Entrance Animation**: Inactive widget cards are gently blurred (`8px`), scaled down slightly, and reduced in opacity. When a widget becomes active, it smoothly scales up, comes into crisp focus, and elevates with a larger drop shadow, simulating a dedicated focus mode for reviewing data metrics.
- **Dashboard Aesthetics**: Incorporates clean, data-driven design patterns: crisp typography (`Inter`), semantic badge colors (success, warning, neutral), and pure CSS structural charts (bar, line, and progress) to realistically simulate dashboard widgets.
- **Responsive & Accessible**: Adapts seamlessly to different screen sizes. Keyboard friendly with native focus management; use `Tab` to navigate controls and `Arrow Keys` (Left/Right) to swipe between widgets.

## Customization
Tweak the blur intensity, scale factors, and transition timing globally by modifying the CSS variables exposed in `:root`:

```css
:root {
    --crsl-duration: 0.6s;
    --crsl-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
    
    /* Softer blur suitable for dashboards */
    --crsl-blur-inactive: 8px; 
    --crsl-scale-inactive: 0.92;
}
```
