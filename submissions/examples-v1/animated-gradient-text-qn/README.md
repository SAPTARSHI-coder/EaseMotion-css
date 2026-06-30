# Animated Gradient Text

## Description

A modern, eye-catching typography effect where a vibrant color gradient smoothly and continuously flows through the text. This is achieved purely with CSS by using `background-clip: text` to mask a moving `linear-gradient` behind transparent text. It requires absolutely zero JavaScript.

## Files

- `demo.html`: Contains the simple HTML structure for the text element.
- `style.css`: Contains the gradient setup, text-clipping properties, and the shifting keyframe animation.

## How to use

1. Open `demo.html` in your browser to see the flowing gradient effect.
2. Copy the HTML and CSS into your project.
3. Apply the `.gradient-text-qn` class to any text element (e.g., `<h1>`, `<h2>`, or `<span>`).
4. **Customization:**
   - **Colors:** Change the gradient colors in the `linear-gradient` property. _Crucial:_ Ensure the first and last color stops are exactly the same (e.g., `#ff0076` at 0% and 100%) to maintain a seamless infinite loop.
   - **Speed:** Adjust the `4s` duration in the `animation` property to make the flow faster or slower.
   - **Direction:** Change `90deg` in the `linear-gradient` to alter the angle of the gradient (e.g., `45deg` for a diagonal flow).
