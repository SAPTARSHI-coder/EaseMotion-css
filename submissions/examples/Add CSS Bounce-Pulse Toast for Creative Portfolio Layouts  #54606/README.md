# CSS Bounce-Pulse Toast for Creative Portfolio Layouts

A modern, lightweight, pure CSS/HTML toast notification featuring a vibrant "bounce" entrance animation combined with a continuous "pulse" glow effect. Ideal for creative portfolios, SaaS dashboards, and Web3 applications where micro-interactions enhance the premium feel.

## Features

- **Pure CSS Animations**: Utilizes CSS `@keyframes` for a smooth entrance bounce and an infinite glowing pulse, with zero external JavaScript animation libraries required.
- **Glassmorphism Design**: Incorporates `backdrop-filter: blur()` for a sleek, modern UI aesthetic.
- **Responsive Layout**: Adapts flawlessly to desktop, tablet, and mobile screens.
- **Accessibility Friendly**: Includes `prefers-reduced-motion` queries to replace complex animations with simple fades for users who prefer minimal motion.

## File Structure

- `demo.html`: The HTML structure demonstrating the toast behavior within a sample portfolio context. Small inline JS is only used to toggle CSS classes for showing/hiding.
- `style.css`: Contains the CSS variables, layout, styling, and the custom `@keyframes` used to animate the toast.
- `README.md`: This documentation file.

## Usage

1. **HTML Integration**: 
   Copy the `.toast-container` block into your markup, typically just inside the `<body>` tag.
   ```html
   <div id="toast-container" class="toast-container">
     <div class="toast bounce-pulse-toast">
       <!-- Toast Content -->
     </div>
   </div>
   ```

2. **CSS Integration**:
   Import the `style.css` classes into your stylesheet. You can easily adjust the CSS variables to match your brand's color palette.

## Custom Properties (CSS Variables)

The design is heavily customizable using CSS variables located in the `:root` selector:

```css
:root {
  /* Colors */
  --em-bg-primary: #0f172a;
  --em-toast-bg: rgba(30, 41, 59, 0.85);
  --em-accent: #3b82f6;
  
  /* Layout & Shadows */
  --em-toast-radius: 16px;
  --em-toast-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  
  /* Animations */
  --em-transition-speed: 0.4s;
}
```

## How It Works

- **Entrance Animation (`toastEntrance`)**: Uses a `cubic-bezier` timing function to overshoot its final position, creating a "bouncing" or "spring" effect as it fades in.
- **Pulse Animation (`toastPulse`)**: An infinite looping keyframe that expands and fades a `box-shadow`, mimicking a gentle glowing pulse to draw the user's attention.
- **State Management**: JavaScript is only used to toggle the `.show` and `.hide` classes on the parent container, which triggers the corresponding CSS animations.
