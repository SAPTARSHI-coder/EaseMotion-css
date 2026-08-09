# CSS Ripple-Wave Tabs (Minimalist Tech)

A pure CSS interactive tabs component designed for Minimalist Tech Layouts. It features a tactile "Ripple-Wave" click effect on the tab headers, alongside smooth sliding indicators and panel transitions.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **State Management**: The active tab and corresponding panel are managed entirely via the hidden radio button hack (`input[type="radio"]:checked`).
- **The Ripple-Wave Effect**: When a user clicks a `<label>` linked to a radio input, the radio becomes `:checked`. This state change natively triggers an `@keyframes` animation (`ripple-wave`) on a hidden `.ripple-element` nested inside the label.
- The ripple starts perfectly centered (`top: 50%; left: 50%; transform: translate(-50%, -50%)`) with `0` width/height and full opacity. Over `0.6s`, it expands massively while fading out, simulating a classic material ripple without needing JS to calculate the exact click coordinates.
- **Sliding Indicator**: The `.active-indicator` underline utilizes the sibling combinator (`~`) and `transform: translateX()` to smoothly slide between the active tabs based on which radio input is currently checked.
- **Panel Transitions**: The content panels smoothly slide up (`translateY(10px)` to `0`) and fade in when their corresponding tab is activated.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and properly styled mock settings form elements.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the expanding ripple animation and the sliding indicator transitions are completely disabled. The interactions safely fall back to immediate visual state changes without motion.

## Usage
Open `demo.html` in your browser. You will see a mock account settings dashboard. Click on the "Notifications" or "Security" tabs. Watch as the blue active indicator smoothly slides over, the new panel fades into view, and a soft blue ripple expands outwards from the center of the clicked tab header.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical placement of the hidden `<input type="radio">` elements as siblings to both the `.tab-headers` and `.tab-content-wrapper`.
- `style.css`: The styling, radio-state logic, and the `@keyframes` driving the expanding ripple effect.
