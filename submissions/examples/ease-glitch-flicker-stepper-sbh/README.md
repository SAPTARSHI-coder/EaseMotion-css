# ease-glitch-flicker-stepper

A horizontal stepper whose current-step label glitches into view (RGB-split flicker) when advanced, with a connector that fills up to the current step. Pure CSS — advancing is driven by hidden radio inputs, so no JavaScript is required for the animation.

## What does this do?

Adds a **glitch-flicker-stepper**: a glassmorphism horizontal stepper. When a step becomes current, its label plays `@keyframes gfs-flicker` — a stepped, jittery entrance that flickers `opacity`/`brightness` and jitters `transform` — while two offset color-channel copies of the label (`--r` red, `--b` cyan, `mix-blend-mode: screen`) jitter separately to create an RGB-split glitch before settling. Completed nodes turn emerald; the current node scales up and glows; the connector line grows to the current step.

## How is it used?

1. Place N hidden `<input type="radio" class="stepper__radio">` (sharing one `name`) before the list.
2. Each `.step__node` and nav button is a `<label for="...">` pointing at its radio. The CSS `:checked ~` rules set done/current states and replay the flicker on the current label.

```html
<link rel="stylesheet" href="style.css" />

<input type="radio" name="gfs" id="gfs-1" class="stepper__radio" checked aria-hidden="true" />
<input type="radio" name="gfs" id="gfs-2" class="stepper__radio" aria-hidden="true" />
…
<ol class="stepper__list" role="list">
  <li class="step">
    <label for="gfs-1" class="step__node" tabindex="0" aria-label="Step 1: Account"></label>
    <span class="step__label">
      <span class="step__text">Account</span>
      <span class="step__text step__text--r" aria-hidden="true">Account</span>
      <span class="step__text step__text--b" aria-hidden="true">Account</span>
    </span>
  </li>
  …
</ol>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes gfs-flicker` (stepped `steps(2, end)`): flickers `opacity`, jitters `transform`, spikes `filter: brightness()`, with `@keyframes gfs-r`/`gfs-b` jittering the RGB channel copies for the glitch. The connector grows via `width` transition and the current node scales via `transform`. All via `transform`/`opacity`/`filter`/`width`.
- **Glassmorphism aesthetic** — nodes are frosted pills via `backdrop-filter: blur()`; the glitch channels are screen-blended accents.
- **Accessible** — nodes and nav buttons are focusable labels with `:focus-visible` rings; the decorative channel copies are `aria-hidden="true"`; each node has an `aria-label="Step N: name"`. Full `prefers-reduced-motion` support (states change instantly with no flicker; channel copies hidden).
- **Reusable** — configurable via CSS custom properties (`--flicker-duration`, `--flicker-ease`, `--line-duration`, `--line-ease`, `--r-channel`, `--b-channel`).

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS navigation, no JS required for the animation.
- `style.css` — glassmorphism stepper, glitch-flicker label entrance, RGB-split channel copies, growing connector, done/current node states via radio `:checked ~`, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
