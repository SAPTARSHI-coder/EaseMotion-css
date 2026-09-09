# CSS-Only Glowing Radio Buttons

A set of custom, animated radio buttons featuring a modern, neon cyberpunk aesthetic. Completely built without any JavaScript.

## Features
- ✨ **100% CSS-only**: Uses the native `<input type="radio">` state via the `:checked` pseudo-class to drive the animations and styles.
- 🔵 **Neon Glow Effect**: Selected radio buttons emit a vibrant blue neon glow using `box-shadow` and `text-shadow`.
- ⚡ **Pop-In Animation**: The inner selection dot utilizes a custom `@keyframes` animation with a cubic-bezier timing function for a satisfying "pop" effect.
- ♿ **Accessible**: By keeping the native `<input>` element (hidden via opacity/dimensions), the component remains fully accessible to screen readers and keyboard navigation.

## Files
- `demo.html`: The HTML structure of the radio button group.
- `style.css`: The styling rules that hide the default inputs and style the custom visual spans.

## Usage
Simply copy the HTML structure into your form and link the CSS file. The `:checked` state will automatically apply the glowing styles to the adjacent elements via the `~` general sibling combinator.
