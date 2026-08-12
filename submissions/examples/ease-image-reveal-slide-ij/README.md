# Image Reveal Slide (#31847)

An image that reveals itself as a colored pseudo-element cover slides away, creating a wipe transition effect.

## Features
- Pseudo-element `::after` acts as a sliding cover
- Smooth `cubic-bezier` transition on `transform`
- Controlled via `--reveal` custom property (`0` = covered, `1` = revealed)

## Usage
Set `--reveal: 1` on `.reveal-image` to slide the cover off and reveal the image beneath.
