# CSS Float-Drift Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It features a continuous "Float-Drift" animation, where badges gently drift along multiple axes, creating an organic, ambient feeling perfect for data visualization maps or floating UI elements.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean pill-shaped layout, sharp `Inter` typography, distinct semantic color variants, and inner data pills (`.badge-count`).
- **The Float-Drift Effect**: 
- A dedicated utility class `.float-drift` handles the continuous ambient animation.
- An infinite `@keyframes` animation (`drift`) translates the badge across both the X and Y axes (`transform: translate(x, y)`). By using a multi-point keyframe structure (0%, 25%, 50%, 75%, 100%), the badge traces an irregular, organic path rather than a simple up/down hover, mimicking an object suspended in fluid or drifting in space.
- The animation duration is intentionally set long (`6s`) with an `ease-in-out` timing function to ensure the movement feels ambient and relaxed, rather than distracting.
- **De-syncing the Animation**: To prevent multiple floating badges from moving in perfect unison (which looks artificial), we utilize an `animation-delay` utility class (`.delay-drift`). By applying a *negative* delay (`-3s`), the animation immediately starts halfway through its cycle on page load, instantly de-syncing it from its siblings without making the user wait for a delay to finish.
- **Interaction**: Hovering over a drifting badge pauses its animation (`animation-play-state: paused`) and brings it to the front (`z-index: 20`), allowing users to comfortably click or inspect it.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous drifting animation is completely disabled, safely falling back to a static layout with a standard vertical lift on hover.

## Usage
Open `demo.html` in your browser. You will see a mock "Cloud Environments" map. Observe the badges orbiting the central node; they will gently drift along organic paths. Notice how the green "Worker-Pool" badge moves out of sync with the blue badges. Hover over any drifting badge to pause its movement.

## Files
- `demo.html`: The HTML structure for the badges, showcasing how to position them absolutely within a map container and apply the desync delay classes.
- `style.css`: The styling, minimalist tech design tokens, the specific `@keyframes` defining the multi-axis organic path, and the negative delay logic for desyncing animations.
