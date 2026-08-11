# CSS Property Listing Card

A responsive property listing card built with pure HTML and CSS.

## Features

- Modern real-estate property card design
- Property price, location, beds, baths and area details
- Favorite button interaction
- Animated hover effects
- Responsive layout for desktop, tablet and mobile
- Pure CSS implementation
- Accessible semantic structure and keyboard-focusable controls
- Reduced-motion support with `prefers-reduced-motion`

## Files

- `demo.html` — Demo markup for the property listing card
- `style.css` — Complete styling and animations

## Usage

1. Place `demo.html` and `style.css` in the same directory.
2. Open `demo.html` in any modern browser.
3. The component works without JavaScript or external libraries.

## Customization

You can customize:

- Property name
- Location
- Price
- Number of beds and baths
- Property area
- Accent colors
- Card dimensions
- Typography

The main colors are controlled through CSS custom properties in `:root`.

## Accessibility

- Semantic HTML elements are used for structure.
- The favorite control has an accessible `aria-label`.
- The property link has an accessible label.
- Keyboard focus states are provided.
- Reduced-motion preferences are respected.

## Browser Support

Works in modern browsers supporting CSS Grid, Flexbox, CSS custom properties and standard CSS animations/transitions.

## Issue

Created for EaseMotion CSS issue #70691 — CSS Property Listing Card.