# CSS Discount Percentage Badge

An animated discount percentage badge with a strikethrough original price,
built entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript required
- Animated discount badge entrance
- Pulsing badge effect
- Strikethrough original price
- Highlighted discounted price
- Savings indicator
- Responsive design
- Keyboard-accessible button
- Visible focus state
- `prefers-reduced-motion` support
- Forced-colors support

## Files

- `demo.html` — Component markup and demo
- `style.css` — Component styling and animations
- `README.md` — Documentation

## Usage

Open `demo.html` in a modern browser.

The demo displays:

- Original price: ₹7,999
- Discounted price: ₹5,599
- Discount: 30%
- Savings: ₹2,400

To customize the component, update the price and discount values in
`demo.html`.

## Accessibility

The component uses semantic HTML and descriptive labels.

The discount badge has an accessible `aria-label`, while the decorative
product icon is hidden from assistive technologies.

The action button has a visible keyboard focus state.

Animations are disabled or minimized when the user prefers reduced motion.

## Browser Support

Works in modern browsers supporting CSS animations, gradients, transforms,
media queries, and standard HTML semantics.