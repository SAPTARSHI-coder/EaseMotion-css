# Animated Horizontal Progress Bar

## Description
A clean, modern, and fully animated horizontal progress bar component. It features smooth fill animations with gradient backgrounds, a subtle shimmer effect overlay, and animated percentage labels. The bars fill in a staggered sequence for a polished cascading effect. Built entirely with pure CSS using custom properties and `@keyframes`, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for four progress bars with different skill levels.
- `style.css`: Contains the layout, gradient styling, fill animations, shimmer effect, and staggered delays.

## How to use
1. Open `demo.html` in your browser to see the smooth cascading fill animations.
2. Copy the HTML and CSS into your project.
3. Wrap your progress bar in a `.progress-wrapper-qn` div, including the header and bar elements.
4. **Customization:**
   - **Percentage:** To change the fill percentage, create a new class (e.g., `.progress-50-qn`) and set the `--progress-width` custom property: `--progress-width: 50%;`
   - **Gradient Colors:** Change the `background` in `.progress-fill-qn` to use different gradient colors.
   - **Animation Speed:** Adjust the `1.5s` duration in the `fill-bar-qn` keyframes.
   - **Bar Height:** Modify the `height: 10px` in `.progress-bar-qn` to make it thicker or thinner.
   - **Stagger Timing:** Adjust the `animation-delay` values on the progress classes to change the cascading effect.

## Adding New Progress Bars
To add a new progress bar with a different percentage:
1. Add a new class in CSS: `.progress-50-qn { --progress-width: 50%; animation-delay: 0.5s; }`
2. Apply it to the `.progress-fill-qn` element in HTML.
3. Update the percentage text in the `.progress-percent-qn` span.