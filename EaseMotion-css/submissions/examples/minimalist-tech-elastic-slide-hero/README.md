# CSS Elastic-Slide Hero Section (Minimalist Tech)

A pure CSS interactive hero section component designed for Minimalist Tech Layouts. It features a highly physical "Elastic-Slide" entrance animation, where typographic elements and visual assets slide in horizontally, overshooting their targets slightly before snapping tightly into place, mimicking the tension of a stretched rubber band.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, massive sharp `Inter` typography for headers, and a stark contrast between the bright `f8fafc` background and the dark `#0f172a` code editor visual.
- **The Elastic-Slide Entrance Effect**: 
- A dedicated utility class `.elastic-slide` handles the entrance animation on the hero elements.
- The initial state of the left-side text elements is pushed off horizontally via `transform: translateX(-80px)`. The right-side visual element starts at `translateX(80px)`.
- When triggered, an `@keyframes` animation (`elastic-slide-entrance`) translates the elements to their final resting position of `translateX(0)` while fading to `opacity: 1`. 
- The "Elastic" feel is entirely driven by a complex `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. Because the final value `1.275` exceeds `1.0`, it forces the browser to mathematically overshoot the final `translateX(0)` position during the animation, before rapidly pulling it back into place, creating a highly physical "spring" effect.
- **Cascading Delays**: We utilize staggered `animation-delay` utility classes (`.delay-1` through `.delay-5`) incremented by `0.15s`. This ensures the badge, title, subtitle, buttons, and finally the visual element build onto the screen sequentially.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) to allow users to toggle the animation state to replay the entrance effect without needing to refresh the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the rapid elastic translation is completely disabled, safely falling back to a simple, immediate opacity cross-fade entrance.

## Usage
Open `demo.html` in your browser. You will see a mock Serverless Compute hero section. Upon load, the typographic elements will rapidly slide in from the left, while the dark code window slides in from the right. Watch closely as each element slightly overshoots its final position before snapping into place. You can click the "Reload Hero Section" button to immediately re-trigger the sequence.

## Files
- `demo.html`: The HTML structure for the hero section, detailing the application of the `.elastic-slide` and staggered `.delay-*` utility classes.
- `style.css`: The styling, minimalist tech design tokens, the custom `Fira Code` font implementation for the code window, the complex `cubic-bezier` timing logic, and the staggered keyframe delays driving the cascading elastic build.
