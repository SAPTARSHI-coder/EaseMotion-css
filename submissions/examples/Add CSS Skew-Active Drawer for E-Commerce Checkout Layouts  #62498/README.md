# CSS Skew-Active Drawer for E-Commerce Checkout

A hyper-kinetic, purely CSS-driven drawer component designed for premium e-commerce carts. The "Skew-Active" pattern leverages physics-based `cubic-bezier` timing functions coupled with native CSS `skewX` transformations to accurately simulate inertia, momentum drag, and physical braking. 

As the drawer slides in, its internal contents lean backward against the air resistance, snapping aggressively into an upright position and wobbling slightly as they hit their destination.

## Features

- **Pure CSS State Management**: The drawer opens and closes robustly using the zero-JS hidden checkbox trick (`input[type="checkbox"] + label`), making it universally compatible and lightning fast.
- **Physics-Based Kinetic Skew**: Instead of arbitrary keyframes, this layout uses native transitions interpolating from `skewX(10deg)` to `skewX(0deg)` across an overshooting `cubic-bezier`. This perfectly simulates momentum (leaning backwards while moving) and braking (wobbling forwards upon stopping).
- **Staggered Orchestration**: The drawer's inner contents cascade into view with micro-delays (`transition-delay`), creating a mesmerizing sequential snap effect.
- **Modern Typography & Glassmorphism**: Utilizes the 'Space Grotesk' font for a kinetic, tech-forward aesthetic alongside a sleek blurred `backdrop-filter` overlay.
- **Accessibility Friendly**: Fully integrates with `@media (prefers-reduced-motion: reduce)`, instantly stripping away the disorienting slides and skews, falling back to a clean, 2D opacity-crossfade.

## File Structure

```
Add CSS Skew-Active Drawer for E-Commerce Checkout Layouts  #62498/
├── demo.html     # Semantic layout mimicking an e-commerce shopping cart workflow
├── style.css     # CSS rules encapsulating the kinetic skew math and state logic
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The Bi-Directional Transition Trick
To create realistic momentum without rigid `@keyframes`, we set the base `.skew-item` state (closed state) to `transform: translateX(80px) skewX(10deg)`.
1. **Opening**: When the drawer opens, the items transition to `skewX(0deg)` using a bouncy `cubic-bezier`. Interpolating from `10deg` to `0deg` makes the element physically lean *left* (drag) as it slides left, overshooting slightly past 0 to create a braking wobble.
2. **Closing**: When the drawer closes, the transition reverts to an `ease` function back to `skewX(10deg)`. Interpolating from `0deg` to `10deg` makes the element physically lean *right* (drag) as it slides right.

This creates a fully bi-directional, physics-accurate animation purely using native CSS transitions!

## Custom Properties

You can customize the layout physics and colors by tweaking the CSS variables in `style.css`:

```css
:root {
  --primary: #8b5cf6;       /* Main brand color (Violet 500) */
  --drawer-width: 480px;    /* Drawer width */
  
  /* The physics spring responsible for the Skew-Snap wobble */
  --ease-skew-snap: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Click the "View Cart Dynamics" button to witness the pure CSS Skew-Active physics!
