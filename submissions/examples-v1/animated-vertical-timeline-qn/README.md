# Animated Vertical Timeline

## Description

A clean, modern, and fully animated vertical timeline component. It features a vertical line that draws itself from top to bottom, accompanied by dots that pop in and content cards that slide in from the left. The animations are perfectly staggered to create a smooth, cascading reveal effect as the page loads. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files

- `demo.html`: Contains the semantic HTML structure for the timeline line, dots, and content cards.
- `style.css`: Contains the layout, the line drawing animation, the dot pop keyframes, and the staggered content slide-in animations.

## How to use

1. Open `demo.html` in your browser to see the smooth cascading load animation.
2. Copy the HTML and CSS into your project.
3. Wrap your timeline items inside a `.timeline-container-qn` div, and include the `.timeline-line-qn` div at the top.
4. **Customization:**
   - **Theme Color:** Change the primary blue (`#3498db`) in the CSS to match your brand's color. This affects the line, dots, borders, and date badges.
   - **Animation Speed:** Adjust the `1.5s` duration in `draw-line-qn` and the `0.6s` in `slide-in-content-qn`. Ensure you also adjust the `animation-delay` values on the items to keep them synchronized.
   - **Spacing:** Modify the `margin-bottom: 40px` in `.timeline-item-qn` to make the timeline more compact or more spread out.
   - **Adding Items:** To add more items, simply duplicate a `.timeline-item-qn` block. Be sure to add a new `nth-child` rule in the CSS to assign it the correct `animation-delay` so it stays in sync with the line drawing.
