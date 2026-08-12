# CSS Glass Effect: Metallic Sheen

A smooth, accessible, and performant **pure CSS glassmorphism UI** featuring a polished **Metallic Sheen** visual style.

## Features

* Pure HTML and Vanilla CSS
* Glassmorphism card design
* Animated metallic text gradient
* Interactive metallic light sweep
* Smooth hover transitions
* Subtle depth and elevation
* Dark mode compatible
* Light mode support
* Responsive layout
* Hardware-friendly transforms
* Accessible keyboard focus state
* `prefers-reduced-motion` support
* No external JavaScript
* No external libraries or dependencies

## Files

```text
73731-css-metallic-sheen/
├── README.md
├── demo.html
└── style.css
```

## Implementation

The effect uses CSS gradients, backdrop blur, pseudo-elements, transforms, transitions, and keyframe animations to create the metallic glass appearance without JavaScript.

The animated sheen is implemented with a dedicated pseudo-like overlay element that sweeps across the card when the user hovers over it.

## Accessibility

The component includes:

* Semantic HTML structure
* Descriptive heading
* Keyboard-accessible CTA
* Visible `:focus-visible` state
* Reduced-motion support through `prefers-reduced-motion`

## Browser Support

The effect uses modern CSS features such as:

* CSS gradients
* `backdrop-filter`
* CSS animations
* CSS transforms
* `prefers-reduced-motion`
* `prefers-color-scheme`

Browsers that do not support `backdrop-filter` will still display the card using its translucent background and borders.

## Usage

Open `demo.html` directly in a modern browser.

No build step or package installation is required.

## Issue

Implemented for:

**CSS Glass Effect: Metallic Sheen Variation #469 — #73731**

## License

This example follows the licensing and contribution guidelines of the parent repository.
