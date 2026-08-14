# Responsive Toggle

Documentation and a standalone demonstration for the Responsive Toggle component requested in issue #78608.

## Overview

The Responsive Toggle is a compact control that adapts to smaller screens while keeping the active state clear and accessible. It is useful for preferences, view modes, filters, and compact navigation controls.

## Demo

Open `demo.html` in a browser to preview the component. The example includes a keyboard-accessible toggle, visible state text, and responsive sizing.

## Usage

1. Add the toggle markup to the page.
2. Use the `aria-pressed` attribute to expose the current state.
3. Apply the supplied CSS class names from `style.css`.
4. Update the state label when the control changes.

## Accessibility

Use a real `<button>` element, keep the focus indicator visible, and expose the state with `aria-pressed`. The demo also respects reduced-motion preferences.

## Customization

The component can be resized with the CSS custom properties in `style.css`. Adjust spacing, border radius, and transition duration to match the surrounding interface.

## Files

- `demo.html` — complete usage example.
- `style.css` — component styling and responsive behavior.
- `README.md` — usage and implementation notes.