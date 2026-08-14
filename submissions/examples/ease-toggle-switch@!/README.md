# Animated Toggle Switch (`ease-toggle-switch`)

## Overview
This submission introduces a fully accessible, spring-animated toggle switch component. It directly addresses the **"Form components (inputs, checkboxes, toggles)"** item on the EaseMotion v1.2 Roadmap.

## Features
- **Premium Motion**: Uses a custom spring-like cubic-bezier (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for the knob, giving it a natural, tactile feel.
- **Fully Accessible**: Hides the native checkbox visually while retaining full keyboard navigation (`Tab`, `Space`) and screen reader support (`aria-checked`). Includes a highly visible `:focus-visible` outline.
- **Theming Ready**: Built entirely with CSS variables (`--ease-color-primary`, `--ease-color-neutral-300`), ensuring seamless integration with the core `variables.css` token system.
- **Reduced Motion Support**: Gracefully disables transitions for users with `prefers-reduced-motion` enabled.

## Files Included
- `demo.html`: Interactive showcase demonstrating default, checked, and disabled states.
- `style.css`: Clean, production-ready CSS.

## How to Test
1. Ensure you are in the `submissions/examples/ease-toggle-switch-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Click the toggles, and use the `Tab` and `Space` keys to verify keyboard accessibility.

## Notes for Maintainer
- Ready to be refactored into the standard `ease-*` utility classes and integrated into the future `components/forms.css` file.
- Follows all temporary contribution guidelines (self-contained in `submissions/examples/` with a unique identifier suffix).