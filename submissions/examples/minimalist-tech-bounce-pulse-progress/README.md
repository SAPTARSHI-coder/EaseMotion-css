# CSS Bounce-Pulse Progress Bar (Minimalist Tech)

A pure CSS interactive progress bar component designed for Minimalist Tech Layouts. It features a fast, bouncy filling animation that immediately transitions into a continuous, glowing "Pulse" effect once the target width is reached, signifying ongoing completion or operation.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Minimalist Aesthetic**: Clean layout, sharp borders, and distinct blue/purple/pink accent colors over a sterile `f8fafc` background.
- **State Management**: The triggering of the progress bars is handled entirely via the hidden checkbox hack (`<input type="checkbox">`). The "Execute" buttons are `<label>` elements wired to these hidden inputs.
- **The Bounce-Pulse Effect**: 
- We achieve this by chaining two distinct `@keyframes` animations on the `.progress-fill` element.
- The first animation (`fill-bounce`) expands the width from `0%` to a dynamically set inline CSS variable (`--target-width`). It utilizes a `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function to give the fill a physical "bounce" as it hits the target. This phase takes `0.6s`.
- The second animation (`continuous-pulse`) is chained to start exactly when the first one finishes (`0.6s` delay). 
- This second animation runs infinitely (`infinite alternate`), pulsing a colored `box-shadow` in and out.
- To keep the code clean, we use a custom CSS variable (`--pulse-color`) on each color modifier class (e.g., `.color-purple`), allowing a single `@keyframes` block to handle glowing in different colors based on the parent's assigned theme.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bounce width expansion and the continuous pulsing shadow are completely disabled, immediately rendering the final state width without any visual stutter or motion.

## Usage
Open `demo.html` in your browser. You will see three mock System Operations cards. Click the "Execute" buttons. Observe how the progress bars stretch out rapidly, hit their targets with a slight bounce, and immediately begin softly glowing/pulsing to indicate that the operation is actively running at that completion level.

## Files
- `demo.html`: The HTML structure for the layout, detailing the `<input type="checkbox">` setup alongside the `--target-width` inline variable usage on the `.bounce-pulse` classes.
- `style.css`: The styling, minimalist tech design tokens, the custom `--pulse-color` logic, and the complex animation chaining driving the bouncy entrance into an infinite pulse.
