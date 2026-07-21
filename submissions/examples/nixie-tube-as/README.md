# Nixie Tube

A pure CSS and HTML pair of nixie tubes glowing orange behind their wire mesh, the colon between them ticking on and off.

## What it shows

- Each numeral built from stacked hard stop linear gradient bars, with a second unlit copy behind it in dull grey so the dark cathodes read the way a real nixie does
- The neon glow from layered drop-shadow filters rather than a flat colour, plus a soft halo behind the glass
- The anode mesh from two crossed repeating linear gradients seen through the envelope
- Glass with a rim highlight, bakelite base, pins, and a colon blinking on steps() so it snaps rather than fades
- No images, no JavaScript, no external dependencies

## Usage

Open `demo.html` in any modern browser.

## Accessibility

The flicker and blink stop under `prefers-reduced-motion: reduce`.
