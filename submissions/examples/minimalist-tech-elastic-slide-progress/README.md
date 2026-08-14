# CSS Elastic-Slide Progress Bar (Minimalist Tech)

A pure CSS interactive progress bar component designed for Minimalist Tech Layouts. It features a playful, bouncy "Elastic-Slide" filling animation that overshoots its target width before snapping back into place.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Minimalist Aesthetic**: Clean layout, sharp borders, and distinct blue/purple/pink accent colors over a sterile `f8fafc` background.
- **State Management**: The triggering of the progress bars is handled entirely via the hidden checkbox hack (`<input type="checkbox">`). The "Load Data" buttons are `<label>` elements wired to these hidden inputs.
- **The Elastic-Slide Effect**: 
- The magic behind this effect relies entirely on a custom `cubic-bezier` timing function applied to the `@keyframes` width expansion.
- When triggered, the `.progress-fill` fires an animation (`elastic-slide-fill`) that expands its width from `0%` to a dynamically set CSS variable (`--target-width`).
- The timing function is set to `cubic-bezier(0.68, -0.55, 0.265, 1.55)`. The final value (`1.55`) exceeds the standard 0-1 range, mathematically forcing the browser to render the width *past* the `--target-width` momentarily before snapping it back, simulating physical elasticity.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the elastic width expansion keyframes are completely disabled, immediately rendering the final state width without any visual stutter or motion.

## Usage
Open `demo.html` in your browser. You will see three mock System Quota cards. Click the "Load Data" buttons. Observe how the progress bars stretch out rapidly, visibly overshoot their target percentages, and then spring back into their final positions like a rubber band.

## Files
- `demo.html`: The HTML structure for the layout, detailing the `<input type="checkbox">` setup alongside the `--target-width` inline variable usage on the `.elastic-slide` classes.
- `style.css`: The styling, minimalist tech design tokens, and the complex `cubic-bezier` logic driving the elastic overshoot mechanics.
