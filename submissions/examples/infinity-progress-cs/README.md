# Infinity Progress
An indeterminate loading bar for the EaseMotion CSS gallery.

## Features
* Pure HTML and CSS
* Endless horizontal sweep
* Progress segment continuously shrinks and expands
* Soft gradient highlight and glow
* Indeterminate progress semantics
* Responsive layout
* `prefers-reduced-motion` support
* No JavaScript or external dependencies

## Structure
```text id="y7k4sp"
infinity-progress/
├── demo.html
├── style.css
├── README.md
└── PR.md
```

## Usage
Open `demo.html` in a browser to view the continuously animated loading bar.
The component uses an indeterminate `progressbar` role because it does not represent a known percentage or completion value.

## Implementation
The animation is built from a single progress element positioned inside a clipped track.
Two CSS animations run together:
* `infinity-sweep` moves the segment from outside the left edge to outside the right edge.
* `infinity-shrink` changes its width and opacity during the journey to create the requested sweeping and shrinking effect.

## Accessibility
The loading track uses `role="progressbar"` with an accessible label and `aria-valuetext="Loading"` rather than exposing a misleading percentage.
The component also respects `prefers-reduced-motion` to minimize animation for users who request reduced motion.

## Customization
The primary colors, track appearance, dimensions, animation timing, and EaseMotion design tokens are defined at the top of `style.css`.
