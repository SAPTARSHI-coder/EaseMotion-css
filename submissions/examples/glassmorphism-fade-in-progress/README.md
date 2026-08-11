# CSS Fade-In Progress Bar (Glassmorphism UI)

A pure CSS progress bar component designed for Glassmorphism UI Layouts. It features a polished, multi-stage "Fade-In" animation sequence, where the progress bar gently "swells" into existence before revealing a glowing leading edge and a shifting internal pattern.

## Features
- Pure CSS and HTML (No JavaScript required for animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over softly glowing, ambient background orbs (`.bg-orb`).
- **The Staged Fade-In Effect**: 
- When the bar loads, an `@keyframes` animation (`fade-in-progress`) is triggered on the main `.progress-fill` container. 
- Rather than a simple opacity change, the keyframes utilize `transform: scaleX()` originating from the left (`transform-origin: left center`). The bar scales from 50% width up to 100% of its target inline width while fading in, creating a physical "swelling" entrance.
- Nested inside the fill is a `.fill-head` glowing orb positioned at the leading edge. It has its own delayed keyframes (`fade-in-head`), meaning the bar finishes swelling *before* the bright leading-edge highlight pops into view.
- Also nested inside is a `.fill-pattern` featuring a CSS diagonal stripe gradient. It runs a continuous, linear `pattern-shift` animation to simulate active data processing.
- **Replay Button Hack**: Includes a hidden `<input type="checkbox">` and `<label>` acting as a replay button. Toggling the checkbox swaps all animations between two identical keyframe sets, tricking the browser into re-triggering the entire sequence purely via CSS.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the scale swelling, delayed fading, and continuous pattern shifting are completely disabled. The interactions safely fall back to a simple, immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock system diagnostics dashboard. When the page loads, the purple progress bar will smoothly swell into existence from the left. A fraction of a second later, the bright leading edge highlight will fade in, and a subtle striped pattern will continuously scroll across the fill. Click the small replay icon located above the track to trigger the pure CSS sequence again.

## Files
- `demo.html`: The HTML structure for the layout, detailing the fixed inline width and the hidden checkbox hack for the replay button.
- `style.css`: The styling, glassmorphism tokens, and the complex, delayed `@keyframes` driving the staged fade-in mechanics.
