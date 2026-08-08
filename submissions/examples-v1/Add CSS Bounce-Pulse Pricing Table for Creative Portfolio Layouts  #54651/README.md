# CSS Bounce-Pulse Pricing Table for Creative Portfolio Layouts

A pure CSS, highly interactive pricing table component tailored for vibrant creative portfolios and digital agencies. It features a playful, physics-inspired "bounce" scaling effect on hover, paired with an infinite "pulse" animation on the call-to-action buttons.

## Features

- **Pure CSS / HTML**: Requires no external JavaScript frameworks. Entirely powered by CSS transitions and `@keyframes`.
- **Bounce-Pulse Interaction**: 
  - **Bounce**: When a user hovers or focuses a pricing card, it scales up dynamically using a custom `cubic-bezier` timing function to mimic spring-like physics.
  - **Pulse**: While the card is hovered, the purchase button begins a continuous heartbeat-style pulse using `@keyframes`, drawing the user's eye to the CTA.
- **Creative Portfolio Aesthetic**: Utilizes bold typography (`Outfit` font), gradient text clipping, and distinct primary/featured card highlighting to build a highly engaging layout.
- **Accessibility & Performance**: Fully accessible via keyboard `Tab` targeting (with `:focus-visible` triggers mapping exactly to `:hover` triggers). 
- **Prefers Reduced Motion**: Fully respects user OS settings. If `prefers-reduced-motion: reduce` is detected, the bouncing transforms and infinite pulse animations are gracefully disabled, replacing them with simple, static color shifts.

## Customization

Global parameters can be easily tweaked inside the `:root` pseudo-class:

```css
:root {
  /* Animation Timings */
  --bounce-duration: 0.6s;
  --pulse-duration: 2s;
  
  /* Scales & Physics */
  --bounce-scale: 1.05;
  --bounce-easing: cubic-bezier(0.34, 1.56, 0.64, 1); /* Custom spring */
  
  --pulse-scale-mid: 1.08; /* Max scale of the button pulse */
}
```

## How It Works

- The `.pricing-card` elements have a base `transition` applied to their `transform` property using the `--bounce-easing` variable.
- On `:hover` or `:focus-visible`, the card applies `transform: scale(var(--bounce-scale))`. The `cubic-bezier(0.34, 1.56, 0.64, 1)` curve overshoots the final value, creating a physical "bounce" before settling.
- The pulse animation is defined in `@keyframes creativePulse` and is selectively triggered on `.pulse-target` elements *only* when their parent `.pricing-card` is actively hovered.

## Usage Instructions

1. Open `demo.html` in your browser.
2. Hover your mouse over the various pricing tiers to experience the bounce entrance and button pulse.
3. Test keyboard navigation using the `Tab` key.
4. If testing accessibility, toggle your operating system's "Reduce Motion" setting to observe the fallback static styles.
