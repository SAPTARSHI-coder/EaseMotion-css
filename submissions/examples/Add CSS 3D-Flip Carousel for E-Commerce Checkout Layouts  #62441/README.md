# CSS 3D-Flip Carousel for E-Commerce Checkout

A breathtaking, pure CSS 3D Cover-Flow carousel component tailored for e-commerce checkout flows (ideal for selecting a saved payment method or shipping address). It leverages native CSS 3D transforms to create a realistic, immersive, infinite-looping carousel experience without a single line of JavaScript.

## Features

- **Pure CSS 3D Physics**: Uses `perspective`, `transform-style: preserve-3d`, and a complex web of `rotateY`, `translateZ`, and `translateX` mathematical transforms to create a true 3D spatial layout.
- **No-JS State Management**: Driven entirely by the hidden radio button trick (`input[type="radio"] + label`).
- **Dynamic Content & Depth**: Not only do the cards move through 3D space, but their drop-shadows intensify as they move forward, and the descriptive text beneath the carousel dynamically crossfades based on the checked state.
- **Bouncy Spring Animations**: Powered by a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function for physical, bouncy rotations.
- **Fully Responsive**: Scales down gracefully on mobile devices, seamlessly modifying the 3D offset mathematics to prevent horizontal viewport clipping.
- **Accessibility Friendly**: Fully integrates with `@media (prefers-reduced-motion: reduce)`, instantly stripping the 3D transforms and falling back to a clean, 2D opacity-crossfade layout for motion-sensitive users.

## File Structure

```
Add CSS 3D-Flip Carousel for E-Commerce Checkout Layouts  #62441/
├── demo.html     # Semantic layout mimicking an e-commerce payment selection panel
├── style.css     # CSS rules encapsulating the 3D mathematical transforms and state logic
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The CSS Radio Array
Three hidden radio inputs sit at the root of the carousel wrapper. Clicking on a visible credit card (or the pagination dots) changes the checked radio. Using the general sibling combinator `~`, we dynamically alter the `transform` values of all three cards simultaneously.

### The 3D Cover-Flow Math
To simulate a circular 3D Cover-Flow:
1. **Active Card**: Given `translateX(0) translateZ(40px) rotateY(0deg)`. This brings it forward and faces it straight to the camera.
2. **Next Card**: Given `translateX(150px) translateZ(-80px) rotateY(-30deg)`. This pushes it right, back, and tilts it inward.
3. **Previous Card**: Given `translateX(-150px) translateZ(-80px) rotateY(30deg)`. This pushes it left, back, and tilts it inward.

By rotating these exact coordinates based on which radio is checked, we achieve a flawless infinite carousel loop.

## Custom Properties

You can customize the 3D physics and offsets by tweaking the CSS variables in `style.css`:

```css
:root {
  /* Desktop Math */
  --x-offset-desktop: 150px;       /* Distance to slide cards horizontally */
  --z-offset-desktop: -80px;       /* Distance to push inactive cards backwards */
  --rotate-angle-desktop: 30deg;   /* Tilt angle for inactive cards */
  
  /* Mobile Math */
  --x-offset-mobile: 90px;
  --z-offset-mobile: -60px;
  --rotate-angle-mobile: 25deg;
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Click any of the credit cards or the pagination dots below the carousel to experience the fluid 3D transformations!
