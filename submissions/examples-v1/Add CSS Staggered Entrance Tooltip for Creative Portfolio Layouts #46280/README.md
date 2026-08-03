# CSS Staggered Entrance Tooltip (Creative Portfolio Aesthetics)

This example demonstrates how to create a rich, purely CSS-animated Tooltip featuring a Staggered Entrance interaction transition. 

## Features
- **Pure CSS**: Fully functional interactivity and rich staggered animations without JavaScript.
- **Staggered Entrance**: Leveraging child selectors and `transition-delay`, the internal elements of the tooltip (title, tags) cascade into view one after another, creating a sophisticated and premium feel.
- **Modern CSS APIs**: Uses `allow-discrete` and `@starting-style` to gracefully animate the tooltip from `display: none` to `display: flex` upon hover or focus.
- **Creative Portfolio Aesthetics**: Incorporates brutalist/creative design paradigms, including high-contrast dark modes, monospace tech tags, neon accents (`#ccff00`), and bold uppercase typography (`Space Grotesk`).
- **Fully Customizable**: Timing, easing curves, stagger delays, and translation offsets are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can tweak the stagger delays and animation speeds via these exposed CSS custom properties:
```css
:root {
  --tooltip-duration: 0.3s;
  --tooltip-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --stagger-offset-y: 8px;
  
  --stagger-delay-1: 0.05s;
  --stagger-delay-2: 0.1s;
  --stagger-delay-3: 0.15s;
  --stagger-delay-4: 0.2s;
}
```

## Browser Support
This demo uses modern CSS features. For the full experience, it relies on:
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
