# CSS Sci-Fi HUD: Holographic Flicker

A hardware-accelerated, JavaScript-free Head-Up Display (HUD) interface featuring a degraded, glitchy holographic projection aesthetic. 

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript required for the 3D rendering or the glitch physics.
- **Component Architecture**: 
  - **The Atmosphere**: The background utilizes a dark radial gradient, layered beneath a fixed `.scanlines` overlay (created with a repeating linear-gradient) and a `.vignette` overlay (created with a radial-gradient). This instantly gives the entire viewport the look of a CRT monitor or a physical projection space.
  - **Global Flicker**: The entire `.hologram-container` is wrapped in an `@keyframes holo-flicker` animation. This animation uses precise percentage steps to occasionally drop the `opacity` and skew the `transform`, simulating a weak or unstable holographic signal.
  - **3D Wireframe Artifact**: The center display features a true CSS 3D rotating cube (`.wireframe-cube`). By applying `perspective` to the parent and `transform-style: preserve-3d` to the cube, we can position 6 `.face` divs in 3D space using `translateZ` and `rotateY/X`. The entire cube then spins continuously via CSS keyframes.
  - **Holographic Beam**: A `.scan-beam` div with a fading linear gradient moves vertically over the 3D artifact, simulating a scanning laser.
  - **Local Glitches**: Specific text elements, like the `73.4%` integrity readout, utilize a heavier, localized `@keyframes text-glitch` animation that manipulates `text-shadow` offsets and colors (red/blue) to simulate chromatic aberration during a data corruption event.
  - **CSS Waveform**: The telemetry waveform is built without SVG. It uses simple flexbox-aligned `<span>` tags with staggered `animation-duration` values on a scaling keyframe to simulate a random, moving audio/signal wave.
- **Theming**: Configured via CSS Custom Properties. The color palette is locked into a monochromatic glowing Cyan (`#00ffcc`), characteristic of classic sci-fi holograms. Typography utilizes `Orbitron` for headers and `VT323` for terminal data.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. (Animations can be disabled via OS preferences).

## Usage
Open `demo.html` in your browser. The holographic interface will initialize. Observe the global opacity flickering, the localized chromatic text glitches, the CSS-rendered 3D wireframe cube spinning in the center, and the continuous scanning beam.

## Files
- `demo.html`: The HTML structure defining the global overlays, the 3D cube markup, and the side panels.
- `style.css`: The styling, the 3D transform mathematics, the various `@keyframes` (global flicker, chromatic glitch, cube spin, beam scan), and the monochromatic neon shadow definitions.
