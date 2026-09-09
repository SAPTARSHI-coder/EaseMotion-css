# Velvet Smooth Accordion

A pure HTML and CSS accordion for EaseMotion issue #73547. The component uses native disclosure semantics with a soft, layered visual treatment.

## Features

- Native `details` and `summary`
- Smooth open and close styling
- Dark-mode-compatible colors
- Hardware-friendly transform and opacity animation
- Keyboard focus visibility
- Responsive layout
- Reduced-motion support
- No JavaScript or external libraries

## Implementation

The markup stays semantic while CSS handles the surface, indicator rotation, reveal motion, and responsive spacing. The open state is controlled by the native `[open]` attribute.

## Accessibility

Keyboard interaction is provided by the browser's native summary control. Focus remains visible, and reduced-motion preferences disable the decorative animation.

## Usage

Open `demo.html` directly in a modern browser.
