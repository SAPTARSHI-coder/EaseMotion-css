# Animated Hamburger Menu Icon

## Description
A smooth, interactive hamburger menu icon that transforms into an "X" (close) icon when clicked. This demo uses the pure CSS "checkbox hack" to toggle states without requiring any JavaScript. It features a bouncy `cubic-bezier` transition for a highly polished, organic feel.

## Files
- `demo.html`: Contains the HTML structure using a hidden checkbox and label for the toggle mechanism.
- `style.css`: Contains the styling, transitions, and transform keyframes for the bars.

## How to use
1. Open `demo.html` in your browser and click the icon to see the animation.
2. **For real-world projects:** While this demo uses the checkbox hack for pure CSS functionality, in a production environment, you would typically use a `<button>` element and toggle an `.is-active` class using a few lines of JavaScript.
3. **Customization:**
   - Change the bar color by modifying the `background-color` in `.bar-qn`.
   - Adjust the size by changing the `width` and `height` in `.hamburger-qn` (Note: if you change the height, you must also update the `translateY` values in the `:checked` states to match half of the new height).
   - Change the animation speed or bounce by adjusting the `transition` property in `.bar-qn`.