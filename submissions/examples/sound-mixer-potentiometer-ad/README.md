# Sound Mixer Board — Glowing Slide Potentiometers

An audio soundboard mixer layout featuring 7 instrument channel strips plus a Master bus. Each channel has a custom-styled vertical range input (potentiometer) with neon glow shadow, LED level indicators, pan knob, and dB readout display.

## Preview

A dark neon-red bordered mixing console with glowing cyan/green/orange/purple vertical slide faders, LED bar-graph level meters, and a BPM + FX rack footer.

## Features

- 🎚️ **7 Channel Strips + Master** — Kick, Snare, Hi-Hat, Bass, Synth, Lead, Vocal
- 🌟 **Glowing Slide Potentiometers** — CSS-customized vertical `range` inputs with neon thumb glow
  - `box-shadow` glow on `::-webkit-slider-thumb` in per-channel accent colors
  - Custom 6px track with subtle `border-radius` and `box-shadow` halo
- 📊 **LED Level Indicators** — 10-segment per-channel LED bar meters (green → yellow → red)
  - JS-driven live animation based on slider position + noise
- 🔢 **dB Readout** — Real-time decibel display (-18 dB to +12 dB) synced to each fader
- 🎛️ **Pan Knobs** — CSS-only rotary knobs with indicator dot per channel
- 🔇 **Mute & Solo Buttons** — With active neon state glow
- 📡 **Dual Master VU Meter** — Stereo left/right LED columns on Master channel
- 🔊 **FX Rack Footer** — Reverb, Delay, Compressor, Distortion, EQ toggles
- 🔴 **Neon Red Board Aesthetic** — `border: 2px solid #ff0055` with full glow shadow
- ♿ **Accessible** — ARIA roles, labels, `aria-valuenow` updates on fader move

## File Structure

```
sound-mixer-potentiometer-ad/
├── demo.html   # Full interactive demo
├── style.css   # All component styles
└── README.md   # This file
```

## CSS Techniques

- `::-webkit-slider-thumb` and `::-moz-range-thumb` for custom potentiometer knobs
- `box-shadow` neon glow on slider thumb per channel color
- CSS Custom Properties (`--ch-accent`, `--ch-rgb`, `--pan-deg`) for per-channel theming
- `writing-mode: vertical-lr` + `direction: rtl` for vertical range input
- CSS Grid for responsive multi-channel layout
- `radial-gradient` for pan knob depth shading
- `@keyframes` for title glow and status dot blinking

## JavaScript Techniques

- Live `input` event → dB label conversion formula
- `setInterval` LED animation with random noise for natural meter movement
- Toggle classes for Mute/Solo/FX buttons with `aria-pressed` sync

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge).

## License

Part of the EaseMotion CSS open-source library.
