# Animated Toast Notification with Progress Bar

## Description
A modern, interactive toast notification component that slides in from the right, displays a shrinking progress bar to indicate auto-dismissal, and smoothly slides out after a few seconds. It uses the pure CSS "checkbox hack" to trigger the state and `@keyframes` to handle the entire lifecycle (slide in, stay, slide out) automatically. Requires absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using a hidden checkbox, a trigger button, and the toast container with an SVG icon and progress bar.
- `style.css`: Contains the layout, the slide-in/out transitions, the lifecycle keyframes, and the progress bar shrink animation.

## How to use
1. Open `demo.html` in your browser and click the button to see the toast slide in, count down, and slide out.
2. Copy the HTML and CSS into your project.
3. **Customization:**
   - **Duration:** To change how long the toast stays on screen, adjust the `4s` duration in both the `toast-lifecycle-qn` and `progress-shrink-qn` animations. (Ensure they match!).
   - **Colors:** Change the success theme by modifying the `background` in `.toast-icon-qn` and `.toast-progress-qn`, and the `color` in `.toast-icon-qn`.
   - **Position:** Change `bottom: 30px; right: 30px;` in `.toast-container-qn` to move it to the top-left, bottom-left, etc. (Remember to change `translateX(120%)` to `translateX(-120%)` if moving to the left side).
   - **Early Dismissal:** If the user clicks the trigger button again while the toast is visible, the animation is removed and the CSS `transition` smoothly slides it out immediately.