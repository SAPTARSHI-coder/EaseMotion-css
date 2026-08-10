# Typewriter Text Effect

## Description
A pure CSS typewriter animation that simulates text being typed out character by character, complete with a blinking cursor. This effect is achieved using CSS `steps()` timing functions and the `ch` (character) unit, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the text container.
- `style.css`: Contains the styling, `steps()` animation, and blinking cursor keyframes.

## How to use
1. Open `demo.html` in your browser to see the effect.
2. Copy the HTML and CSS into your project.
3. Apply the `.typewriter-qn` class to your text element (e.g., `<h1>` or `<p>`).
4. **Crucial Customization Step:** 
   - The animation relies on the `ch` unit. You **must** count the exact number of characters in your text (including spaces and punctuation).
   - Update the `steps(X, end)` and `width: Xch` values in the CSS to match your exact character count.
5. Change the text and cursor color by modifying the `color` and `border-right` properties.