# ease-glitch-flicker-popover

A popover that pops in with a glitchy flicker — RGB-split text copies and jittery transforms during the entrance, then settles. Revealed on hover or keyboard focus of its trigger.

## What does this do?

Adds a **glitch-flicker-popover**: a glassmorphism tooltip-style popover that appears when its trigger is hovered or focused. On reveal it plays `@keyframes gf-flicker` — a stepped, jittery entrance that flickers opacity, jitters `transform` (small x/y offsets + scale), and spikes brightness — while two offset color-channel copies of the heading text (`--r` red, `--b` cyan, `mix-blend-mode: screen`) jitter separately to create the RGB-split glitch effect before settling.

## How is it used?

1. Wrap a `.trigger` button and a `.popover` (with `role="tooltip"`) inside a `.pop-host`.
2. The heading is rendered three times: the visible `.popover__text` plus `.popover__text--r` and `.popover__text--b` (both `aria-hidden="true"`), each carrying the same `data-text`. The CSS reveals the popover on `:hover`/`:focus-within` of the host.

```html
<link rel="stylesheet" href="style.css" />

<div class="pop-host">
  <button type="button" class="trigger" aria-describedby="gf-pop-1">Hover/focus me</button>
  <div class="popover" id="gf-pop-1" role="tooltip">
    <span class="popover__text" data-text="New drop!">New drop!</span>
    <span class="popover__text popover__text--r" data-text="New drop!" aria-hidden="true">New drop!</span>
    <span class="popover__text popover__text--b" data-text="New drop!" aria-hidden="true">New drop!</span>
    <p class="popover__sub">…</p>
  </div>
</div>
```

## Why is this useful?

- **Animation-first** — the signature motion is `@keyframes gf-flicker`: a stepped (`steps(2, end)`) entrance that flickers `opacity`, jitters `transform` (x offsets + scale), and spikes `filter: brightness()`. The two channel copies run `@keyframes gf-r`/`gf-b` with opposing x offsets to produce the RGB-split glitch. All via `transform`/`opacity`/`filter`.
- **Glassmorphism aesthetic** — the popover is a frosted panel via `backdrop-filter: blur()`; the glitch channels are screen-blended accents.
- **Accessible** — `role="tooltip"` + `aria-describedby` linking trigger to popover; the decorative color-channel copies are `aria-hidden="true"`. Trigger is a real `<button>` with `:focus-visible` ring, so keyboard focus reveals the popover too. Full `prefers-reduced-motion` support (popover appears instantly with no flicker; channel copies hidden).
- **Reusable** — configurable via CSS custom properties (`--flicker-duration`, `--flicker-ease`, `--r-channel`, `--b-channel`, `--glass-blur`). A `--bottom` modifier flips placement.

## Files

- `demo.html` — self-contained demo (open directly in a browser; no server, CDNs, or frameworks). Pure CSS reveal, no JS.
- `style.css` — glassmorphism popover, glitch-flicker entrance keyframes, RGB-split channel copies, hover/focus-within reveal, focus-visible states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
