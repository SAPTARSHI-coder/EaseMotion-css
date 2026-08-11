# Pure CSS Gooey Filter Button Effect

## Description
This submission resolves Issue #68953 by introducing a pure CSS gooey button effect. The effect is achieved completely natively in CSS without any JavaScript or SVG blobs, utilizing `filter: contrast()` paired with `filter: blur()`.

## Features
- Pure CSS implementation, no JavaScript required.
- Uses `filter: contrast(20)` on the container and `filter: blur(10px)` on the expanding blob elements to create a natural, sticky separation.
- Completely customizable using CSS variables.
- Smooth expansion and merging animation built natively using `transition: transform` and CSS easing curves.

## Usage
Simply hover over the button in the demo. The pseudo-drops will smoothly detach from the main button body, creating the liquid/gooey transition effect.
