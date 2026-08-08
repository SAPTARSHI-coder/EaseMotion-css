# CSS Floating Orbit Tooltip (Dashboard Analytics Aesthetics)

This example demonstrates how to create a rich, purely CSS-animated Tooltip featuring a smooth Floating Orbit interaction transition, tailored for Dashboard Analytics interfaces.

## Features
- **Pure CSS**: Fully functional interactivity and rich organic orbital animations without JavaScript.
- **Floating Orbit**: When triggered, the tooltip enters with a smooth scaling transition and smoothly begins a continuous, gentle floating orbit animation, drawing attention without being distracting.
- **Dashboard Aesthetics**: Clean lines, monospace data fonts, neon accents (cyan/blue), and semi-transparent dark panels typical of modern data dashboards. Uses `backdrop-filter` for premium glassmorphism.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the tooltip container.
- **Accessibility**: Uses `aria-describedby` and keyboard focus states to ensure the tooltip is accessible to keyboard users.
- **Fully Customizable**: Orbit radius, speed, easing, and scale factors are exposed via CSS Custom Properties.

## Custom Properties Configuration
You can easily tweak the orbital movement and entrance animations via these exposed variables in `style.css`:
```css
:root {
  --orbit-duration: 4s;
  --orbit-radius: 4px;
  --tooltip-transition-speed: 0.4s;
  --tooltip-scale-start: 0.9;
  --tooltip-easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **Independent Transform Properties (`translate`)** (Broadly supported in modern browsers)
