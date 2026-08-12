# Animated Circular Progress Ring

## Description
A smooth, animated circular progress indicator built with pure CSS and SVG. It uses the `stroke-dasharray` and `stroke-dashoffset` properties to animate the filling of an SVG circle. This is perfect for dashboards, stat cards, or loading states, and requires absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure with an SVG (for the track and fill) and a text span for the percentage.
- `style.css`: Contains the SVG styling, the circumference calculations, and the `stroke-dashoffset` animation keyframes.

## How to use
1. Open `demo.html` in your browser to see the smooth filling animation.
2. Copy the HTML and CSS into your project.
3. **Customization & Math:**
   - **Change the Percentage:** The animation relies on the circle's circumference. 
     - Formula: `Circumference = 2 * π * radius` (In this demo: `2 * 3.14159 * 60 = 376.99`).
     - To change the target percentage (e.g., to 50%), calculate the new offset: `Circumference * (1 - percentage)`. 
     - For 50%: `376.99 * 0.5 = 188.49`. Update the `100%` keyframe in `@keyframes fill-progress-qn` to `94.24` (for 75%) or your new calculated value.
   - **Change the Size:** If you change the `r` (radius) in the SVG, you must recalculate the circumference and update `stroke-dasharray` and the keyframes accordingly.
   - **Change the Color:** Modify the `stroke` color in `.progress-ring-fill-qn`.
   - **Animation Speed:** Adjust the `1.5s` duration in the `animation` property of `.progress-ring-fill-qn`.