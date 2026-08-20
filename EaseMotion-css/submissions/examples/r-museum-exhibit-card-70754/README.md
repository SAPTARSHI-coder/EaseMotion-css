# CSS Museum Exhibit Card

A museum-inspired exhibit card created with pure HTML and CSS.

## Features

- Elegant museum exhibit label design
- CSS artwork illustration without external images
- Artist, year, collection and catalog information
- Exhibit description and metadata
- Smooth card and artwork hover animations
- Responsive desktop, tablet and mobile layouts
- Pure CSS implementation
- Semantic HTML structure
- Keyboard-accessible link
- Reduced-motion support

## Files

- `demo.html` — HTML structure for the museum exhibit card
- `style.css` — Complete styling, artwork and animations

## Usage

1. Keep `demo.html` and `style.css` in the same folder.
2. Open `demo.html` in a modern web browser.
3. No JavaScript or external dependencies are required.

## Customization

The exhibit content can be changed directly in `demo.html`.

You can customize:

- Exhibit title
- Artist name
- Year
- Collection
- Description
- Medium
- Dimensions
- Gallery number
- Catalog number
- Colors and typography

The main colors are defined as CSS custom properties inside `:root`.

## Accessibility

- Uses semantic HTML elements.
- The exhibit heading is referenced by `aria-labelledby`.
- Decorative artwork is hidden from assistive technologies.
- The "Explore exhibit" link includes an accessible label.
- Visible keyboard focus states are provided.
- `prefers-reduced-motion` is respected.

## Browser Support

Works in modern browsers supporting CSS Grid, Flexbox, CSS custom properties, transitions, animations and `clip-path`.

## Issue

Created for EaseMotion CSS issue #70754 — CSS Museum Exhibit Card.