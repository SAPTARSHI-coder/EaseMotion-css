# CSS Number Morphing Counter

A pure CSS counter animation that smoothly morphs and melts numbers into each other utilizing SVG filters and CSS keyframe sequencing.

## Features
- Pure CSS and HTML (Zero JavaScript intervals or canvas rendering).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--counter-color`, `--bg-base`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **SVG Gooey Filter (Documented in Code)**: 
- This component creates the "liquid morph" effect utilizing a classic SVG filter trick. 
- An invisible `<svg>` filter applies `feGaussianBlur` and `feColorMatrix` to the container holding the numbers.
- As the numbers quickly scale and cross-fade into one another via CSS keyframes, the filter merges their pixels together, creating a satisfying gooey/melting transition.
- **Keyframe Sequencing**: 10 absolute positioned `<span>` elements (0-9) share a 10-second animation loop. `animation-delay` is staggered by 1s for each number so they trigger in perfect sequence.
- Fully accessible with `prefers-reduced-motion` support. The SVG filter and scaling animations are completely disabled for motion-sensitive users, acting as a clean, instant step-change counter instead.

## Usage
Open `demo.html` in your browser. You will see a large, bold counter continuously looping from 0 to 9, with each number smoothly morphing and melting into the next.

## Files
- `demo.html`: The HTML structure containing the absolute numbers and the hidden SVG filter.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the staggered `animation-delay` technique.
