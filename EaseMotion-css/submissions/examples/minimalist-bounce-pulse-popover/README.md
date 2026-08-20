# CSS Bounce-Pulse Popover (Minimalist Tech)

A pure CSS interactive popover component designed for Minimalist Tech Layouts. It features a continuous "Pulse" ring to draw attention to unread notifications, paired with an energetic "Bounce" entrance animation when the popover card is revealed.

## Features
- Pure CSS and HTML (No JavaScript required for animations or hover states).
- **The Pulse Effect**: The `.pulse-ring` element resides behind the trigger button. It utilizes an infinite `@keyframes` animation that scales it from `1` to `1.8` while fading its opacity to `0`. This creates a continuous radar-like pinging effect, perfect for drawing attention to alerts.
- When the user hovers over the trigger, the pulse animation is paused (`animation-play-state: paused`) and hidden to reduce visual noise while reading the notifications.
- **The Bounce Effect**: The `.popover-content` card is initially positioned slightly higher than its final resting place and scaled down (`transform: translateY(-15px) scale(0.9)`). 
- Upon hover, it transitions to its final position using a custom `cubic-bezier(0.34, 1.56, 0.64, 1)`. This timing function forces the transform values to overshoot their targets before snapping back, creating a satisfying, physical "bounce" without requiring complex multi-step keyframes.
- Clean, structured aesthetic utilizing the `Inter` font, distinct unread indicator styling, and custom SVG iconography.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous pulse animation is entirely removed. The spatial translation, scaling, and bouncy entrance of the popover are stripped, gracefully falling back to a safe, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a notification bell icon emitting a continuous blue pulse ring. Hover over the bell to trigger the popover. Watch as the pulse immediately stops, and the notification panel snaps down into place with an elastic bounce. 

## Files
- `demo.html`: The HTML structure for the layout, detailing the nested positioning of the trigger button, the pulse ring, and the popover content within the relative `.popover-container`.
- `style.css`: The styling, continuous `@keyframes` logic, and the custom `cubic-bezier` transitions driving the bounce mechanics.
