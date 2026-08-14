# CSS Flip Number Ticker

A pure CSS implementation of a mechanical flip ticker (Solari board) commonly found in airports and train stations, using advanced 3D CSS transforms.

## Features
- Pure CSS and HTML (Zero JavaScript required for the 3D flipping animations).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--ticker-bg`, `--ticker-text`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`) with built-in dark and light mode definitions.
- **Airport Departure Board Aesthetic**: Utilizes the `Oswald` condensed font, deep shadows, tight letter spacing, and a distinct center split line to emulate the physical split-flap mechanical displays.
- **True 3D Transforms (Documented in CSS)**: 
- The container uses CSS `perspective: 800px` to establish a 3D rendering context, ensuring the rotations don't look flat.
- The flipping mechanism hinges precisely at the center using `transform-origin: bottom;` on the top card half.
- It utilizes `backface-visibility: hidden;` to conceal the "next" letter card until it physically swings past the 90-degree axis.
- **Realistic Cascading Animation**: 
- Individual `.flip-unit` containers use staggered CSS `animation-delay` offsets (0.0s, 0.1s, 0.2s, etc.). 
- This creates the iconic cascading ripple effect seen on physical departure boards as the motors spin up sequentially across the word.
- **Realistic Lighting**: CSS pseudo-elements (`::after`) overlay linear gradients that fade in and out during the rotation keyframes, faking the effect of dynamic ambient lighting casting shadows as the physical card changes its angle.
- Fully accessible with `prefers-reduced-motion` support. The 3D rotation animations are completely disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see a 5-letter departure board spelling out "DEPART". The letters will continuously ripple and flip downwards in a realistic mechanical sequence. Toggle your operating system's Dark/Light mode to see the component instantly adapt its color palette.

## Files
- `demo.html`: The HTML structure for the ticker, detailing the complex nesting required for 3D flip cards and the specific delay classes (`delay-1`, `delay-2`).
- `style.css`: The styling, CSS Custom Property theming blocks, 3D `perspective` setup, and heavily commented `@keyframes` explaining the `rotateX` and `backface-visibility` mechanics.
