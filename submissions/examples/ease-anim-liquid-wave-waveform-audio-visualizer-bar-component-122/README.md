# Ease Anim Liquid Wave Waveform Audio Visualizer Bar Component — Cyberpunk Theme

## Description
A high-fidelity, cyberpunk-themed audio visualizer with 24 waveform bars that animate with a liquid, organic pulse — each bar's height *and* border-radius shift simultaneously at its peak, giving the wave a fluid, drop-like quality rather than a rigid bar-chart bounce. Wrapped in a glassmorphism panel with a continuously rotating neon rainbow border, a subtle mirrored reflection beneath the bars, and a functional-looking play/progress footer. Pure CSS animation — no JavaScript required for the visual effect.

## Features
- **Liquid wave bars**: 24 bars, each with a unique staggered negative `animation-delay` and target `--peak-height`, so the wave flows organically left-to-right rather than pulsing in unison
- **Liquid morph**: at peak height, each bar's `border-radius` softens into an asymmetric blob shape before returning to a pill shape at rest — the "liquid" part of the effect
- **Rotating neon border**: a `conic-gradient` ring animated via `@keyframes`, cycling through cyan → magenta → lime
- **Glassmorphism panel**: `backdrop-filter: blur()` + translucent background + inset highlight
- **Mirrored reflection**: a scaled/masked duplicate of the waveform beneath the main bars for extra depth
- **Live badge** with a pulsing status dot
- **Functional-looking footer**: play button, progress bar, time label
- Fully responsive (bar width/gap and panel padding shrink on small screens)
- Respects `prefers-reduced-motion`

## Usage
Copy the structure from `demo.html`:
```html
<div class="ease-audio-visualizer">
  <div class="visualizer-header">
    <span class="track-title">// TRACK_NAME.WAV</span>
    <span class="live-badge"><span class="live-dot"></span>LIVE</span>
  </div>

  <div class="waveform-track" aria-hidden="true">
    <div class="wave-bar"></div>
    <!-- repeat wave-bar elements; nth-child rules in style.css cover up to 24 -->
  </div>

  <div class="visualizer-footer">
    <button type="button" class="play-btn" aria-label="Play track">
      <svg viewBox="0 0 24 24"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
    </button>
    <div class="progress-track" role="progressbar" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-fill"></div>
    </div>
    <span class="time-label">1:24 / 3:41</span>
  </div>
</div>
```
The `.waveform-reflection` block is optional — omit it if you don't want the mirrored effect.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--wave-duration` | `1.4s` | Full pulse cycle duration per bar |
| `--bar-width` | `6px` | Width of each bar |
| `--bar-gap` | `5px` | Spacing between bars |
| `--neon-primary` | `#00f0ff` | Primary neon color (cyan) |
| `--neon-secondary` | `#ff00c8` | Secondary neon color (magenta) |
| `--neon-tertiary` | `#a3ff00` | Tertiary neon color (lime), used for focus outlines |
| `--panel-radius` | `24px` | Outer panel corner rounding |

Each `.wave-bar` also respects a per-element `--peak-height` custom property (set via `nth-child` rules in `style.css`) controlling how tall that specific bar grows at its peak — adjust these to change the wave's visual rhythm.

## Accessibility & Motion
The decorative waveform bars are marked `aria-hidden="true"` since they're purely visual (not conveying real audio data in this static demo). The progress bar uses `role="progressbar"` with proper `aria-value*` attributes, and the play button is a real, focusable `<button>` with an `aria-label`. All animations — bar pulsing, border rotation, live-dot pulse — are disabled under `prefers-reduced-motion`, with bars settling into a static mid-height pill shape.

## Files
- `demo.html` — live working example
- `style.css` — all component styles and liquid-wave keyframe animations
- `README.md` — this file