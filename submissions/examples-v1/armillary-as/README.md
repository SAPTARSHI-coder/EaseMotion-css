# Armillary Sphere

A pure CSS and HTML armillary sphere: brass rings turning in real 3D around a small blue globe.

## What it shows

- transform-style: preserve-3d with a perspective stage, so the rings genuinely orbit rather than faking depth
- Meridian, equator, ecliptic and tropic rings placed with rotateX, rotateY, rotateZ and translateZ
- Four sided border-color on each ring to fake a lathed brass highlight
- A brass column, base and plinth standing on a desk
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

The rotation stops under `prefers-reduced-motion: reduce`.
