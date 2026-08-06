# CSS Rotate Fade Popover

A modern, responsive, and accessible rotate-fade popover component designed for e-commerce checkout layouts. Built entirely with pure HTML and CSS without any JavaScript, external libraries, or frameworks.

## Features

- **Pure CSS Animation**: Utilizes `rotate()`, `opacity`, `transform-origin`, `scale`, and `translateY` for a smooth entrance.
- **Glassmorphism Design**: Elegant blur effects and semi-transparent backgrounds tailored for premium e-commerce interfaces.
- **Accessibility Ready**: Fully keyboard navigable, utilizes semantic HTML, ARIA labels, and supports `prefers-reduced-motion`.
- **Responsive Layout**: Adapts gracefully across Desktop, Laptop, Tablet, and Mobile devices (down to 320px).
- **No JavaScript**: 100% CSS-driven interactions via `:hover` and `:focus-within`.

## Folder Structure

```
submissions/examples/rotate-fade-popover-checkout/
├── demo.html
├── style.css
└── README.md
```

## Usage

Simply copy the HTML structure from `demo.html` and the CSS from `style.css` into your project. The component relies on a wrapper `div` with class `.popover-wrapper` and the popover element with `.rotate-fade-popover`.

## HTML Example

```html
<div class="popover-wrapper">
  <span tabindex="0" aria-describedby="popover-discount">
    Discount Applied
  </span>
  <div id="popover-discount" class="rotate-fade-popover" role="tooltip">
    <strong>Coupon Applied!</strong>
    <p>You saved 20% on this order.</p>
  </div>
</div>
```

## CSS Variables

The component leverages CSS variables for easy customization. You can override these in your `:root` selector:

```css
:root {
  --color-primary: #4f46e5;
  --color-popover-bg: rgba(255, 255, 255, 0.95);
  --shadow-popover: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --transition-speed: 0.4s;
  /* See style.css for the full list */
}
```

## Customization

- **Animation Timing**: Adjust `--transition-speed` and `--transition-timing` to modify the speed and easing of the rotate-fade effect.
- **Popover Positioning**: Add the `.popover-up` class to the `.popover-wrapper` to have the popover appear above the trigger element instead of below it.

## Responsive Behaviour

The checkout layout and popovers are fluid. Media queries ensure that on screens smaller than 480px and 320px, the padding, font sizes, and popover widths adjust automatically to prevent overflow and maintain readability.

## Accessibility

- **Keyboard Navigation**: Tooltips can be triggered via keyboard focus using the `tabindex="0"` attribute and the `:focus-within` CSS pseudo-class.
- **ARIA Attributes**: Uses `aria-describedby` and `role="tooltip"` to ensure screen readers announce the popover content correctly.
- **Reduced Motion**: Respects the user's system preferences by disabling the rotate/scale transformations and providing a simple fade if `prefers-reduced-motion: reduce` is detected.

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge) that support CSS Custom Properties, flexbox, and backdrop-filter.

## Preview Description

This demo simulates a high-end e-commerce order summary. Hover or focus on elements like the "Discount", "Shipping", or the "Proceed to Payment" button to view the smooth rotate-fade popover in action.
