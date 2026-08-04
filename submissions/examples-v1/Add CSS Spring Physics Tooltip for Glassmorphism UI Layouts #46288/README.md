# CSS Spring Physics Tooltip (Glassmorphism Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Tooltip featuring a realistic Spring Physics interaction transition. 

## Features
- **Pure CSS**: Fully functional interactivity and complex physics simulations without a single line of JavaScript.
- **Spring Physics Transition**: Instead of a standard `ease` or `cubic-bezier`, this component leverages the modern CSS `linear()` easing function. By feeding it a multi-stop coordinate path, the tooltip exhibits true decaying spring physics (overshooting, retracting, and settling) as it scales and translates into view.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the tooltip from `display: none` to `display: block` upon hover or focus.
- **Glassmorphism Aesthetics**: Incorporates translucent backgrounds, heavy background blurs (`backdrop-filter`), thin semi-transparent white borders, and vibrant underlying abstract gradients to achieve a premium frosted glass effect.
- **Fully Customizable**: Timing, spring curves, scale factors, and translation offsets are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can tweak the physics curve and animation speeds via these exposed CSS custom properties:
```css
:root {
  --tooltip-duration: 0.7s;
  /* Complex path simulating a decaying spring bounce */
  --tooltip-spring-easing: linear(
    0, 0.006, 0.025 2.8%, 0.101 6.1%, 0.539 14.2%, 0.725 17.4%, 0.865 21.2%, 0.932 24%,
    0.985 27.5%, 1.011 30.2%, 1.037 34.2%, 1.042 36.6%, 1.043 39.4%, 1.037 42.6%, 1.026 46.1%,
    0.99 53.6%, 0.981 57.6%, 0.983 62.4%, 1.002 73.1%, 1.003 79.1%, 1
  );
  --tooltip-start-translateY: 25px;
  --tooltip-start-scale: 0.6;
  --tooltip-start-opacity: 0;
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **CSS `linear()` easing** (Supported in Chrome 113+, Edge 113+, Firefox 112+, Safari 17.2+)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS `backdrop-filter`** (Widely supported modern baseline)
