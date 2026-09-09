# CSS Holographic Flicker Background

A cinematic sci-fi data terminal simulation built entirely in CSS. This component combines 3D perspective grids, panning CRT scanlines, and aggressive CSS opacity glitches to emulate a degraded holographic transmission.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an immersive, high-tech environment. In the background, a glowing cyan data grid tilts away from the camera in 3D space, infinitely scrolling forward. This grid occasionally "glitches"—skewing wildly, shifting colors, and dropping opacity to simulate signal degradation. In the foreground, a glassmorphism terminal UI displays a "SYSTEM OFFLINE" message that utilizes a heavy chromatic aberration text-glitch effect. Finally, a layer of transparent CRT scanlines covers the entire viewport.

### 2. How is it used?

The complex visual hierarchy is managed strictly through CSS DOM layering (Z-index) and native transforms. 

**The 3D Grid Glitch:**
The background grid (`.holo-environment`) handles the 3D perspective (`rotateX(75deg)`). To create the massive signal degradation glitch, an infinite `@keyframes` animation forcefully overrides this transform sporadically, inserting aggressive `skewX` and `scaleY` values alongside `filter: hue-rotate(90deg)` to temporarily distort the rendering matrix before snapping back.

**The Chromatic Text Glitch:**
The text glitch is achieved by duplicating the text content twice using the `::before` and `::after` pseudo-elements (via `data-text` attributes). One is tinted Cyan, the other Magenta. These pseudo-elements use `clip-path: inset()` to slice the text into thin horizontal bands. By animating the `clip-path` coordinates rapidly, the colored bands tear across the screen, perfectly mimicking digital artifacting.

```css
@keyframes text-glitch-1 {
  0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
  20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
  /* rapidly jumps the clipped section up and down */
}
```

### 3. Why is it useful?

Holographic and CRT scanline effects are historically the domain of heavy WebGL fragment shaders or Canvas rendering loops that constantly redraw every pixel on the screen, decimating laptop and mobile battery life. 

By rendering the scanlines using a static `repeating-linear-gradient` and driving the glitches exclusively through CSS `transform` and `clip-path` animations, we offload all the heavy lifting directly to the browser's GPU compositor. This guarantees incredible 60fps performance without writing a single line of JavaScript. Importantly, the component is fully accessible; it respects `@media (prefers-reduced-motion: reduce)` by immediately halting all aggressive flashing, skewing, and scanning to protect users with motion sensitivities or epilepsy.
