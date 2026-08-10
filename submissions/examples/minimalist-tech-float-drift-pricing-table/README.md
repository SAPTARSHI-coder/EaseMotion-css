# CSS Float-Drift Pricing Table (Minimalist Tech)

A pure CSS interactive pricing table component designed for Minimalist Tech Layouts. It features a continuous, staggered "Float-Drift" animation, where the pricing cards slowly bob up and down, giving the interface a dynamic, weightless feel.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, robust typography hierarchy for pricing numbers, and distinct accent-colored headers over a sterile `f8fafc` background.
- **The Float-Drift Effect**: 
- A dedicated utility class `.float-drift` handles the animation on the `.pricing-card` elements.
- The effect utilizes an `@keyframes` animation (`drift-float`) that translates the cards continuously along the Y-axis (`translateY(0)` to `translateY(-15px)`).
- We set the animation to run `infinite` and `alternate` with a long duration (`6s ease-in-out`), creating a smooth, slow, and relaxing floating motion.
- **Staggered Delays**: We utilize staggered `animation-delay` utility classes (`.drift-delay-1`, `.drift-delay-2`, etc.) with *negative* values (e.g., `-2s`, `-4s`). Using negative delays forces the animations to start immediately upon page load but at different points in their timeline, ensuring the cards float out of sync with each other organically.
- **Hover Pause**: We apply `animation-play-state: paused` on `:hover` to the floating cards, ensuring the text remains perfectly legible and stable while the user is actively reading or trying to click a button.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous floating keyframes are completely disabled, safely falling back to a static grid layout.

## Usage
Open `demo.html` in your browser. You will see a three-tier Cloud Subscriptions pricing table. Observe how the cards slowly drift up and down out of sync with each other. Hover your mouse over any card to temporarily pause its drift, allowing for easy reading of the feature list.

## Files
- `demo.html`: The HTML structure for the grid, detailing the application of the `.float-drift` and staggered `.drift-delay-*` utility classes.
- `style.css`: The styling, minimalist tech design tokens, the highlighted tier structural adjustments, and the continuous floating keyframes logic.
