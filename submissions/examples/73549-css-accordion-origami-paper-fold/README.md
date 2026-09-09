# Origami Paper Fold Accordion

Pure HTML and CSS implementation for EaseMotion issue #73549.

## Features

- Paper-like layered surfaces
- Folded-corner visual treatment
- Native disclosure interaction
- Subtle perspective reveal
- Responsive layout
- Visible keyboard focus
- Reduced-motion support
- No JavaScript dependencies

## Implementation

The folded corner is created with a pseudo-element and a gradient. The open state changes elevation and the content uses a small perspective animation to suggest a paper fold.

## Accessibility

Native `details` and `summary` elements provide keyboard interaction and disclosure semantics. The focus state remains visible, while reduced-motion preferences remove animation.

## Usage

Open `demo.html` directly in a modern browser.
