# Image Ken Burns Pan/Zoom

A slow, continuous zoom-and-pan animation for hero images and cover photos — the classic documentary "Ken Burns" effect, built purely in CSS.

## What it does
The image is scaled and translated across an 18s ease-in-out loop (alternating direction), while its container clips overflow via `overflow: hidden`, keeping the frame edges clean.

## How to use it
Wrap your `<img>` in a fixed-size, `overflow: hidden` container, and add the `image-kenburns` class to the image itself.

```html
<div class="image-frame">
  <img class="image-kenburns" src="hero.jpg" alt="Hero">
</div>