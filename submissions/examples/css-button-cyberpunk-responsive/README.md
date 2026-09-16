# Cyberpunk Responsive Button

A pure CSS button component heavily inspired by the neon, high-tech aesthetics of Cyberpunk 2077. It utilizes aggressive angular geometry, high-contrast neon palettes, and a complex CSS text-glitch animation on hover.

## Features

- **Angular Geometry (`clip-path`)**: The distinct angled corner of the button is achieved cleanly using the CSS `clip-path: polygon(...)` property, avoiding the need for background images or complex HTML structures.
- **CSS Glitch Animation**: 
  - On hover, a visually hidden `<span>` containing duplicate text becomes visible.
  - An aggressive `@keyframes glitch` animation manipulates the `clip-path` and `transform: translate` of this duplicate text multiple times a second, creating a realistic digital distortion/glitch effect.
  - Text-shadows in neon blue and red (`#00f0ff` and `#ff003c`) add chromatic aberration to the glitch.
- **Cyberpunk Palette**: Uses the iconic high-vis yellow (`#fcee0a`), cyan, and red colors. On hover, the button base swaps to neon cyan.
- **Responsive Design**: Includes a `@media` query that automatically scales the button padding/font size for mobile devices and hides decorative overflow elements (the "R25" side tag) to prevent horizontal scrolling on small screens.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the inner spans (`<span aria-hidden="true" class="cybr-btn__glitch">...</span>`) contain the exact same text as the button itself to make the glitch effect work seamlessly.
