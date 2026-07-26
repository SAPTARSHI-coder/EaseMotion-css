# Tooltip Slide Animation (`ease-tooltip-slide`)

## Overview
This submission introduces a smooth, accessible tooltip animation that slides and fades in on hover or keyboard focus. It follows the EaseMotion philosophy of being human-readable, animation-first, and composable.

## Features
- **Smooth Motion**: Uses a custom cubic-bezier curve for a natural, polished slide-and-fade effect.
- **Accessibility**: Triggered by both `:hover` and `:focus-within`, making it fully keyboard navigable. Uses `role="tooltip"` and `aria-describedby` best practices.
- **Composable**: Includes a base class (`.ease-tooltip-slide`) and a modifier class (`.ease-tooltip-bottom`) for flexible positioning.
- **Theming Ready**: Leverages CSS variables for easy theming and consistency with the core framework.

## Files Included
- `demo.html`: Interactive showcase of the tooltip in action.
- `style.css`: Raw, clean CSS ready for maintainer review and integration into the core framework.

## How to Test
1. Ensure you are in the `submissions/examples/ease-tooltip-slide-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Hover over or tab to the buttons to see the tooltip slide in and out smoothly.

## Notes for Maintainer
- The animation duration is set to `0.3s` with an `ease-out-cubic` timing function.
- The tooltip uses `visibility: hidden` alongside `opacity: 0` to prevent accidental screen-reader reads or clicks when hidden.
- Ready to be refactored into the standard `ease-*` utility classes and integrated into `core/animations.css` or `components/`.