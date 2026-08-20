# CSS Elastic-Slide Progress Bar (Glassmorphism UI)

A pure CSS interactive progress bar component designed for Glassmorphism UI Layouts. It features a highly dynamic "Elastic-Slide" entrance animation, causing the progress bar fill to aggressively overshoot its target before snapping back into place like a rubber band.

## Features
- Pure CSS and HTML (No JavaScript required for animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over glowing, ambient background orbs (`.bg-orb`).
- **Dynamic CSS Variables**: The target width of the progress bar is controlled via an inline CSS variable (`style="--target-width: 84%;"`). The `@keyframes` animation reads this variable directly to calculate the overshoot math via `calc()`. This allows the exact same CSS class to be used for any percentage value dynamically.
- **The Elastic-Slide Effect**: 
- When the bar loads, an `@keyframes` animation (`elastic-slide`) is triggered on the `.progress-fill`.
- Using a custom `cubic-bezier(0.5, -0.5, 0.3, 1.5)` alongside the `calc(var(--target-width) + 15%)` keyframe, the bar rapidly shoots past its intended width, snaps backwards, and finally settles on its precise target.
- The `.fill-head` acts as a bright, glowing orb positioned exactly at the leading edge of the progress bar (`transform: translate(50%, -50%)`), enhancing the kinetic energy of the rubber-band effect.
- **Replay Button Hack**: Includes a hidden `<input type="checkbox">` and `<label>` acting as a replay button. Toggling the checkbox swaps the animation between two identical keyframes (`elastic-slide` and `elastic-slide-alt`), tricking the browser into re-triggering the entrance animation purely via CSS.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive elastic overshooting and bouncing bezier curves are completely stripped. The interaction safely falls back to a clean, linear fill transition.

## Usage
Open `demo.html` in your browser. You will see a mock data migration dashboard. When the page loads, the green progress bar rapidly shoots across the track, overshoots its 84% target, and snaps back elastically. You can click the small replay icon located above the track to trigger the pure CSS animation again.

## Files
- `demo.html`: The HTML structure for the layout, detailing the CSS variable injection for `--target-width` and the hidden checkbox hack for the replay button.
- `style.css`: The styling, glassmorphism tokens, and the dynamic `calc()` based `@keyframes` driving the elastic rubber-band mechanics.
