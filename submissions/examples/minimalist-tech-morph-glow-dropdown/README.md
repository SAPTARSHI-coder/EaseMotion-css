# CSS Morph-Glow Dropdown (Minimalist Tech)

A pure CSS interactive dropdown component designed for Minimalist Tech Layouts. It features a sophisticated "Morph-Glow" entrance animation, where the menu structurally morphs from a small, highly rounded pill shape into a full rectangular menu, followed by a continuous ambient blue glow.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, distinct accent-colored icon boxes, and categorized sections separated by subtle borders.
- **State Management**: The opening and closing of the dropdown is handled entirely via a hidden checkbox hack (`<input type="checkbox">`). A `<label>` acts as the trigger button.
- **The Morph-Glow Entrance Effect**: 
- A dedicated utility class `.morph-glow` handles the animation on the dropdown menu container.
- We chain two `@keyframes` animations when the menu is opened.
- The first animation (`menu-morph`) handles the structural entrance. The menu starts small and highly rounded (`transform: scale(0.6)`, `border-radius: 40px`). It then scales up and morphs its `border-radius` down to `12px`. We use a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function to give this morph a physical, elastic pop.
- The second animation (`ambient-glow`) runs infinitely (`infinite alternate`) after the morph finishes. It pulses a soft, tech-blue `box-shadow` to visually indicate that the menu is active and awaiting interaction.
- The inner menu content has a slight delayed fade-in (`content-fade`) to ensure the text doesn't look squished during the initial morph phase.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the morphing scale, shape changes, and infinite glow are completely disabled, safely falling back to a simple, immediate opacity fade and a static drop shadow.

## Usage
Open `demo.html` in your browser. You will see a mock "Deploy Project" action button. Click the button to toggle the dropdown. Watch closely as the menu expands and morphs its shape, followed by the soft blue ambient glow. Click the button again to close it.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the pure CSS checkbox hack setup required for JS-free state management.
- `style.css`: The styling, minimalist tech design tokens, the chained `@keyframes` driving the morph and glow effects, and the delayed content fade logic.
