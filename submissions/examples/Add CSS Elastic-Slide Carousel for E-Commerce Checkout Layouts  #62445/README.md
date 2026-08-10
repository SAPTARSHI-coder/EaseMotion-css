# CSS Elastic-Slide Carousel for E-Commerce Checkout

A breathtaking, pure CSS 2D carousel component designed for e-commerce checkout flows (ideal for selecting shipping methods, saved addresses, or premium packaging). It features a signature "Elastic-Slide" animation where the slides physically snap into view using extreme `cubic-bezier` timing functions.

## Features

- **Pure CSS State Management**: The carousel logic is driven entirely by the robust hidden radio button trick (`input[type="radio"] + label`). Clicking on a peeking slide or the pagination dots seamlessly updates the layout without any JavaScript.
- **Elastic-Slide Physics**: Uses a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` spring. Combined with `translateX()` and `scale()`, the sliding track visually stretches and snaps back like a rubber band when switching items.
- **Off-Canvas Peeking**: Next and previous slides remain partially visible at the edges of the viewport (scaled down), inviting users to click and explore.
- **Double-Elastic Ring**: The active green border ring employs its own independent elastic scale transition, popping out slightly after the slide settles.
- **Accessibility Friendly**: Fully integrates with `@media (prefers-reduced-motion: reduce)`, instantly falling back to a clean, 2D opacity-crossfade without any disorienting slides, scales, or bounces.

## File Structure

```
Add CSS Elastic-Slide Carousel for E-Commerce Checkout Layouts  #62445/
├── demo.html     # Semantic layout mimicking an e-commerce shipping method selector
├── style.css     # CSS rules encapsulating the mathematical elastic slides and state logic
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The Bi-Directional Mathematical Array
Rather than using a single scrolling wrapper, we absolutely position each slide on top of one another. Using the `~` sibling combinator against the checked radio button, we manually dictate their coordinate translations. 

For example, when Slide 2 is active:
- **Slide 1 (Previous)** is pushed left using `transform: translateX(-85%) scale(0.85);`. The 85% translation ensures a 15% sliver of it remains "peeking" inside the viewport.
- **Slide 2 (Active)** is centered using `transform: translateX(0) scale(1);`.
- **Slide 3 (Next)** is pushed right using `transform: translateX(85%) scale(0.85);`.

Because these coordinates update purely via CSS `transition`, the browser perfectly calculates the elastic interpolation between any two selected states!

## Custom Properties

You can customize the layout physics and peek distances by tweaking the CSS variables in `style.css`:

```css
:root {
  --primary: #10b981;             /* Main brand color (Emerald 500) */
  --slide-offset: 85%;            /* Determines how far off-canvas inactive slides are pushed */
  --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1); /* Pronounced bouncy spring */
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Click the peeking cards or the pagination dots at the bottom to trigger the Elastic-Slide effect!
