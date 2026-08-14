# CSS Glitch-Flicker Navbar (Product Catalog)

A pure CSS navigation bar component designed for Product Catalog Layouts, specifically catering to tech, hardware, or cyberpunk aesthetics. It features an intense, kinetic "Glitch-Flicker" animation on hover and a toggleable global glitch mode without any JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for hover effects or global state toggling).
- **Tech Hardware Aesthetic**: Utilizes the `Share Tech Mono` font, a deep space background (`#0a0a0c`), sharp borders, and cyan/magenta accent colors to evoke a high-end PC component or cyberpunk feel. The navbar sticks to the top of the viewport with a frosted glass effect (`backdrop-filter`).
- **The Glitch Hover Effect**: 
- Applied to links and buttons using the `.glitch-hover` class.
- The effect uses the HTML `data-text` attribute to create two CSS pseudo-elements (`::before` and `::after`) that duplicate the text content.
- These pseudo-elements are colored with cyan and magenta `text-shadows` and are "sliced" horizontally using complex `clip-path: polygon()` polygons.
- On hover, these pseudo-elements rapidly shift their `clip-path` boundaries and `transform: translate()` coordinates via two separate, reversed `@keyframes` animations (`glitch-anim-1`, `glitch-anim-2`), creating a chaotic visual tear.
- **Pure CSS State Management (Toggleable Glitch Mode)**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#glitch-toggle`) is controlled by the lightning bolt toggle button.
- When checked (`:checked ~ .catalog-navbar`), it applies an infinite `navbar-flicker` animation to the entire navbar, occasionally dropping opacity and flashing cyan/magenta box-shadows. It also permanently activates the glitch animation on the brand logo.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, all pseudo-element tearing, color shifting, and navbar flickering animations are completely disabled (`display: none` and `animation: none`).

## Usage
Open `demo.html` in your browser. You will see a dark, sticky navbar at the top of a product grid layout. 
1. **Hover Effect**: Hover your mouse over any of the navigation links (Laptops, Components, etc.) or the Cart button to see the text violently glitch with cyan and magenta slices.
2. **Global Toggle**: Click the lightning bolt icon in the navbar. This activates the global glitch mode, causing the entire navbar to sporadically flicker and permanently glitching the main "NEUROGEAR" logo.

## Files
- `demo.html`: The HTML structure for the navbar, detailing the use of `data-text` attributes required for the CSS pseudo-element duplication, and the checkbox hack for the global toggle.
- `style.css`: The styling, tech fonts, sticky positioning, and the complex `@keyframes` utilizing `clip-path` and `transform` to simulate digital distortion.
