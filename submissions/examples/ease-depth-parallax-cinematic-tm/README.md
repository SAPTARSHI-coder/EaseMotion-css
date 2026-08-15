# Depth Parallax Cinematic

Closes #74082

Multi-layer cinematic scene with starfield, two mountain silhouettes, centered title, and a vignette overlay.

## Technique

Four `position: absolute` layers stacked with z-index. Mountain layers use `clip-path: polygon()` to draw jagged horizon lines. Vignette uses a radial-gradient to darken the corners.
