# Wobble-Focus Checkout Tabs

A responsive checkout-step interface built with native radio controls, pure CSS, and EaseMotion utility classes.

## What does it do?

This example creates an animated checkout step navigation for e-commerce layouts without using JavaScript. Users can switch between **Contact**, **Delivery**, and **Payment** sections while the active step receives a subtle **Wobble-Focus** animation. The component is fully responsive, keyboard accessible, and respects reduced-motion preferences.

## Features

- Pure HTML and CSS
- Zero JavaScript
- Responsive checkout layout
- Native radio-group navigation
- Smooth Wobble-Focus animation
- Animated content transitions
- Keyboard accessible
- Visible focus indicators
- Customizable with CSS variables
- Uses EaseMotion utility classes
- Supports `prefers-reduced-motion`

## Accessibility

- Uses native radio controls for reliable keyboard navigation.
- Supports Tab and Arrow key navigation between checkout steps.
- Provides visible `:focus-visible` styles.
- Groups controls using a semantic `<fieldset>` and `<legend>`.
- Includes a skip-to-content link.
- Preserves usability when animations are disabled through `prefers-reduced-motion`.
- Avoids incomplete ARIA tab semantics that would otherwise require JavaScript.

## Browser Support

Compatible with all modern browsers supporting:

- CSS Custom Properties
- CSS Grid
- `:checked` selectors
- `prefers-reduced-motion`
- Native HTML radio controls
