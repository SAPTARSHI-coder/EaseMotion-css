# ease-audio-waveform-sap

A play button paired with an animated bar-style waveform that bounces while audio is playing and stays still when paused.

## Usage
1. Include `style.css`.
2. Add markup: play button + `.wave-bars` container + `<audio>` element.
3. Attach the play/pause toggle and bar-generation logic from `demo.html`.

## Customization
- `heights` array (JS): static bar heights for the resting waveform shape.
- `wave-bounce-sap` keyframes: bounce range/speed.
- `animation-direction: reverse` on odd bars: creates visual variation instead of all bars moving in lockstep.

## Notes
- Bars only animate while `.playing` is present on the wrapper, toggled by actual `audio.play()`/`pause()` state — the animation is a stylized representation, not derived from real frequency data (that would require the Web Audio API's `AnalyserNode`).
- Alternating `animation-direction: reverse` on odd-indexed bars avoids a robotic, perfectly-synchronized bounce.
- Respects `prefers-reduced-motion`: bounce animation is disabled, bars settle at a fixed mid-height instead of oscillating.