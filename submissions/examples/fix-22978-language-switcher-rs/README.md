# Animated Language Switcher

## Issue
**Issue #22978**: [React] Build animated language/locale switcher component

## Description
This submission provides a pure CSS animated language switcher dropdown. Using the hidden checkbox hack, the dropdown can be toggled without JavaScript. The animation features a smooth scale and translateY transition combined with opacity changes for a very premium feel.

## Implementation Details
- **HTML (`demo.html`)**: Implements the structural layout with an `<input type="checkbox" hidden>` connected to a `<label>` button.
- **CSS (`style.css`)**: 
  - `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);` creates a bouncy, smooth reveal.
  - Arrow icon rotation is tied to the `:checked` state.
  - High-quality dark mode styling and hover states.

## Verification
Open `demo.html` in a web browser. Click the language button to see the dropdown animate in smoothly. Click again to see it animate out.
