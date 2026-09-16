# Morphing Tooltip with Pastel Styling

A responsive tooltip component featuring a soft pastel visual style and
smooth CSS-only morphing interactions.

## Features

- Pastel tooltip design
- Three color variations
- Smooth fade and scale animation
- Morphing border-radius interaction
- Hover and keyboard-focus support
- Responsive layout
- Soft shadow and translucent surfaces
- Semantic tooltip structure
- `aria-describedby` support
- `role="tooltip"`
- Reduced-motion support
- Pure HTML and Vanilla CSS
- No JavaScript or external dependencies

## Files

- `demo.html`
- `style.css`

## Usage

Open `demo.html` directly in a browser.

The tooltip is shown when the trigger is hovered or receives keyboard
focus. The styles can be reused for contextual hints, helper messages,
and compact status information.

## Technologies

- HTML5
- Vanilla CSS

## Accessibility

Each tooltip trigger references its tooltip through `aria-describedby`.
The tooltip uses `role="tooltip"` and the trigger is a native keyboard-
accessible button.

Visible focus styles and `prefers-reduced-motion` support are included.

## Responsive Behavior

The component switches from a multi-column presentation to a single-column
layout on smaller screens.

## Issue

Closes #78417