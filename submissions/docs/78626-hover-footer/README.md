# Hover Footer

Documentation and a standalone demonstration for the Hover Footer component requested in issue #78626.

## Overview

The Hover Footer provides a lightweight footer interaction where navigation links reveal a clear visual response when the pointer or keyboard focus moves over them.

## Demo

Open `demo.html` to preview the footer. The example includes grouped links, descriptive labels, visible keyboard focus, and a responsive layout.

## Usage

Place the footer near the end of the page and group related links with semantic navigation elements. Link the page to `style.css` and keep the markup structure intact when adapting the component.

## Accessibility

All navigation items use native links so keyboard users can reach them naturally. Hover effects are paired with `:focus-visible`, and reduced-motion users receive a simpler transition.

## Customization

Adjust the footer spacing, link underline, hover transform, and transition timing in `style.css`. The layout uses flexible columns that collapse on narrow screens.

## Files

- `demo.html` — complete footer example.
- `style.css` — responsive footer styling.
- `README.md` — usage and accessibility documentation.