# Pixel Art Space Invader

A classic 8-bit space invader character rendered using absolutely no images, just a single CSS div.

## Preview
Open `demo.html` in your browser. You will see a green retro alien centered on a dark background.

## Implementation
- The HTML contains only one empty `<div>`.
- The CSS sets the div to a tiny 10x10 pixel square.
- A massive, multi-part `box-shadow` property is used. By specifying X and Y offsets (in increments of 10px) and a color, we can "paint" pixels onto the screen anywhere around the original div, creating a complete pixel art character in pure CSS.
