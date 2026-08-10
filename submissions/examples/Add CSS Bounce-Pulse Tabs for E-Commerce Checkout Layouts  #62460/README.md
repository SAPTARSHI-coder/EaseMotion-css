# CSS Bounce-Pulse Tabs for E-Commerce Checkout

A beautiful, pure CSS tabs component customized for e-commerce multi-step checkouts. It features a signature "Bounce-Pulse" visual queue: as a user transitions to a new tab, the sliding background pill physically bounces into place, the step icon physically jumps, and a continuous radar-like pulse ring emits from the icon to draw focus.

## Features

- **Pure CSS State Management**: Powered by the reliable hidden radio button trick (`input[type="radio"] + label`). This provides flawless tab switching and "Next Step" button integrations without a single line of JavaScript.
- **Physical Spring Animations**: Built using a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function. This creates a realistic, physical overshoot (a "bounce") when the background pill slides and the icon jumps.
- **Continuous Pulse Keyframes**: Once the icon lands its bounce, a staggered keyframe animation takes over to emit an infinitely expanding, fading `box-shadow`/`border` ring.
- **Fully Responsive**: The sliding pill background utilizes percentage math `calc((100% - 0.8rem) / 3)` ensuring it aligns perfectly across all screen sizes. Text labels hide on exceedingly small screens to preserve layout integrity.
- **Accessibility Friendly**: Heavily respects `@media (prefers-reduced-motion: reduce)`. It disables the slide, the bounce, and removes the continuous pulse ring, falling back to instant/fading state changes for motion-sensitive users.

## File Structure

```
Add CSS Bounce-Pulse Tabs for E-Commerce Checkout Layouts  #62460/
├── demo.html     # Semantic layout mimicking a premium 3-step e-commerce checkout
├── style.css     # CSS rules encapsulating the radio logic, bounce-spring, and pulse animations
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The CSS Radio Array
Three hidden radio inputs sit at the root of the checkout panel. Each step in the tab header is a `<label>` pointing to one of these radios. Furthermore, the "Continue to Payment" and "Review Order" buttons inside the form panels are *also* just `<label>` tags pointing to the next radio in the sequence. This creates a seamless, JS-free multi-step form architecture.

### The Bounce-Pulse Animation Chain
1. **The Slide**: The `.bouncing-pill` uses `transform: translateX(...)` alongside a spring `cubic-bezier` transition to snap into the active slot.
2. **The Bounce**: The `.tab-icon` triggers a short `animation: iconBounce 0.6s` sequence, scaling up and translating up on the Y-axis.
3. **The Pulse**: The `.pulse-ring` triggers an infinite `animation: pulse 2s`, scaling outward and fading opacity to 0. We use `animation-delay: 0.3s` so the pulse begins emitting exactly as the icon's initial bounce lands.

## Custom Properties

You can customize the layout physics and colors by tweaking the CSS variables in `style.css`:

```css
:root {
  --primary: #ec4899;       /* Main brand color (Pink 500) */
  --bg-main: #f8fafc;       /* Body background */
  --surface: #ffffff;       /* Card background */
  --tab-bg: #f1f5f9;        /* Inner rail for tabs */
  
  /* Bouncy spring used for the pill slide and icon jump */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Usage

1. Open `demo.html` in a modern browser.
2. Click the "Continue" buttons or click directly on the tabs in the header to witness the pure CSS Bounce-Pulse chain!
