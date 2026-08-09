# Feature: Retro CRT Monitor Effect

## Description
This submission introduces a highly unique `.ease-retro-crt` text animation effect that simulates an old cathode-ray tube (CRT) monitor or retro television screen.

This is perfect for cyberpunk-themed interfaces, retro gaming websites, or unique 404 error pages, offering developers a creative and distinctive typography animation right out of the box.

## Implementation Details
- Uses high-frequency `@keyframes` to simulate phosphor screen flickering by rapidly shifting opacity between 0.85 and 1.0.
- Implements CSS `text-shadow` to create an RGB split (chromatic aberration) effect, mimicking misaligned electron beams in older televisions.
- Highly performant, requiring no JS or heavy SVG filters.

## Files
- `style.css` - The CSS definitions for the new effect.
- `demo.html` - A visual demonstration showing the CRT text on a dark terminal screen.
