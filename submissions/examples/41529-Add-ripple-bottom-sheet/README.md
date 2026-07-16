# Ripple Bottom Sheet

A highly accessible, pure CSS bottom sheet component featuring a ripple interaction effect, designed specifically for Landing Page design patterns. Added to the EaseMotion CSS Library.

## Features
- **Pure CSS Base**: Fully functional bottom sheet using the CSS checkbox toggle method (`:checked`).
- **Ripple Effect**: An interactive ripple animation on the call-to-action button when clicked.
- **Landing Page Pattern**: Styled with a clean, modern aesthetic perfect for SaaS or product landing pages.
- **Responsive & Accessible**: Includes focus states, proper ARIA attributes, and responsive sizing that acts as a bottom sheet on mobile and a centered modal-like sheet on larger screens.
- **EaseMotion Integration**: Built with EaseMotion variables for smooth, consistent easing (`--ease-out-quint`).

## Implementation Details

### HTML Structure
The component requires a specific DOM structure to work primarily without JavaScript:
1. A hidden `<input type="checkbox">` which controls the state of the sheet.
2. A `<label>` serving as the trigger button (`Get Started`).
3. An overlay `<label>` that closes the sheet when clicked.
4. The bottom sheet `<aside>` container.

*(Note: A tiny snippet of JavaScript is included in the demo solely to ensure the spacebar/enter key can trigger the label properly for screen reader and keyboard-only users since this is a known limitation of the `<label>` element).*

### CSS Ripple
The ripple effect is achieved using a pseudo-element (`::after`) on the `.ease-btn-ripple` class. It scales from 0 to 1 on `:active` and fades out using the `ease-ripple-out` keyframe animation when the state changes.

## Usage Guide
See `demo.html` for a full working example.

### Key CSS Variables to Override
You can easily theme the component by modifying these variables in the `:root`:
- `--primary-color`: The main brand color (default: indigo)
- `--primary-hover`: The hover state for buttons
- `--bg-main`: Landing page background color
- `--sheet-bg`: Background color of the bottom sheet itself
- `--ease-out-quint`: The primary easing curve for the slide up animation
