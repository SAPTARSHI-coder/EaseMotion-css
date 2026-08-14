# CSS Skew-Active Stepper

A pure CSS stepper component designed for Product Catalog Layouts and Checkout flows. It features an aggressive structural `skewX` transformation on the active step indicator and primary buttons to create a fast-forward, dynamic aesthetic.

## Features
- Pure CSS and HTML (No JavaScript required).
- Unique geometry created entirely with the CSS `transform: skewX()` property applied to the step indicators.
- Counter-skew transformations applied to the inner text elements (`.step-number`, `.step-icon`) to keep the typography perfectly legible.
- The active state features an aggressive scale and deeper skew angle for emphasis.
- The primary call-to-action button mirrors the active skew geometry for design consistency.
- Clean, responsive flexbox layout.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe, un-skewed static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. You will see a 4-step checkout flow. Notice how the active "Shipping" step indicator and the primary "Continue to Payment" button lean forward aggressively, giving the UI a sense of speed and progression.

## Files
- `demo.html`: The HTML structure for the stepper layout, connection lines, and the skewed action buttons.
- `style.css`: The styling, flexbox layouts, and `skewX` CSS transformations.
