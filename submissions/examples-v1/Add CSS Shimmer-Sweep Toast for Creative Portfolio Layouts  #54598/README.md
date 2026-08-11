# CSS Shimmer-Sweep Toast for Creative Portfolio Layouts

A sleek, lightweight, pure CSS/HTML toast notification featuring a smooth slide-in entrance and a continuous shimmer sweep effect. Ideal for creative portfolios, modern dashboards, and applications that demand high-quality micro-interactions.

## Features

- **Pure CSS Animations**: Uses CSS `@keyframes` for a smooth slide entrance and an infinite shimmer effect via a pseudo-element (`::before`), with zero external JavaScript animation libraries required.
- **Premium Aesthetics**: Features a dark mode theme with elegant typography, subtle borders, and a beautiful shimmer effect that passes over the toast.
- **Responsive Layout**: Designed to adapt perfectly to desktop, tablet, and mobile screens.
- **Accessibility Friendly**: Includes `prefers-reduced-motion` queries to replace sliding animations with simple fades and disable the continuous shimmer for users who prefer minimal motion.

## File Structure

- `demo.html`: The HTML structure demonstrating the toast behavior within a sample portfolio context. Small inline JS is only used to toggle CSS classes for showing/hiding.
- `style.css`: Contains the CSS variables, layout, styling, and the custom `@keyframes` used to animate the toast and shimmer effect.
- `README.md`: This documentation file.

## Usage

1. **HTML Integration**: 
   Copy the `.toast-container` block into your markup.
   ```html
   <div id="toast-container" class="toast-container">
     <div class="toast shimmer-sweep-toast">
       <!-- Toast Content -->
     </div>
   </div>
   ```

2. **CSS Integration**:
   Import the `style.css` classes into your stylesheet. The shimmer effect is achieved using the `::before` pseudo-element on the `.toast` class.

## Custom Properties (CSS Variables)

The design can be customized using CSS variables located in the `:root` selector:

```css
:root {
  /* Colors */
  --em-bg-primary: #0f172a;
  --em-toast-bg: #1e293b;
  --em-accent: #8b5cf6;
  
  /* Layout & Shadows */
  --em-toast-radius: 12px;
  --em-toast-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  
  /* Animations */
  --em-transition-speed: 0.5s;
}
```

## How It Works

- **Entrance Animation (`toastSlideIn`)**: A smooth slide-in animation from the right side of the screen using a `cubic-bezier` function for a natural ease-out feel.
- **Shimmer Sweep (`shimmerSweep`)**: An infinite keyframe animation applied to a pseudo-element that features a linear gradient. It translates from left to right across the toast, creating a glossy sheen effect.
- **State Management**: JavaScript is only used to toggle the `.show` and `.hide` classes on the parent container.
