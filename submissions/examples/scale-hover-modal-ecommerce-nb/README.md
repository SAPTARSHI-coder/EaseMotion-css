# Scale Hover Modal — E-Commerce Checkout Showcase

## Overview
A polished, self-contained checkout confirmation experience that demonstrates a premium e-commerce modal with scale-in motion, soft hover states, and responsive layout behavior using only HTML and CSS.

## Features
- Realistic checkout header with store branding, progress indicators, and secure payment status
- Centered confirmation modal with layered content, summary details, and action buttons
- Smooth scale and fade animation driven by CSS custom properties
- Responsive product summary and recommendation cards for desktop, tablet, and mobile
- Accessibility-minded semantics, keyboard focus styling, and reduced-motion support

## Folder structure
```text
submissions/examples/scale-hover-modal-ecommerce-nb/
├── demo.html
├── style.css
└── README.md
```

## Installation / Usage
Open the demo directly in a browser:

```bash
# From the repository root
start submissions/examples/scale-hover-modal-ecommerce-nb/demo.html
```

Or simply double-click the file in your file explorer.

## Responsive behavior
The layout shifts from a two-column checkout experience to a single-column stack on narrower screens. Recommendation cards collapse into a vertical list on mobile, while the modal preserves comfortable spacing and avoids clipping.

## Accessibility notes
The demo uses semantic HTML5 landmarks, descriptive headings, keyboard-focus outlines, and sufficient color contrast. Motion is reduced automatically when the user prefers less animation.

## CSS custom properties
The implementation exposes the following configurable values in the stylesheet:

```css
--modal-duration
--modal-easing
--modal-scale
--modal-radius
--modal-shadow
--modal-background
--overlay-opacity
--button-hover-scale
--modal-width
```

## EaseMotion CSS classes demonstrated
The example uses the following EaseMotion-style utility patterns where applicable:

- `.ease-card-lift`
- `.ease-hover-grow`
- `.ease-fade-in`

These are intentionally lightweight utility-style hooks that mirror the repository’s animation philosophy without relying on framework build output.

## Browser compatibility
The demo is compatible with modern evergreen browsers, including Chrome, Edge, Firefox, and Safari. It relies on standard CSS features such as flexbox, grid, backdrop-filter, and custom properties.

## Customization guide
To adapt the visual tone, change the CSS variables at the top of the stylesheet:

```css
:root {
  --modal-radius: 1.75rem;
  --modal-shadow: 0 24px 70px rgba(15, 23, 42, 0.16);
  --accent: #3461ff;
}
```

You can also swap the background gradients, spacing, or button styles while keeping the same structure intact.

## HTML usage example
```html
<link rel="stylesheet" href="./style.css" />

<div class="modal-shell" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-copy">
  <div class="modal-card ease-fade-in">
    <h2 id="modal-title">Order confirmed</h2>
    <p id="modal-copy">Your order is on the way.</p>
    <a class="action-button primary ease-hover-grow" href="#">Continue shopping</a>
  </div>
</div>
```
