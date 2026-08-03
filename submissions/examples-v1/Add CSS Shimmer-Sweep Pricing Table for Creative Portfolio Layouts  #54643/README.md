# CSS Shimmer-Sweep Pricing Table for Creative Portfolio Layouts

A modern, highly aesthetic, dark-themed pricing table created entirely with pure CSS and HTML. Designed specifically for creative portfolios, agencies, and studios, it features a unique "Shimmer-Sweep" lighting effect powered by CSS keyframe animations.

## Features

- **Pure CSS/HTML**: No JavaScript required for interactivity or animations.
- **Shimmer-Sweep Animation**: Utilizes the `::after` pseudo-element and a carefully configured `linear-gradient` traversing the card using `left` positioning within keyframes. 
- **Creative Dark Theme**: Built around sleek dark backgrounds, subtle glowing borders, and vibrant purple-pink gradients to highlight featured plans.
- **Responsive Layout**: Uses CSS Grid to automatically flow cards vertically on mobile displays and optimally horizontally on larger screens.
- **Accessibility / Prefers-Reduced-Motion**: Fully honors `@media (prefers-reduced-motion: reduce)`, automatically disabling the shimmer effect and bounding box translations for users who are sensitive to motion.

## Usage & Customization

You can easily configure the behavior, angle, opacity, and speed of the shimmer effect using the CSS Custom Properties set in `:root` of `style.css`:

```css
:root {
  /* Shimmer-Sweep Parameters */
  --shimmer-width: 150%;
  --shimmer-angle: -25deg;
  --shimmer-speed: 2.5s;
  
  /* Shimmer Lighting Configuration */
  --shimmer-opacity-low: rgba(255, 255, 255, 0);
  --shimmer-opacity-mid: rgba(255, 255, 255, 0.04);
  --shimmer-opacity-high: rgba(255, 255, 255, 0.12);
  ...
}
```

Simply open `demo.html` in your web browser. Hover over the cards to see the shimmer activate, and notice the featured center card runs its shimmer sweep continuously to draw user attention.
