# CSS Spring Physics Tooltip (Minimalist Tech Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Tooltip featuring a realistic Spring Physics interaction transition. 

## Features
- **Pure CSS**: Fully functional interactivity and complex physics simulations without a single line of JavaScript.
- **Spring Physics Transition**: Instead of a standard `ease` or `cubic-bezier`, this component leverages the modern CSS `linear()` easing function. By feeding it a multi-stop coordinate path, the tooltip exhibits true decaying spring physics (overshooting, retracting, and settling) as it scales and translates into view.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the tooltip from `display: none` to `display: block` upon hover or focus.
- **Tech Aesthetics**: Incorporates modern minimalist UI paradigms (think Vercel, Linear) including sharp borders, grayscale contrast, monospace username tags, and highly refined drop shadows.
- **Fully Customizable**: Timing, spring curves, scale factors, and translation offsets are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can tweak the physics curve and animation speeds via these exposed CSS custom properties:
```css
:root {
  --tooltip-duration: 0.6s;
  /* Complex path simulating a decaying spring bounce */
  --tooltip-spring-easing: linear(
    0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 10.1%, 0.938 12.2%, 1.077 14.7%, 1.121 16.5%,
    1.137 18.2%, 1.13 19.8%, 1.053 23.4%, 1.002 26.2%, 0.963 29.5%, 0.949 32.5%,
    0.95 35.8%, 0.998 42.6%, 1.015 47%, 1.017 52.4%, 0.996 61.2%, 1
  );
  --tooltip-start-translateY: 20px;
  --tooltip-start-scale: 0.5;
  --tooltip-start-opacity: 0;
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **CSS `linear()` easing** (Supported in Chrome 113+, Edge 113+, Firefox 112+, Safari 17.2+)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
