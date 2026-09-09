# CSS Sold Out Overlay

A responsive pure CSS product card with an animated "SOLD OUT" overlay.

## Issue

#70693 — CSS Sold Out Overlay

## Description

This component demonstrates a product card that displays a prominent sold-out state using a CSS overlay.

The overlay appears on hover and keyboard focus, adding a blurred dark layer and animated status badge without JavaScript.

## Features

- Pure HTML and CSS
- No JavaScript
- Animated sold-out overlay
- CSS-created product illustration
- Hover interaction
- Keyboard focus support
- Responsive design
- Accessible button state
- `prefers-reduced-motion` support
- No external dependencies

## Files

- `demo.html` — Component markup
- `style.css` — Component styles and animations
- `README.md` — Documentation

## How to Use

Open `demo.html` in a modern browser.

## Interaction

Hover over the product card to reveal the sold-out overlay.

The card also responds to keyboard focus.

## Accessibility

The product card includes an accessible description and the disabled purchase button communicates that the product is unavailable.

The animation is reduced when the user has enabled reduced-motion preferences.

## CSS Techniques

- CSS gradients
- Pseudo-elements
- `backdrop-filter`
- CSS transitions
- CSS transforms
- `box-shadow`
- Responsive media queries
- CSS custom properties
- `prefers-reduced-motion`

## Browser Support

Works in modern browsers supporting standard CSS properties and animations.

## Credits

Created as a contribution to EaseMotion CSS for GSSoC 2026.