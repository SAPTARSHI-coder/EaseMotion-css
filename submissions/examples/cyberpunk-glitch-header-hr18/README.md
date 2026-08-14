# Cyberpunk Glitch Header Banner (`cyberpunk-glitch-header-hr18`)

A retro-futuristic CSS glitch-effect hero title banner, built for issue
[#55699](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55699).

## A note on naming

The issue's own filenames (`index.html`, `styles.css`) and its suggested
folder (`cyberpunk-glitch-header-em`, no per-contributor suffix) don't
match this repo's actual enforced submission convention —
`demo.html` + `style.css` + `README.md`, in a uniquely-suffixed folder.
This submission uses `demo.html` / `style.css` and the folder
`cyberpunk-glitch-header-hr18` to match what the repo's automated
submission validator actually checks for.

## What it does

A hero banner with an RGB-split glitch title (`SYSTEM ONLINE`), a subtle
scanline overlay drifting slowly down the banner, and a pulsing neon
accent line beneath the title — all built with the classic
`data-text` / `::before` / `::after` glitch technique, entirely in CSS.

The title text is duplicated by its two pseudo-elements
(`content: attr(data-text)`), each tinted toward one channel of an RGB
split (cyan and magenta/red) and blended with `mix-blend-mode: screen` so
they read as neutral white where they overlap. Two independent
`@keyframes` sequences — deliberately out of phase with each other —
spend most of their time at rest and only briefly jump to an offset
`clip-path` slice with a hard, un-eased cut, which reads as a digital
glitch rather than a smooth wobble.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<header class="cgh-hero-hr18">
  <div class="cgh-scanlines-hr18" aria-hidden="true"></div>
  <h1 class="cgh-glitch-title-hr18" data-text="YOUR TITLE HERE">YOUR TITLE HERE</h1>
  <div class="cgh-neon-line-hr18" aria-hidden="true"></div>
</header>
```

The `data-text` attribute value must exactly match the element's own text
content — the pseudo-elements read it via `attr(data-text)` to generate
the two colored glitch layers on top of the real text.

### Tuning the glitch

```css
.cgh-hr18 {
  --ease-glitch-duration-hr18: 3.2s; /* how long one full glitch cycle takes */
  --ease-glitch-offset-hr18: 3px;    /* how far each layer jumps during a glitch */
}
```

## Accessibility notes

- The real, readable title text lives directly in the `<h1>` — the
  pseudo-element layers are purely decorative color duplicates sitting on
  top of it, not a replacement for it.
- The scanline overlay and neon line are marked `aria-hidden="true"`,
  since they carry no information beyond visual styling.
- `@media (prefers-reduced-motion: reduce)` disables the glitch jumps and
  the scanline drift entirely, leaving a clean, static, subtly-tinted
  title — motion is never forced on someone who's asked their system not
  to show it.
- Per the issue's own acceptance criteria, the glitch keyframes spend the
  large majority of each cycle at full legibility (0 offset, no clip),
  with only brief, occasional jumps — the title is designed to always be
  readable, not obscured by constant distortion.

## Responsiveness

The title uses `clamp()` for its font size, scaling smoothly between
mobile and desktop widths, and the hero card's padding tightens under a
`480px` viewport.

## Why this fits EaseMotion CSS

A pure-CSS, zero-JavaScript animated effect, exactly as the issue
requires, using only `@keyframes`, pseudo-elements, and `clip-path` — no
framework, no build step, and respecting `prefers-reduced-motion` as a
first-class part of the design rather than an afterthought.

All classes and the folder itself use a `-hr18` suffix to avoid colliding
with any other contributor's submission under `submissions/examples/`.
