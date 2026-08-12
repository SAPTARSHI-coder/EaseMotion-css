# CSS Float-Drift Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a continuous "Float-Drift" animation designed to indicate an ongoing background process like syncing or uploading.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean layouts, slightly translucent background for a frosted glass effect (`backdrop-filter: blur(8px)`), a subtle accent border, and semantic iconography.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#toast-trigger`) controls the visibility state of the toast notification.
- The "Start Synchronization" button acts as a `<label>` to check the box (show the toast).
- The "Dismiss" (X) button inside the toast acts as another `<label>` to uncheck the box (hide the toast).
- **The Float-Drift Animation System**: 
- Once the toast container becomes visible (handled by a standard `transition` on the wrapper), a continuous `@keyframes` animation (`drift-bob`) begins on the inner `.toast-notification` element.
- This animation utilizes a slow, infinite `ease-in-out` timing function to gently translate the toast up and down (`translateY(0)` to `translateY(-8px)`), simulating a floating or drifting effect in a 3D space.
- To reinforce the active state, an infinite indeterminate progress bar sweeps across the bottom (`progress-slide`), and the sync icon pulses and rotates (`pulse-rotate`).
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous floating, pulsing, and sliding animations are completely disabled. The toast simply appears statically on screen. The entrance is simplified to a fast opacity fade without spatial movement.

## Usage
Open `demo.html` in your browser. You will see a "Sync Status" dashboard. Click the "Start Synchronization" button. A toast notification will appear in the top right corner. Notice how the toast gently bobs up and down continuously, indicating that the synchronization process is active. You can click the "X" button within the toast to dismiss it instantly.

## Files
- `demo.html`: The HTML structure for the toast container and notification content, detailing the checkbox hack setup and the nested structure allowing independent entrance transitions and infinite floating animations.
- `style.css`: The styling, tech design tokens, frosted glass effects, and the specific `@keyframes` driving the infinite floating, pulsing, and sliding logic.
