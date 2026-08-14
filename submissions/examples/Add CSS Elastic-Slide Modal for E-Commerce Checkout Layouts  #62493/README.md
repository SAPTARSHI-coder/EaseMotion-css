# CSS Elastic-Slide Modal for E-Commerce Checkout

A hyper-responsive, purely CSS-driven modal component tailored for e-commerce checkout environments (e.g., applying promo codes, changing addresses). It features a signature "Elastic-Slide" entrance, where the modal propels itself from off-screen, scaling and snapping into the center of the viewport with a physical, rubber-band bounce.

## Features

- **Pure CSS State Management**: The modal opens and closes flawlessly using the hidden checkbox trick (`input[type="checkbox"] + label`). It handles backdrop clicks, primary close buttons, and form-submission clicks natively without a single line of JavaScript.
- **Elastic-Slide Physics**: The modal entrance relies on a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function. By interpolating `translateY` from `150vh` to `-50%` and `scale` from `0.85` to `1`, the modal builds visual momentum and physically overshoots its target before snapping into place.
- **Smooth Exits**: To prevent jarring physics when closing, the exit transition bypasses the elastic spring and falls back to a clean, linear slide-down.
- **Glassmorphism Backdrop**: The backdrop gently dims and blurs the underlying page, retaining focus entirely on the kinetic entrance.
- **Accessibility Friendly**: Strictly adheres to `@media (prefers-reduced-motion: reduce)` by bypassing the high-velocity `transform` animations entirely, defaulting to a clean, instant opacity crossfade for motion-sensitive users.

## File Structure

```
Add CSS Elastic-Slide Modal for E-Commerce Checkout Layouts  #62493/
├── demo.html     # Semantic layout mimicking an e-commerce "Promo Code" workflow
├── style.css     # CSS rules encapsulating the mathematical elastic slides and state logic
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The CSS Checkbox Hack
The `.modal-state` checkbox is placed at the very top level of the DOM. Clicking the backdrop, the "Have a promo code?" button, or any of the inner modal buttons checks or unchecks this box. We then use the general sibling combinator `~` to target the modal container and backdrop overlay, triggering their entrance transitions.

### The Physics Transition
By utilizing CSS `transition`, the browser automatically computes the physical interpolation.
- **Closed state**: `transform: translate(-50%, 150vh) scale(0.85)`
- **Open state**: `transform: translate(-50%, -50%) scale(1)`

Applying the `--ease-elastic` cubic-bezier to this delta ensures the browser correctly calculates the momentum, overshoot, and friction required to simulate a physical spring!

## Custom Properties

You can customize the layout physics and colors by tweaking the CSS variables in `style.css`:

```css
:root {
  --primary: #f97316;       /* Main brand color (Orange 500) */
  --bg-main: #fff7ed;       /* Body background */
  
  /* Intense bouncy overshoot for the Elastic-Slide */
  --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1); 
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Click the "Have a promo code?" button to trigger the pure CSS Elastic-Slide physics!
