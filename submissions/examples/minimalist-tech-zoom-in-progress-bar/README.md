# CSS Zoom-In Progress Bar (Minimalist Tech)

A pure CSS progress bar list component designed for Minimalist Tech Layouts. It features a satisfying, staggered "Zoom-In" entrance animation perfect for illustrating a sequence of initialization or loading tasks.

## Features
- Pure CSS and HTML (Zero JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean layouts, thin progress tracks, and crisp monospace (`JetBrains Mono`) typography for technical task names.
- **The Zoom-In Effect**: 
- The entrance animation is applied to the `.progress-item` containers via the `item-zoom-in` keyframes.
- The initial state of each item is transparent (`opacity: 0`), slightly scaled down (`transform: scale(0.9)`), and pushed down slightly (`translateY(10px)`).
- When triggered, the animation scales the item up to `1` and translates it to `0` using a custom `cubic-bezier(0.175, 0.885, 0.32, 1.1)` timing function. The `1.1` value causes the item to slightly "overshoot" its final size before snapping back, giving the zoom a soft, physical "pop".
- **Cascading Sequence**: To draw the user's eye down the list of tasks, we utilize distinct `animation-delay` utility classes (`.delay-1` through `.delay-4`). This causes the progress bars to pop into view one after another.
- **Active State Pulsing**: The active task features an infinite `@keyframes` opacity pulse (`pulse-opacity`) on its progress fill bar, clearly indicating which task is currently processing.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Sequence" button. This allows users to easily re-trigger the cascading entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial scaling/translating entrance and the infinite active pulse are completely disabled. The entrance safely falls back to a simple, staggered opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "System Initialization" list containing multiple progress bars in various states (Done, In Progress, Waiting). Upon load, the list items will dynamically pop into view sequentially from top to bottom. Notice the subtle throbbing animation on the "In Progress" blue bar. You can click the "Replay Sequence" button to toggle the state and watch the sequence run again.

## Files
- `demo.html`: The HTML structure for the progress list, detailing the pure CSS checkbox hack setup for the replay button, and the application of the specific state variants and staggered delay classes.
- `style.css`: The styling, tech-specific design tokens for the semantic states (indigo, emerald), and the specific `@keyframes` driving the zoom-in logic and the custom bouncy `cubic-bezier`.
