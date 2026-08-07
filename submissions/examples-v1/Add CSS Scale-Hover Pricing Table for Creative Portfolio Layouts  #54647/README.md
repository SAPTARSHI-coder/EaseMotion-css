# CSS Scale-Hover Pricing Table for Creative Portfolio Layouts

A pure CSS, highly interactive pricing table component designed specifically for dark-themed Creative Portfolios and Agency websites. It features a dramatic "Scale-Hover" scaling transition that makes the hovered pricing tier boldly jump out toward the user.

## Features

- **Pure CSS / HTML**: No JavaScript is required. The interaction is powered entirely by CSS `:hover` and `:focus-visible` pseudo-classes utilizing the `transform: scale()` property.
- **Scale-Hover Transition**: When a user hovers over a pricing card, it smoothly scales up (e.g., to 1.08x its size) utilizing a crisp `cubic-bezier` easing function. This effect creates a striking visual hierarchy and satisfying interaction.
- **Creative Portfolio Aesthetic**: Features a stark dark-mode layout (`#0f0f11` background), modern geometrical typography (`Space Grotesk`), and a vibrant Amber accent (`#f59e0b`) that creates a premium, studio-quality vibe.
- **Accessibility & Performance**: Fully accessible via keyboard `Tab` navigation. 
- **Prefers Reduced Motion**: Includes an `@media (prefers-reduced-motion: reduce)` block that gracefully falls back to static highlighting (color and shadow changes) without the dramatic scaling, respecting the user's OS accessibility settings.

## Customization

The scale intensities and timings can be rapidly adjusted by modifying the variables inside the `:root` pseudo-class:

```css
:root {
  /* Animation Timings */
  --scale-duration: 0.4s;
  --scale-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  
  /* Scale Physics */
  --card-scale: 1.08; /* The max scale multiplier on hover */
}
```

## How It Works

- The `.pricing-card` elements have a baseline `transition` mapping to the `transform` property.
- The default transform state is `scale(1)`. The "Featured" card is set to slightly pop by default at `scale(1.03)`.
- Upon hover, the transform is swapped to `scale(var(--card-scale))`. The browser GPU calculates the intermediate steps utilizing the custom cubic bezier to create a smooth, snappy entrance.

## Usage Instructions

1. Open `demo.html` in your web browser.
2. Hover your cursor over the pricing tiers to trigger the Scale-Hover effect.
3. Test keyboard focus by tabbing through the cards to verify accessibility.
4. If you have "Reduce Motion" enabled in your system preferences, observe how the component falls back to safe visual cues.
