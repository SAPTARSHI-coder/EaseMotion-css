# Smudge Stick Smoke

A calming visualization of a burning sage smudge stick, with smoke
particles and trails rising in organic, swirling patterns. Pure CSS,
zero JavaScript.

## Files
- `demo.html` — sage stick, ember, smoke particles/trails, and controls
- `style.css` — smoke rise/sway animations, ember glow, density variants

## Usage
Open `demo.html` in a browser.
- **Toggle Burn** — starts/stops the ember glow and rising smoke
- **Light Smoke** / **Thick Smoke** — switches particle size and opacity

## Details
- 30 smoke particles rise with staggered delays and individual sway
  offsets (via a `--sway` custom property per particle) for an organic,
  non-repetitive look
- 6 flowing smoke trails move independently, wider and slower than particles
- Ember tip flickers continuously while burning; ambient glow pulses behind the stick

## Customization
CSS custom properties on `.smudge-stage` / `:root`:
- `--smoke-color` — particle/trail color (default sage-green translucent)
- `--ember-color` — glow tip color (default warm orange)
- `--smoke-speed` — multiplier for animation speed (default `1`; e.g. `1.5` for faster drift)

## Notes on scope
This is a pure CSS/HTML implementation. Live speed sliders and
free-form density control require JavaScript; here, density is
offered as two fixed presets (Light / Thick) via radio buttons, and
speed can be adjusted by editing the `--smoke-speed` custom property.

Respects `prefers-reduced-motion` by disabling animations while
keeping the ember visibly lit when burning is active.