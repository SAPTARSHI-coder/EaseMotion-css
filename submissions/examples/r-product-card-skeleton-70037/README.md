# CSS Product Card Skeleton

A responsive product card skeleton loader built entirely with HTML and CSS.

## Features

- Pure CSS implementation
- Product-card-shaped skeleton layout
- Animated shimmer loading effect
- Responsive grid
- Mobile-friendly design
- No JavaScript required
- Accessible loading state
- Reduced-motion support
- Reusable skeleton elements

## Files

- `demo.html` — Demo markup
- `style.css` — Component styling and animation
- `README.md` — Documentation

## Usage

Open `demo.html` in a modern browser.

The skeleton can be adapted to match an existing product card by changing
the dimensions of the individual skeleton elements.

## Accessibility

The component includes:

- Semantic `<main>`, `<section>`, and `<article>` elements
- `aria-label` for the loading product collection
- `aria-busy="true"` to indicate that the content is loading
- `aria-hidden="true"` on decorative skeleton elements
- `prefers-reduced-motion` support

## Animation

The loading effect is created with a CSS pseudo-element and a
`@keyframes shimmer` animation.

No JavaScript or external library is required.

## Responsive Behavior

- Desktop: three product cards per row
- Tablet: two cards per row
- Mobile: one card per row

## Browser Support

Works in modern browsers supporting:

- CSS Grid
- CSS Flexbox
- CSS gradients
- CSS animations
- CSS pseudo-elements
- CSS media queries

## License

This example is contributed to EaseMotion CSS under the repository license.