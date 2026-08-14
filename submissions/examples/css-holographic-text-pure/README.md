# CSS Holographic Text

A pure CSS typography effect featuring a shifting, iridescent rainbow gradient masked perfectly to the text shape, generating a 3D glowing hologram aesthetic without JavaScript or SVG filters.

## Features
- Pure CSS and HTML (Zero JavaScript or WebGL required).
- **Component Architecture (Documented in Code)**: 
  - **Background Clip-Text**: We apply a vibrant, multi-stop `linear-gradient` to the `<h2>` background. By using `color: transparent;` and `-webkit-background-clip: text;`, the gradient is masked exactly to the shape of the letters.
  - **Infinite Hologram Loop**: We set the `background-size` to `200%`. An infinite CSS `@keyframes` animation smoothly shifts the `background-position` from `200%` to `0%`. Because the first and last colors of the gradient are identical, the animation loops perfectly seamlessly.
  - **Matching Aura Glow**: Using a `::before` pseudo-element and the HTML `data-text` attribute, we duplicate the exact text and gradient setup directly behind the main text. Applying `filter: blur(12px)` to this pseudo-element creates a dynamic, color-matching glowing aura that animates in perfect sync with the primary text.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Designed primarily for dark backgrounds where holograms look best, but structural variables are provided.
- Honors the `prefers-reduced-motion` accessibility standard by pausing the shifting gradient animation for motion-sensitive users, leaving a beautiful static iridescent gradient.

## Usage
Open `demo.html` in your browser. Watch the colors seamlessly shift across the text. 

## Files
- `demo.html`: The HTML structure containing the text node and `data-text` attribute.
- `style.css`: The styling, holographic gradient variables, and the heavily commented `background-clip` and `filter: blur()` aura techniques.
