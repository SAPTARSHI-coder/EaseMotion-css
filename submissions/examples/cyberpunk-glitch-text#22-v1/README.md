### Is your feature request related to a problem?
EaseMotion CSS lacks a cyberpunk/glitch-style text effect component. Glitch animations are highly popular in modern web design, gaming sites, and portfolio pages. A pure CSS implementation would be a valuable, zero-dependency addition.

### Describe the solution you'd like
Add a new folder `cyberpunk-glitch-text` featuring:
1. **RGB Channel Separation** using `::before`/`::after` pseudo-elements with `attr()`.
2. **Clip-Path Slicing** with `clip-path: inset()` keyframes for horizontal distortion.
3. **Scanline Overlay** using `repeating-linear-gradient`.
4. **Glitch Bars** that flash across the screen.
5. **Floating Data Fragments** with independent animations.
6. **HUD Corner Brackets** with pulse effects.
7. **Neon Flicker** on text elements.

### Alternatives considered
- JavaScript glitch libraries (violates zero-dependency principle)
- SVG-based distortion (less performant, harder to customize)

Pure CSS approach is lightweight, performant, and fully customizable via CSS variables.

**Proposed Folder Name:** `cyberpunk-glitch-text`
**Labels:** `enhancement`, `animation`, `glitch-effect`, `good first issue`