# CSS Follow Button Toggle

A responsive Follow/Following button with a smooth animated state transition built entirely with HTML and CSS.

## Overview

This component demonstrates how an interactive Follow button can be created without JavaScript.

The button switches between:

- `Follow`
- `Following`

using a hidden checkbox and CSS selectors.

## Features

- Pure HTML and CSS
- No JavaScript
- Smooth Follow/Following transition
- Hover and active states
- Keyboard accessible
- Visible keyboard focus indicator
- Responsive design
- Reduced-motion support
- No external dependencies

## How It Works

The component uses a checkbox as the state controller.

When the checkbox is checked, CSS changes the button from the default Follow state to the Following state.

The `:checked` selector controls the button's visual state and displayed label.

Example:

    .follow-toggle:checked + .follow-button {
        background: var(--success);
    }

## Accessibility

The component includes:

- Descriptive accessible labeling
- Keyboard interaction
- Visible focus indicator using `:focus-visible`
- Reduced-motion support through `prefers-reduced-motion`
- A comfortable touch target on smaller screens

The button can be operated using standard keyboard controls such as Tab and Space.

## Responsive Design

The component uses CSS media queries to adapt the layout for smaller screens.

On mobile devices, the button expands to provide a comfortable touch target while maintaining the same interaction and visual behavior.

## Files

    70724-css-follow-button-toggle-ks/
    ├── demo.html
    ├── style.css
    └── README.md

## Technologies Used

- HTML5
- CSS3
- CSS transitions
- CSS animations
- CSS pseudo-classes
- CSS media queries

## Browser Compatibility

The component uses standard HTML and CSS features supported by modern browsers.

## Testing

The component was tested locally to verify:

- Follow/Following state transition
- Hover interaction
- Active interaction
- Keyboard accessibility
- Responsive layout
- Reduced-motion behavior

## Issue

Created for EaseMotion CSS Issue #70724.

## License

Part of the EaseMotion CSS project.