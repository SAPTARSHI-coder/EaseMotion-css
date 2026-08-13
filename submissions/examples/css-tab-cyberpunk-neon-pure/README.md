# CSS Tabs: Cyberpunk Neon

A hardware-accelerated, JavaScript-free tabbed interface featuring high-contrast neon glows, angled geometry, and subtle glitch animations inspired by the Cyberpunk aesthetic.

## Features
- Pure CSS and HTML implementation. The tab switching mechanism relies entirely on the CSS Radio Button Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Radio Hack Mechanics**: Hidden `<input type="radio">` elements control the state. The tab headers are `<label>` elements linked to these radios. When a radio is checked, CSS sibling selectors (`~`) target the corresponding `.tab-panel` to transition its opacity and trigger entry animations.
  - **Angled Geometry**: The classic cyberpunk chamfered edges are achieved using `clip-path: polygon()`. The tab backgrounds (`.tab-bg`), the main content wrapper (`.tab-content-wrapper`), and the action buttons (`.cyber-btn`) all feature explicitly clipped corners to create a sharp, mechanical feel without relying on images.
  - **Glitch & Scanline Effects**: 
    - The main title uses layered pseudo-elements (`::before`, `::after`) with varying `clip-path: inset()` animations (`glitch-anim-1`, `glitch-anim-2`) to create a continuous chromatic aberration and slicing glitch effect.
    - When a tab is activated, the content panel enters with a quick `panel-flash` animation that briefly boosts contrast and brightness, simulating a CRT monitor scanline or terminal boot sequence.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a deep, dark terminal background (`#050510`) contrasted heavily against high-energy neon hues: cyan (`#00f0ff`), magenta (`#ff003c`), yellow (`#fcee0a`), and green (`#00ff66`).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the continuous title glitches and the panel flash entry animations are completely disabled to prevent discomfort.

## Usage
Open `demo.html` in your browser. Click the various tab labels (SYS.LOG, NET.MAP, SEC.OVR) to switch between the content panels. Notice the neon glow activating on the selected tab, the chamfered geometric edges, and the quick terminal-flash transition as the new panel loads.

## Files
- `demo.html`: The HTML structure defining the radio inputs, the chamfered tab labels, and the terminal-styled content panels.
- `style.css`: The styling, the `clip-path` polygon geometries for the angled cuts, the glitch animation keyframes, and the radio hack logic for state management.
