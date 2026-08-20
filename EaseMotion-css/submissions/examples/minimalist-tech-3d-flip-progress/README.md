# CSS 3D-Flip Progress Bar (Minimalist Tech)

A pure CSS interactive progress bar component designed for Minimalist Tech Layouts. It features a continuous, staggered "3D-Flip" segmented overlay animation playing across the filled portion of the bar, simulating data processing or network activity.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Minimalist Aesthetic**: Clean layout, sharp borders, and distinct blue/purple/pink accent colors over a sterile `f8fafc` background.
- **State Management**: The triggering of the progress bars is handled entirely via the hidden checkbox hack (`<input type="checkbox">`). The "Start Epoch" buttons are `<label>` elements wired to these hidden inputs.
- **The 3D-Flip Effect**: 
- Inside the `.progress-fill` (which expands horizontally to the `--target-width`), we nest an absolutely positioned `.flip-overlay` utilizing CSS `perspective`.
- This overlay contains a row of 8 `.flip-segment` divs, which are styled as semi-transparent white boxes.
- When the bar is triggered, an `@keyframes` animation (`flip-3d`) is fired on the segments. This animation uses `transform: rotateX()` to flip the segments on their horizontal axis, mimicking a mechanical display or active data flow.
- We utilize the `:nth-child()` selector and staggered `animation-delay` offsets (0.0s, 0.2s, 0.4s, etc.) across the 8 segments to create a continuous, cascading wave of 3D flips running left-to-right.
- Because the parent `.progress-fill` has `overflow: hidden`, the flipping overlay is only ever visible on the *completed* portion of the bar, giving the illusion that the filled area itself is mechanically active.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D flipping keyframes and the width expansion are completely disabled, immediately rendering the final state width with a static color fill without any visual stutter or motion.

## Usage
Open `demo.html` in your browser. You will see three mock System Diagnostics cards. Click the Trigger buttons. Observe how the progress bars stretch out to their target widths, while a cascading, staggered wave of 3D-flipping segments continuously animates across the filled area.

## Files
- `demo.html`: The HTML structure for the layout, detailing the `<input type="checkbox">` setup alongside the nested `.flip-overlay` and `.flip-segment` nodes required for the 3D effect.
- `style.css`: The styling, minimalist tech design tokens, the CSS `perspective` logic, and the staggered `animation-delay` setup driving the cascading 3D wave.
