# Skipping Rope · Rope Swings in Arc — Interactive Jump Rope

An interactive skipping rope simulation with arc-based swing (parabolic motion via rotation), adjustable swing speed and jump height, an animated jumper with raised arms, a jump counter, start/stop/pause/reset controls, a glowing rope trail, and keyboard shortcuts (Space to jump, S to stop, R to reset, P to pause).

## What it does
- Realistic rope arc swing driven by CSS `@keyframes` rotation.
- Speed control (1–10) and jump-height control (1–10).
- Animated jumper with raised arms during jumps.
- Jump counter tracking successful jumps (`aria-live`).
- Start/Stop/Pause/Reset controls + keyboard shortcuts.
- Glowing rope trail effect.

## Files
- `demo.html` — fully self-contained working component
- `style.css` — all styling and animations
- `rope.js` — minimal vanilla JS for interaction, counter, and keyboard controls
- `README.md` — this guide

## Usage
```html
<link rel="stylesheet" href="style.css" />
<div class="ease-jumprope" role="application" aria-label="Interactive jump rope">
  <div class="ease-jumprope__scene">
    <div class="ease-jumprope__rope" aria-hidden="true"></div>
    <div class="ease-jumprope__jumper" aria-hidden="true"><span class="ease-jumprope__head"></span><span class="ease-jumprope__arm ease-jumprope__arm--l"></span><span class="ease-jumprope__arm ease-jumprope__arm--r"></span></div>
    <div class="ease-jumprope__ground" aria-hidden="true"></div>
  </div>
  <div class="ease-jumprope__panel">
    <p class="ease-jumprope__count" id="jr-count" aria-live="polite">Jumps: 0</p>
    <label class="ease-jumprope__control">Speed <input type="range" id="jr-speed" min="1" max="10" value="5" /></label>
    <label class="ease-jumprope__control">Jump <input type="range" id="jr-height" min="1" max="10" value="5" /></label>
    <div class="ease-jumprope__btns">
      <button id="jr-start" type="button">Start</button>
      <button id="jr-stop" type="button">Stop</button>
      <button id="jr-pause" type="button">Pause</button>
      <button id="jr-reset" type="button">Reset</button>
    </div>
    <p class="ease-jumprope__hint" id="jr-hint">Space: jump · S: stop · R: reset · P: pause</p>
  </div>
</div>
<script src="./rope.js" defer></script>
```

## Keyboard
- Space — jump
- S — stop
- R — reset
- P — pause/resume

## Accessibility
- `role="application"` with `aria-label`.
- Jump counter uses `aria-live="polite"`.
- All controls are native buttons with `:focus-visible` outlines.
- `@media (prefers-reduced-motion: reduce)` disables animations.

Closes #77873
