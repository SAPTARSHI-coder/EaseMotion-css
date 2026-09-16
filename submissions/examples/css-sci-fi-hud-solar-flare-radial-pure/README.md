# CSS Sci-Fi HUD: Solar Flare Radial

A hardware-accelerated, JavaScript-free Head-Up Display (HUD) interface designed for stellar navigation. It features volumetric sun rendering, erupting solar prominences, and orbital progress rings.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, SVG rendering (except for one text path constraint), or JavaScript required.
- **Component Architecture**: 
  - **The Sun Core**: The massive central star is rendered by layering three separate `div` elements directly on top of each other using `position: absolute`. 
    - The `.base` layer uses a sharp `radial-gradient` for the solid core.
    - The `.plasma` layer uses a blurred gradient and a pulsing `@keyframes` animation to simulate the breathing corona.
    - The `.flare` layer uses a massive blur radius and low opacity to cast a red ambient glow over the entire center section.
  - **Solar Prominences**: The erupting arcs of plasma (`.prominence`) are achieved using `border-radius: 50%` with only one side of the border colored (the other three are transparent). By setting the `transform-origin` far outside the element's center and applying a rotation animation, they whip around the sun, fading in and out, perfectly mimicking solar flares.
  - **Orbital Mechanics**: The planetary orbit rings (`.orbit-ring`) utilize simple dashed/solid borders. Inside `.ring-2`, a small `.satellite` div is placed. By rotating the entire `.ring-2` container using `@keyframes orbit-spin`, the satellite naturally orbits the central sun.
  - **Radial Progress Meters**: The circular data meters in the side panels utilize modern CSS `conic-gradient()`. By stopping the gradient at a specific percentage and using a solid `.radial-inner` circle to mask the center, we create a perfect donut chart/progress ring without any SVG logic.
  - **Curved Text**: The only SVG used in this component is to provide a `<path>` for the `<textPath>` element, allowing the "SOLAR FLUX DENSITY" text to perfectly wrap around the top of the CSS conic gradient rings.
- **Theming**: Configured via CSS Custom Properties. The palette is strictly thermal: whites, blinding yellows, intense oranges, and deep reds, set against a dark void background.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. (Animations can be disabled via OS preferences).

## Usage
Open `demo.html` in your browser. The stellar navigation interface will initialize. Observe the volumetric rendering of the central star, the erratic solar prominences whipping off the surface, the smooth orbital rotations, and the glowing conic gradient data rings.

## Files
- `demo.html`: The HTML structure defining the solar system container, the layered sun core, and the side panel data rings.
- `style.css`: The styling, the complex `radial-gradient` and `conic-gradient` mathematics, the transform-origin manipulation for the flares, and the responsive media queries.
