# CSS Accordion: Retro Arcade Pixel

A hardware-accelerated, JavaScript-free accordion interface featuring 8-bit styling, pixelated borders, scanline overlays, and stepped transitions.

## Features
- Pure CSS and HTML implementation. The accordion expand/collapse mechanism relies entirely on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Checkbox Hack Mechanics**: Hidden `<input type="checkbox">` elements control the state of each accordion item individually (allowing multiple to be open). The visible headers are `<label>` elements linked to these inputs.
  - **Pixel Art Borders**: Instead of standard CSS borders or images, the blocky, 8-bit borders are created using multiple `box-shadow` definitions (`-4px 0 0 0 var(--theme-color)`, etc.) on the `.accordion-item` container. This draws sharp, 4px square "pixels" around the element edges.
  - **Stepped "Low FPS" Transitions**: To simulate older, low-framerate hardware, the `.acc-content-wrapper` expands its `max-height` using the `steps()` timing function (`transition: max-height 0.4s steps(5, end)`). This creates a choppy, frame-by-frame slide down rather than a perfectly smooth modern tween.
  - **CRT Overlay**: A fixed `.crt-overlay` element covers the viewport with `pointer-events: none`. It utilizes complex `linear-gradient` backgrounds to draw faint horizontal scanlines and subtle RGB color bleeding, simulating an old CRT arcade monitor.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a pure black base (`#000000`) with high-contrast, primary "16-color" palette accents: cyan (`#00ffff`), magenta (`#ff00ff`), yellow (`#ffff00`), and red (`#ff0000`). Typography is handled via the "Press Start 2P" Google Font with `-webkit-font-smoothing: none` applied to keep edges sharp.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the blinking text animations and the stepped panel slide animations are disabled, switching instantly instead.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers (P1_START, HIGH_SCORES, etc.). Notice the blocky pixel borders, the CRT scanline effect on the screen, and the choppy, stepped frame-rate animation as the panels expand.

## Files
- `demo.html`: The HTML structure defining the checkbox hack inputs, the scanline overlay, and the retro content sections.
- `style.css`: The styling, the `max-height` transition logic using `steps()`, the `box-shadow` pixel border technique, and the `linear-gradient` CRT overlays.
