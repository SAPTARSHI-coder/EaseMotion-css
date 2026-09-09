# Animated Checkbox with Checkmark

## Description
A modern, accessible, and highly satisfying custom checkbox component. It replaces the default browser checkbox with a beautifully styled box that smoothly transitions colors when checked. It features an SVG checkmark that elegantly "draws" itself using `stroke-dashoffset` animations, along with a subtle bouncy scale effect. It requires absolutely zero JavaScript.

## Files
- `demo.html`: Contains the semantic HTML structure using a hidden native checkbox, a visual wrapper, and an inline SVG.
- `style.css`: Contains the custom styling, the bouncy pop keyframes, and the SVG stroke drawing animation.

## How to use
1. Open `demo.html` in your browser and click the checkboxes to see the smooth drawing and pop effects.
2. Copy the HTML and CSS into your project.
3. Wrap your native `<input type="checkbox">` inside a `<label>` with the `.custom-checkbox-qn` class.
4. Ensure the visual box (`.checkbox-mark-qn`) and the text (`.checkbox-label-qn`) are siblings of the input.
5. **Customization:**
   - **Primary Color:** Change the checked background and border color by modifying `#3b82f6` in the `:checked` state.
   - **Box Size:** Adjust the `width` and `height` in `.checkbox-mark-qn` (remember to also adjust the SVG size in `.check-icon-qn`).
   - **Border Radius:** Change the `border-radius` in `.checkbox-mark-qn` to make it more square or completely round.
   - **Animation Speed:** Tweak the transition durations in `.checkbox-mark-qn` and `.check-icon-qn`.