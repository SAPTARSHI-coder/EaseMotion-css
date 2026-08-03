# Pure CSS Cyberpunk Glitch Text Effect

This submission resolves issue #19988 by introducing a highly authentic Cyberpunk-style glitch text animation entirely in CSS.

## Overview
Glitch effects in web design often rely on JavaScript or heavy SVGs/canvas. This component achieves a true RGB-split glitch effect using only CSS pseudo-elements (`::before` and `::after`), CSS variables, and the `clip-path` property.

## Features
- **Zero JavaScript:** 100% CSS animation.
- **RGB Split Rendering:** Generates cyan and red offset shadows that independently jitter to simulate a broken CRT monitor or digital interference.
- **Dynamic Clip Paths:** Uses `clip-path: polygon()` inside `@keyframes` to slice the text horizontally, moving the slices rapidly to create the "glitch" distortion.
- **Data Attributes:** Utilizes `content: attr(data-text)` so the text only needs to be written once in the HTML markup.

## Implementation Details
The core class `.glitch` requires a `data-text` attribute matching its inner HTML. 
Two pseudo-elements are generated absolutely over the original text. One is shifted slightly left with a red shadow, and the other right with a cyan shadow. Both pseudo-elements have distinct keyframes animating their `clip-path` properties at high speed.
