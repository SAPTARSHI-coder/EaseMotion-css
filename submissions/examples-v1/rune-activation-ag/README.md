# Rune Activation

A mystical circle of 12 Elder Futhark runes that light up with a
warm golden glow — either individually on click, or all in sequence
via the "Activate Circle" control. Pure CSS, zero JavaScript.

## Files
- `demo.html` — the 12-rune circle, center Algiz symbol, and controls
- `style.css` — circular layout, glow/ring animations, particles, connection rings

## Usage
Open `demo.html` in a browser.
- Click any individual rune glyph to activate it on its own
- Click **Activate Circle** to trigger all 12 runes in sequence,
  followed by expanding connection rings from the center

## Details
- Runes are positioned around the circle using `transform: rotate() translate() rotate()`
  driven by a `--i` custom property per node (no JS needed for layout)
- Sequential "Activate Circle" timing uses staggered `animation-delay`
  based on each rune's `--i` index
- 8 floating particles drift around the circle using a rotating
  `translate` keyframe animation
- The center Algiz (ᛉ) rune pulses continuously as an ambient anchor

## Customization
CSS custom properties on `.rune-stage` / `:root`:
- `--rune-glow` — glow color (default `#e8b64c`, warm gold)
- `--rune-duration` — per-rune activation transition length (default `0.6s`)

## Notes on scope
This is a pure CSS/HTML implementation. Because true randomization,
live speed/intensity sliders, and fully independent async timers
require JavaScript, this version uses a fixed sequential activation
order and static timing instead — individual runes remain freely
and independently clickable via checkboxes.

Respects `prefers-reduced-motion` by disabling animations while still
reflecting activated state instantly.