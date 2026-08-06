# CSS Zoom-Out Tabs for E-Commerce Checkout

A high-performance, pure CSS tabs component utilizing a snappy "Zoom-Out" interaction transition. Styled specifically for E-Commerce Checkout flows, this component provides a trustworthy, application-like feel when switching between payment methods.

## Features

- **Snappy Zoom-Out Transition**: A subtle `scale(0.97)` paired with a very fast `0.35s` easing curve (`cubic-bezier`). This provides immediate tactile feedback without disorienting the user, which is critical for maintaining trust in checkout flows.
- **Pure CSS State Logic**: Driven entirely by visually hidden radio buttons (`.sr-only`) and the modern `:has()` selector. By avoiding JavaScript, the payment flow remains robust, lightweight, and completely immune to JS execution delays.
- **E-Commerce Aesthetics**: Designed with conversion and trust in mind:
  - Clean, boxed layout with subtle drop shadows.
  - Safe, recognizable ecommerce colors (grays, blues, and stark blacks).
  - Secure payment badges and mock form layouts for Credit Card, PayPal, and Apple Pay.
- **Fully Accessible**: Implements visually-hidden `.sr-only` class to retain full keyboard navigation. Includes clear `:focus-visible` dashed outlines and instantly bypasses animations if `@media (prefers-reduced-motion: reduce)` is detected.
- **Responsive Framework**: The two-column checkout layout automatically collapses into a vertical stack on mobile devices, ensuring the order summary remains visible.

## Custom Parameters (CSS Variables)

Adjust the timing of the transition or checkout branding colors easily via CSS variables mapped to `.ease-zoom-out-tabs`:

```css
.ease-zoom-out-tabs {
    --zoom-duration: 0.35s; /* Snappy interaction */
    --zoom-easing: cubic-bezier(0.2, 0, 0, 1);
    --zoom-scale-out: 0.97; /* Very subtle scale */
    
    --tab-border: #d1d5db;
    --tab-active-border: #2563eb; /* Accessible Focus Blue */
    --tab-bg: #f9fafb;
}
```

## Structure
- `demo.html` - The markup representing a mock e-commerce checkout page, including an order summary side-panel and the tabbed payment forms.
- `style.css` - Contains the logic for the precise math-based sliding indicator, the zoom-out panel scaling, and the form UI styling.
