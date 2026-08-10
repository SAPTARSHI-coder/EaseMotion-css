# interactive-audio-player

A premium audio player widget: rotating vinyl album art while playing, an animated equalizer waveform, a scrubbable progress bar, and glowing play/pause controls. All motion is CSS-driven; a tiny script only toggles an `is-playing` class and syncs the progress bar to a real `<audio>` element.

## What does this do?

- **Rotating album art** — a CSS vinyl disc (repeating-radial grooves + conic-gradient label) that spins continuously via `@keyframes ap-spin`, but only while `is-playing` is set (`animation-play-state: running` vs `paused`).
- **Animated equalizer** — 12 bars with staggered `animation-delay` doing a `scaleY`/height bounce; they sit dim + static when paused and brighten + animate when playing.
- **Scrubbable progress bar** — a gradient fill whose width is driven by `audio.currentTime`; a native `<input type="range">` sits invisibly over the track for keyboard/touch seeking.
- **Glowing play/pause control** — a gradient circular button with a layered `box-shadow` glow; while playing it pulses (`@keyframes ap-pulse`).
- The demo ships a tiny silent data-URI `<audio>` so it runs with **no external asset** — swap in a real `src` to hear audio.

## How is it used?

1. Link the stylesheet + the tiny script (in `demo.html`).
2. Use the markup below. The script hooks the `#player`, `#audio`, `#play`, `#seek`, `#fill`, `#cur`, `#dur` IDs.

```html
<link rel="stylesheet" href="style.css" />

<section class="player" id="player">
  <div class="player__art" aria-hidden="true">
    <div class="player__art-core"></div>
    <div class="player__art-hole"></div>
  </div>
  <div class="player__body">
    <div class="player__meta">
      <p class="player__track">Midnight Drive</p>
      <p class="player__artist">Neon Coast</p>
    </div>
    <div class="player__eq" aria-hidden="true"><span></span> … <span></span></div>
    <div class="player__progress">
      <input type="range" class="player__seek" id="seek" min="0" max="1000" value="0" aria-label="Seek">
      <div class="player__progress-track"><div class="player__progress-fill" id="fill"></div></div>
      <div class="player__time"><span id="cur">0:00</span><span id="dur">0:00</span></div>
    </div>
    <div class="player__controls">
      <button class="ctrl ctrl--sm" aria-label="Previous">‹</button>
      <button class="ctrl ctrl--play" id="play" aria-label="Play">▶</button>
      <button class="ctrl ctrl--sm" aria-label="Next">›</button>
    </div>
  </div>
  <audio id="audio" src="your-track.mp3"></audio>
</section>
```

The script toggles `is-playing` on `#player` from the `<audio>` `play`/`pause` events, drives `#fill` width + `#seek` value from `timeupdate`, and seeks on `#seek` input.

## Why is this useful?

- **Animation-first** — exactly the "rotating art, progress bar, glowing controls" the issue requests; the vinyl spin, equalizer bounce, and button glow are all CSS `@keyframes` gated on a single class.
- **Real media integration** — it's a genuine `<audio>` controller (play/pause/seek/time), not a static mock; drop in any `src`.
- **Accessible** — native `<button>`s and a real range input for seeking (keyboard + touch for free); decorative art/equalizer are `aria-hidden`; full `prefers-reduced-motion` support disables spin/bounce/pulse.
- **Self-contained** — silent data-URI audio means the demo needs no external asset.
- **Reusable** — configurable via CSS custom properties (`--ap-accent`, `--ap-glow`, `--ap-radius`, `--ap-dur`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Includes the tiny play/pause/seek script and a silent data-URI audio track.
- `style.css` — player shell, rotating vinyl art, staggered equalizer, progress bar + invisible seek range, glowing/pulsing controls, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
