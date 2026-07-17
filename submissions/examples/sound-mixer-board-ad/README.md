# Interactive Audio Sound Mixer Board

A fully animated, interactive DJ-style audio mixing console component built with CSS animations and vanilla JavaScript — no external audio libraries required.

## Preview

A dark-studio neon aesthetic mixing board featuring 6 instrument channels (Kick, Snare, Hi-Hat, Bass, Synth, Vocal) plus a Master bus, all with live-animated VU meters, frequency visualizers, draggable faders, and an FX effects rack.

## Features

- 🎚️ **6 Channel Strips + Master** — Kick, Snare, Hi-Hat, Bass, Synth, Vocal
- 📊 **Live VU Meters** — Animated green/yellow/red LED-style level meters driven by JS
- 📈 **Frequency Visualizers** — Per-channel animated frequency bar displays
- 🎛️ **EQ Knobs** — CSS-styled rotary knobs (Hi / Mid / Lo) per channel
- 🎚️ **Vertical Faders** — Draggable volume faders with dB readout labels
- 🔇 **Mute & Solo Buttons** — Per-channel M/S buttons with active state glow
- 🎵 **Transport Controls** — Play/Pause/Stop/Record with animated beat-clock indicator
- ⏱️ **Clock Display** — Live session timer in HH:MM:SS format
- 🔊 **FX Effects Rack** — Reverb, Delay, Compressor, Distortion, Filter, Chorus toggles
- 📉 **Spectrum Analyzer** — Full-width animated frequency spectrum at the bottom
- 🌈 **Neon Studio Theme** — Dark background with vibrant per-channel color accents (cyan, green, orange, purple, pink, gold)
- ♿ **Accessible** — ARIA roles, labels, `aria-pressed`, `aria-checked`, keyboard navigation

## File Structure

```
sound-mixer-board-ad/
├── demo.html   # Full interactive demo
├── style.css   # All component styles (CSS custom properties, animations)
└── README.md   # This file
```

## Usage

Open `demo.html` directly in any modern browser — no build step needed.

```html
<link rel="stylesheet" href="style.css" />
```

## CSS Techniques Used

- CSS Custom Properties (`--ch-color`, `--knob-angle`, `--fader-fill`, `--min-h`, `--max-h`)
- CSS `@keyframes` for spectrum bars, header glow, beat pulsing, glowPulse
- `linear-gradient` for fader tracks, knob indicators, and viz bars
- `box-shadow` / `text-shadow` for neon LED glow effects
- CSS Grid for the 7-column channel layout
- `writing-mode: vertical-lr` for vertical range inputs (faders)
- `radial-gradient` for knob depth/shading
- Responsive grid layout with `@media` breakpoints

## JavaScript Techniques Used

- `setInterval` for beat clock, VU meter animation, visualizer animation
- DOM manipulation for dynamic spectrum bar generation
- Event listeners on faders for real-time dB label updates
- Toggle class state for Mute/Solo/FX buttons with ARIA attribute sync

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## License

Part of the EaseMotion CSS open-source library.
