# Animated Notification Bell with Pulsing Badge

## Description
A highly practical and polished notification bell component. It features a continuous, expanding pulse ring around the notification badge to draw the user's attention. Additionally, the bell icon performs a realistic swinging animation when hovered. This is built entirely with pure CSS, requiring zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure with an inline SVG for the bell and a `<span>` for the badge.
- `style.css`: Contains the styling for the bell, the badge, the swinging hover animation, and the continuous pulse ring keyframes.

## How to use
1. Open `demo.html` in your browser. Hover over the bell to see the swing, and watch the badge pulse.
2. Copy the HTML and CSS into your project.
3. Wrap your SVG icon and badge `<span>` inside a `.bell-container-qn` div.
4. **Customization:**
   - **Badge Color:** Change the `background-color` and `box-shadow` in `.badge-qn` and `.badge-qn::after`.
   - **Bell Color:** Change the `color` in `.bell-icon-qn` (since it uses `currentColor` for the SVG stroke).
   - **Pulse Speed:** Adjust the `1.5s` duration in the `animation` property of `.badge-qn::after`.
   - **Swing Intensity:** Modify the degree values (e.g., `15deg`, `-10deg`) in the `swing-bell-qn` keyframes.