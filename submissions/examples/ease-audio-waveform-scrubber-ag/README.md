# Interactive Audio Waveform Scrubber

> An interactive audio waveform scrubber component with a draggable playhead, loop A/B handles, hover timestamp tooltip, four CSS theme presets, and full playback controls — built with pure HTML, CSS, and vanilla JS. Zero dependencies; works by opening `demo.html` directly in any modern browser.

---

## What does this do?

Renders a 60-bar waveform visualiser that doubles as a fully interactive playback scrubber. The user can:

- **Seek** by clicking or dragging anywhere on the waveform.
- See a **live timestamp tooltip** that follows the cursor (`mm:ss` format).
- Drag **Loop Start (A)** and **Loop End (B)** handles to define a loop region.
- Control playback with **Play/Pause**, **Rewind 5 s**, and **Forward 5 s** buttons.
- Adjust **volume** with a range slider, and toggle **mute**.
- Select **playback speed**: 0.75×, 1×, 1.25×, 1.5×.
- Switch between three **preset tracks** (waveform shape and duration change).
- Switch between four **colour themes** without any layout shift.

---

## How is it used?

Link the stylesheet and include the waveform stage markup:

```html
<!-- On <html> or a parent element -->
<html data-theme="cyberpunk">

<link rel="stylesheet" href="style.css">

<!-- Waveform scrubber region -->
<div class="waveform-stage" id="waveformStage" role="slider"
     aria-label="Playback position scrubber"
     aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"
     tabindex="0">

  <div class="waveform-tooltip" id="hoverTooltip" aria-hidden="true"></div>
  <div class="loop-region"   id="loopRegion"></div>
  <div class="loop-handle loop-handle--start" id="loopHandleStart" role="slider" tabindex="0">
    <span class="loop-handle__label">A</span>
  </div>
  <div class="loop-handle loop-handle--end" id="loopHandleEnd" role="slider" tabindex="0">
    <span class="loop-handle__label">B</span>
  </div>
  <div class="waveform-bars" id="waveformBars"></div>
  <div class="playhead" id="playhead">
    <div class="playhead__knob"></div>
    <div class="playhead__line"></div>
  </div>
</div>
```

Generate 60 bars with a CSS custom property for amplitude:

```js
for (let i = 0; i < 60; i++) {
  const bar = document.createElement('div');
  bar.className = 'wave-bar';
  bar.style.setProperty('--bar-amp', amplitude); // 0.18 – 1.0
  barsContainer.appendChild(bar);
}
```

---

## Why is it useful?

1. **Animation-first UI** — waveform bars use CSS `transform: scaleY(var(--bar-amp))` driven by a `--bar-amp` custom property, keeping rendering on the GPU compositor thread. Bar bounce while playing is handled by `@keyframes barBounce`, paused via `animation-play-state: paused` outside `.is-playing`.
2. **Zero-reflow seeking** — playhead and loop handle positions use `left: <percent>%`, avoiding `width`-based reflow. All state transitions use `transform`, `opacity`, and `box-shadow`.
3. **Theme switching without reflow** — all colour values are CSS custom properties declared on `[data-theme="…"]`. Switching themes changes only inherited variable values; no layout properties change.
4. **Self-contained** — no external fonts, images, audio files, or JS libraries. Playback is simulated with `requestAnimationFrame`. Works immediately via `file://` in any modern browser.

---

## Interaction behaviour

| Interaction | Result |
|---|---|
| Click waveform | Seek to that position |
| Drag on waveform | Continuous scrubbing |
| Arrow keys (waveform focused) | Step ±1 bar |
| Space / Enter (waveform focused) | Play / Pause |
| Drag loop handle | Move loop A or B marker |
| Arrow keys (handle focused) | Move handle ±1% |
| Hover waveform | Tooltip shows `mm:ss` at cursor |
| Playhead hover | Knob scales to 1.35× (spring easing) |

---

## Themes

Four presets via `data-theme` on `<html>`:

| Value | Palette |
|---|---|
| `cyberpunk` | Cyan `#00f2fe` / Magenta `#ff007f` on deep purple |
| `amber` | Amber `#ffb000` / Orange `#ff5500` on near-black |
| `midnight` | Indigo `#818cf8` / Sky `#38bdf8` on dark slate |
| `emerald` | Mint `#34d399` / Teal `#10b981` on deep green |

---

## Files

```
submissions/examples/ease-audio-waveform-scrubber-ag/
├── demo.html   — Interactive scrubber demo (all JS inline, no server needed)
├── style.css   — All styles, themes, animations, and responsive rules
└── README.md   — Component documentation
```

---

## Browser compatibility

Tested in Chrome, Firefox, Safari, and Edge. Requires no build tools or server.
`backdrop-filter` degrades gracefully in browsers that do not support it.
`@media (prefers-reduced-motion: reduce)` disables all bounce animations automatically.

---

## License

MIT — Part of [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css).
