# CSS Ink Spread Button

A smart CSS-only button that features an ink-blot spread animation. Unlike basic pure CSS implementations that simply expand from the center, this component utilizes an advanced technique to approximate the exact click point of the user's mouse, without relying on JavaScript event tracking.

## Features
- Pure CSS and HTML (Zero JavaScript required to track click coordinates or trigger animations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--btn-bg`, `--ink-color`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) with built-in dark and light mode definitions.
- **Smart Click Point Approximation (The Grid Hack)**: 
- Historically, having an animation originate from the exact user click point required JS (`event.clientX/Y`).
- This component simulates this effect by laying a 3x3 CSS Grid (`.ink-grid`) of invisible `<label>` elements perfectly over the button's surface.
- Depending on where the user clicks, their mouse hits a specific label, which in turn checks a specific hidden checkbox (`#ink-1`, `#ink-2`, etc.).
- There are 9 corresponding `.ink-blot` circles, pre-positioned at the exact center of each of the 9 grid cells.
- Using CSS sibling selectors (`~`), checking a specific checkbox triggers the `@keyframes` scale animation on the specific ink blot located precisely where the user clicked.
- **Infinite Click Reset Trick**: 
- A common flaw with Checkbox Hack animations is that they only play once (when the box is checked).
- To allow the button to be clicked infinitely, this component defines two identical animations (`spread-anim-a` and `spread-anim-b`).
- One is bound to `:checked` and the other is bound to `:not(:checked)`. This forces the browser to restart the animation entirely every single time the user clicks, regardless of the checkbox's state.
- Fully accessible with `prefers-reduced-motion` support. The ink spread animation is completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see a primary "Click Me" button. Try clicking in the top-left corner, and notice how the white ink spread radiates perfectly outward from the top-left corner. Then click in the bottom-right, and the animation will originate there instead. 

## Files
- `demo.html`: The HTML structure for the component, detailing the 3x3 grid of hidden checkboxes, labels, and pre-positioned ink blots.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics explaining the Grid Hack and the infinite animation reset technique.
