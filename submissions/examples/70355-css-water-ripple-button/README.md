# CSS Water Ripple Button

## Overview

A tactile water-ripple button built with a native HTML button and CSS pseudo-elements. The component creates an expanding circular disturbance when the control is pressed, while layered gradients provide a soft liquid-like surface.

## Features

- Pure HTML and CSS implementation
- Native `<button>` semantics
- Press-and-hold ripple feedback
- Layered radial-gradient water effect
- Soft highlight sweep on hover and focus
- Responsive showcase layout
- Visible keyboard focus state
- Reduced-motion support
- No JavaScript or external dependencies

## Interaction Model

The ripple is triggered by the button's `:active` state. A pseudo-element and a dedicated decorative `.ripple` layer expand from the center of the control while the button itself compresses slightly. This approach keeps the implementation dependency-free and preserves the browser's normal button behavior.

Because CSS alone cannot read the exact pointer coordinates of a click, the pure-CSS implementation uses the center of the button as the ripple origin. The result remains consistent across pointer, touch, and keyboard interactions.

## Files

- `demo.html` — semantic buttons, showcase content, and implementation notes
- `style.css` — button surface, ripple layers, animations, responsive rules, and accessibility styling
- `README.md` — component documentation

## Usage

Open `demo.html` in a modern browser. No JavaScript, package installation, or build process is required.

Copy the `.ripple-button` structure into another interface and adjust the `--button` and `--button-deep` custom properties for a different color treatment.

## Accessibility

The component uses actual `<button>` elements rather than clickable generic containers. This preserves keyboard activation and standard assistive-technology semantics. `:focus-visible` provides a high-contrast focus outline, and decorative ripple layers are marked `aria-hidden` in the HTML.

The effect also respects `prefers-reduced-motion`. Users who request reduced motion do not receive the full animated ripple sequence, while the button remains fully interactive.

## Responsive Behavior

The showcase uses a two-column layout on larger screens and collapses into a single column on smaller screens. The button maintains a comfortable touch target while the supporting content cards become a single-column stack on narrow devices.

## Animation Details

The `water-wave` keyframe expands a radial layer from a small circle to a broad transparent wave. A second `ripple-expand` layer adds a crisp ring, creating depth without requiring SVG, canvas, or JavaScript.

## Issue

EaseMotion CSS issue #70355.
