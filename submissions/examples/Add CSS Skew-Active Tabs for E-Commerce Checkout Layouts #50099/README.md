# CSS Skew-Active Tabs - E-Commerce Checkout Aesthetic

A highly polished, pure CSS tab component utilizing a dynamic "Skew-Active" interaction, perfectly tailored for step-by-step E-Commerce Checkout wizards.

## Features

- **Skew-Active Interaction Transition**: When a tab (step) is activated, a stark, skewed background overlays the tab by scaling outward horizontally (`scaleX(0)` to `scaleX(1)` while maintaining a static `skewX(-18deg)`). This creates an incredibly fluid, premium unfolding animation that visually guides the user forward.
- **E-Commerce Breadcrumb Aesthetic**: Every inactive tab sits atop a subtly skewed light-gray background. When placed side-by-side, they form the overlapping "arrow/breadcrumb" design pattern universally recognized in modern checkout flows.
- **Pure CSS State & Navigation**: The wizard utilizes visually hidden radio buttons for state management. Furthermore, the "Continue" and "Back" buttons within the panels are styled `<label>` elements connected to the respective radio inputs, allowing for programmatic tab switching without a single line of JavaScript.
- **Accessible Design**: Keyboard tab navigation natively shifts focus across the steps, presenting a clear blue focus ring (`:focus-visible`) without compromising the skewed aesthetics.
- **Contextual Checkout UI**: Includes a fully responsive mock checkout layout complete with a shipping form grid, a pure CSS credit card graphic, and an order review summary.

## Custom Properties

Modify the severity of the skew, the animation timings, or the checkout brand colors by editing the `:root` variables in `style.css`:

```css
:root {
  /* Skew-Active Interaction Parameters */
  --skew-duration: 0.5s;
  --skew-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --skew-angle: -18deg; /* Adjust for sharper or softer arrows */
  
  /* Brand Colors */
  --brand-active: #111827; /* Dark Slate for active step */
  --brand-primary: #2563eb; /* Trust Blue for action buttons */
  
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Click the tabs—or use the "Continue to Payment" buttons inside the panels—to experience the smooth Skew-Active background expansion!
