# CSS Shimmer-Sweep Hero Section (Minimalist Tech)

A pure CSS interactive hero section component designed for Minimalist Tech Layouts. It features a striking "Shimmer-Sweep" entrance animation, where a slanted beam of light rapidly sweeps across the entire hero section upon page load, mimicking a metallic or premium glassmorphic reflection.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, massive sharp `Inter` typography for headers, and a stark, highly-technical animated Data Grid visualization.
- **The Shimmer-Sweep Entrance Effect**: 
- A dedicated utility class `.shimmer-sweep` handles the entrance animation on the hero section container.
- The effect utilizes a pseudo-element (`::after`) to create the light beam. We use `linear-gradient` to create a semi-transparent white beam fading out on the edges (`rgba(255, 255, 255, 0.6)` in the center).
- We apply `transform: skewX(-20deg)` to this pseudo-element to create a sharp, slanted leading edge for the light beam.
- The initial state places the beam completely off-screen to the left (`left: -150%`).
- When triggered, an `@keyframes` animation (`shimmer-sweep-entrance`) swiftly translates the pseudo-element across the entire section (`left: 200%`).
- Crucially, we set `pointer-events: none` on the pseudo-element to ensure it never blocks user clicks or interactions while passing over the underlying buttons or text.
- **Continuous Visual Animation**: The right-side visual element features a 4x4 Data Grid with staggered, infinitely pulsing opacity animations (`cell-pulse`) across the cells, creating a highly technical, "processing data" aesthetic without JS.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) to allow users to toggle the animation state to replay the shimmer sweep without needing to refresh the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, both the rapid shimmer sweep and the continuous pulsing data grid are completely disabled, safely falling back to a static grid display.

## Usage
Open `demo.html` in your browser. You will see a mock Performance Analytics hero section. Upon load, a slanted beam of light will rapidly sweep across the entire layout from left to right. You can click the "Reload Hero Section" button to immediately re-trigger the sequence.

## Files
- `demo.html`: The HTML structure for the hero section, detailing the application of the `.shimmer-sweep` class and the structure for the visual Data Grid.
- `style.css`: The styling, minimalist tech design tokens, the complex `::after` pseudo-element and `linear-gradient` logic driving the slanted shimmer beam, and the staggered keyframe delays for the pulsing data grid cells.
