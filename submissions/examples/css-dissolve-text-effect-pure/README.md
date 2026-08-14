# CSS Dissolve Text Effect

A pure CSS implementation of a particle dissolve effect. Hover over the text to watch it scatter into a cloud of blurred particles, achieved entirely without JavaScript or complex SVG filters.

## Features
- Pure CSS and HTML.
- **Component Architecture (Documented in Code)**: 
  - **The Base Animation**: When the main `.dissolve-text` element is hovered, it applies `filter: blur(10px)` and scales down slightly (`transform: scale(0.95)`) while fading its opacity to zero. This hides the solid structural text smoothly.
  - **The Particle Hack**: The magic happens in the `::before` pseudo-element. Using `content: attr(data-text)`, we perfectly clone the text string. We set this clone to `color: transparent`, making the text itself invisible.
  - **The Scattering Shadows**: We apply 8 identical, perfectly stacked `text-shadow` layers to the transparent clone. On hover, a CSS transition targets these shadows, moving them along distinct `X` and `Y` axes outward radially. Simultaneously, we increase the shadow's blur radius and fade its color to `rgba(..., 0)`. Because all 8 shadows animate outward at the same time, it creates the illusion of the word breaking apart into dissolving particles or smoke.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate dark mode aesthetic while correctly adjusting the shadow fade colors to blend into the dark background.
- Fully accessible semantic structure. The text itself is a standard `<h2>` element, entirely readable by screen readers. The particle hack uses a pseudo-element which is safely ignored. Honors the `prefers-reduced-motion` accessibility standard by disabling the shadow explosion for motion-sensitive users, falling back to a simple opacity fade on hover.

## Usage
Open `demo.html` in your browser and hover your cursor over the word to trigger the radial text-shadow particle explosion.

## Files
- `demo.html`: The HTML structure demonstrating the `data-text` attribute injection required for the pseudo-element cloning.
- `style.css`: The styling, state transitions, and the extensive multi-layered `text-shadow` matrix logic.
