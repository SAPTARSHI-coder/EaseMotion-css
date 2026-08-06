# CSS Magnetic Pull Checkout Tabs

A pure CSS animated tabs component designed for modern e-commerce checkout
interfaces.

The tabs use a magnetic-style pull interaction where each tab smoothly moves
toward the pointer direction when hovered, creating a responsive and tactile
checkout navigation experience.

## Features

* Pure HTML and CSS
* No JavaScript
* Magnetic pull hover interaction
* Smooth active-state transitions
* Responsive checkout layout
* Keyboard focus support
* Reduced-motion support
* Customizable animation parameters
* Self-contained demo

## Demo

Open `demo.html` directly in a browser.

No server, build tool, CDN, or external framework is required.

## Usage

The component uses native radio inputs and labels:

```html
<div class="checkout-tabs">

  <input
    type="radio"
    name="checkout-tab"
    id="cart-tab"
    checked
  >

  <label for="cart-tab" class="tab">
    Cart
  </label>

  <input
    type="radio"
    name="checkout-tab"
    id="shipping-tab"
  >

  <label for="shipping-tab" class="tab">
    Shipping
  </label>

</div>
```

Include the provided `style.css` to apply the magnetic interaction and
checkout layout.

## Customization

The magnetic interaction can be customized with CSS custom properties:

```css
:root {
  --magnetic-x: 7px;
  --magnetic-y: -7px;
  --magnetic-scale: 1.035;
  --magnetic-duration: 420ms;
  --magnetic-easing: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Available Variables

| Variable              | Description              |
| --------------------- | ------------------------ |
| `--magnetic-x`        | Horizontal pull distance |
| `--magnetic-y`        | Vertical pull distance   |
| `--magnetic-scale`    | Hover scale              |
| `--magnetic-duration` | Animation duration       |
| `--magnetic-easing`   | Animation easing         |

## Accessibility

The component uses native radio inputs for tab state management and provides
visible keyboard focus styling through `:focus-visible`.

The animation also respects the user's `prefers-reduced-motion` preference.

## Responsive Behavior

The four checkout tabs become a two-column layout on medium screens and a
single-column layout on smaller screens.

Checkout panels, product information, delivery options, payment information,
and order summaries also adapt to smaller viewports.

## Why This Fits EaseMotion CSS

This component follows the animation-first philosophy of EaseMotion CSS by
creating a tactile interaction using only HTML and CSS.

No JavaScript or external animation library is required.

The motion parameters are exposed through CSS custom properties so developers
can adjust the pull distance, scale, duration, and easing.

## Technical Note

Because this implementation intentionally uses zero JavaScript, the magnetic
effect is created using CSS hover transforms rather than tracking the exact
mouse coordinates.

This keeps the component lightweight, self-contained, and consistent with
the CSS-only philosophy of EaseMotion CSS.

## Files

```text
magnetic-pull-checkout-tabs-sr/
├── demo.html
├── style.css
└── README.md
```

## Issue

Created for:

#50335 — Add CSS Magnetic Pull Tabs for E-Commerce Checkout Layouts
