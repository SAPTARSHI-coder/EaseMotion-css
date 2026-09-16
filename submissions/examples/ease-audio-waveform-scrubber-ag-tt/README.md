# Audio Waveform Scrubber

## What does this do?

An interactive audio waveform scrubber with a full set of playback controls, loop-region selection, timestamp tooltip, color themes, and track presets — built with vanilla HTML, CSS, and JavaScript. No frameworks, no external libraries.

## Features

- **Animated waveform** — 60 amplitude bars generated from a deterministic seeded algorithm (stable on every load)
- **Seeking** — click/tap or drag the waveform to seek; full keyboard support (←/→/Home/End)
- **Playhead** — moves via `transform`/CSS custom property for GPU-friendly updates using `requestAnimationFrame`
- **Magnetic hover effect** — playhead handle scales to 1.35× on hover/focus via CSS transform
- **Timestamp tooltip** — tracks pointer position, shows time preview, clamped to viewport edges
- **Loop region** — draggable Start/End handles; region highlight with animated pulse; keyboard adjustable
- **Media controls** — Play/Pause, Rewind 5s, Forward 5s, Volume slider, Speed (0.75×/1×/1.25×/1.5×)
- **Track presets** — 4 public-domain tracks; switches safely, preserving play state
- **Color themes** — Cyberpunk Neon · Amber Gold · Midnight Blue · Emerald Mint
- **Graceful error handling** — audio load failure leaves UI intact as a visual demo

## CSS techniques

- Four CSS custom-property themes via `[data-theme]` attribute — no stylesheet duplication
- `--wave-active-gradient` drives the active bar fill per theme
- `--progress` CSS custom property on `.aws-playhead` controls position via `left: var(--progress)` + `transform: translateX(-50%)`
- `--loop-start` / `--loop-end` custom properties position the loop region without `left`/`width` reflows
- `transform` + `opacity` exclusively for all animations — no `width`/`height`/`top`/`left` animation

## Accessibility

- `role="slider"` on waveform scrubber with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, `aria-valuetext`
- `role="slider"` on loop handles with per-position `aria-valuenow`
- All buttons have `aria-label` and `aria-pressed` where appropriate
- Time display uses `aria-live="polite"` so screen readers announce changes
- All interactive elements have `:focus-visible` outlines

## Reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  .aws-loop-region { animation: none; }
  .aws-playhead__handle { transition: none; }
  /* magnetic scale effect removed */
}
```

## How to run

Open `demo.html` directly in any modern browser. No build step or server required.
Audio uses public-domain files from Wikimedia Commons. The player degrades gracefully if audio cannot be fetched.
