# Dynamic Navbar

Documentation and a standalone demonstration for the Dynamic Navbar component requested in issue #78662.

## Overview

The Dynamic Navbar demonstrates a responsive navigation bar that changes its compact presentation as the viewport narrows. The structure stays semantic while the visual layout adapts.

## Demo

Open `demo.html` to preview the navigation at different viewport widths. The example includes branding, navigation links, and a compact menu control.

## Usage

Use a semantic `<nav>` with a button for the compact menu. The demo script toggles the mobile navigation and updates `aria-expanded` so the state remains clear.

## Accessibility

Links remain native keyboard targets, the menu button exposes its state, and focus styling is preserved. Reduced-motion preferences simplify transitions.

## Customization

Adjust the breakpoint, spacing, panel radius, transition duration, and link treatment in `style.css`.

## Files

- `demo.html` — complete responsive navbar example.
- `style.css` — responsive navigation styling.
- `README.md` — usage and accessibility documentation.