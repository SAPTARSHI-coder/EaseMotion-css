# Custom Animated Checkboxes and Radio Buttons

A completely CSS-only solution for creating beautiful, accessible, and animated custom checkboxes and radio buttons.

## Features

- **CSS-Only**: No JavaScript required for interactions or animations.
- **Accessible**: Uses `opacity: 0` to visually hide native inputs while preserving complete keyboard navigation, focus states, and screen reader compatibility.
- **Animated**: Smooth, bouncing animations when selecting options.
- **Themable**: Includes CSS variables and variations for primary, success, and error states.

## How it works

1. The native `<input>` element is placed visually over the control but made transparent (`opacity: 0`). This ensures all native interactions (click, spacebar, tab focus) still work.
2. The adjacent `<label>` is styled with a `::before` pseudo-element to represent the outer box or circle.
3. The `::after` pseudo-element represents the checkmark (using CSS borders) or radio dot.
4. Using the `:checked` pseudo-class and the adjacent sibling selector (`+`), the `::before` and `::after` pseudo-elements are animated when the input state changes.

## Usage

Check `demo.html` and `style.css` for implementation details.
