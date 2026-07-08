# Image Lazy Blur

Images that transition from blurry to clear on load. CSS filters use `--img-blur` and `--img-loaded` variables. The `filter: blur()` transitions smoothly using a cubic-bezier curve.

## Features

- Blur-to-clear transition on image load
- Blur amount via `--img-blur` CSS variable
- Loaded state via `--img-loaded` (0 or 1)
- Smooth cubic-bezier transition on filter
- Card layout with captions

## Usage

Set `--img-loaded` to 0 (blurry) and `--img-blur` to desired blur amount on `.lazy-img`. When the image loads, set `--img-loaded` to 1; CSS transitions `filter: blur()` from the blur amount to 0.
