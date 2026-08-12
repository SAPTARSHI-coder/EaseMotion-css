# Animated Floating Label Form Inputs (`ease-input-floating-label`)

## Overview
This submission introduces modern, animated form inputs with floating labels. The label smoothly transitions from inside the input to above it when the user focuses or enters text, providing a clean, space-efficient, and visually appealing form experience.

## Features
- **Smooth Label Animation**: The label floats up and shrinks when the input is focused or filled, using CSS transforms and transitions for 60fps performance.
- **Animated Underline**: An expanding underline effect on focus provides clear visual feedback and guides the user's attention.
- **Validation States**: Includes visual feedback for valid (green) and invalid (red) states using native HTML5 validation pseudo-classes.
- **Hover Feedback**: Subtle underline expansion on hover indicates interactivity.
- **Disabled State**: Clear visual indication when an input is disabled.
- **Theming Ready**: Leverages `--ease-color-*` CSS variables for seamless integration with the core design token system.
- **Accessible**: Uses proper `<label>` associations with `for` attributes, and respects `prefers-reduced-motion` preferences.
- **Multiple Input Types**: Works with text, email, password, and textarea elements.

## Files Included
- `demo.html`: Interactive form showcase with multiple input types.
- `style.css`: Clean, production-ready CSS with smooth animations.

## How to Test
1. Ensure you are in the `submissions/examples/ease-input-floating-label-<your-initials>` directory.
2. Open `demo.html` in any modern web browser.
3. Click on each input to see the label float up and the underline expand.
4. Enter text and tab out to see the label stay floating.
5. Submit the form with invalid data to see validation states.

## Notes for Maintainer
- Uses the `:placeholder-shown` pseudo-class trick to detect if an input has content (requires `placeholder=" "` attribute).
- Ready to be refactored into standard `ease-*` utility classes and integrated into a future `components/forms.css` file.
- Follows all temporary contribution guidelines (self-contained in `submissions/examples/` with a unique identifier suffix).