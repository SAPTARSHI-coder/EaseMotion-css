# Animated Split Text Reveal

A cinematic, highly interactive text effect built purely with CSS. Hovering over the main text horizontally slices it in half, pushing the top half up and the bottom half down, while simultaneously striking a glowing neon line through the center to reveal a hidden secret message behind it.

## Features

- Pure CSS implementation
- Uses CSS `clip-path` and `overflow: hidden` to perfectly bisect typography
- Smooth `cubic-bezier` timing functions for a premium, snappy feel
- Embedded glowing neon strike-through line
- Completely scalable and customizable typography

## Usage

Simply drop the HTML and CSS into your project. To change the main text, you must update the text inside the `.split-text` div **AND** the `data-text` HTML attribute (this is required because pseudo-elements read from the attribute to clone the text). To change the hidden message, update the content inside the `.hidden-text` div.
