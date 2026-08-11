# ease-compare-slider

A draggable before/after image comparison slider that reveals a "before" image underneath an "after" image using `clip-path`, controlled by a native `<input type="range">` for full accessibility and zero custom drag logic.

## What does this do?

- Stacks two images: the "after" image is the base layer; the "before" image sits on top inside a wrapper clipped with `clip-path: inset()`.
- A native `<input type="range">` covers the whole slider (so the entire surface is draggable) and drives the clip on `oninput`: `inset(0 (100-value)% 0 0)` — as the slider moves right, more of the "before" image is revealed.
- The same `oninput` updates a `--cs-pos` custom property that positions a visible handle (a vertical line + circular grip with chevron arrows), so the handle tracks the slider with no extra drag logic.
- Because it's a real range input, **keyboard** (arrow keys) and **touch** work natively — no custom pointer-event handling.

## How is it used?

1. Link the stylesheet.
2. Use the markup below. Order matters: after-image → before-wrap → range input → handle line/grip. The `oninput` updates both the clip-path and `--cs-pos`.

```html
<link rel="stylesheet" href="style.css" />

<div class="compare-slider">
  <img class="compare-slider-after" src="after.jpg" alt="After">
  <div class="compare-slider-before-wrap">
    <img class="compare-slider-before" src="before.jpg" alt="Before">
  </div>
  <input type="range" class="compare-slider-input" min="0" max="100" value="50"
    aria-label="Reveal before image"
    oninput="this.parentElement.style.setProperty('--cs-pos', this.value+'%');
             this.previousElementSibling.style.clipPath='inset(0 '+(100-this.value)+'% 0 0)'">
  <span class="compare-slider-handle-line" aria-hidden="true"></span>
  <span class="compare-slider-handle-grip" aria-hidden="true"></span>
</div>
```

Set the initial `--cs-pos` and `clip-path` to match the input's `value` (e.g. `value="35"` → `--cs-pos: 35%` + `clip-path: inset(0 65% 0 0)`).

## Why is this useful?

- **Accessible by default** — a native range input gives keyboard (arrow keys), touch, and screen-reader support for free; no custom drag logic or ARIA wiring to maintain.
- **`clip-path` reveal** — the modern, GPU-friendly way to do image wipes; no overflow hacks or nested masks.
- **Custom handle, native input** — the visible handle line + grip are siblings whose `left` reads `--cs-pos`, so they track the slider without a separate move handler.
- **Self-contained demo** — images are inline SVG data URIs, so the demo runs with no external assets; swap in real `<img src>` for production.
- **Reusable** — configurable via CSS custom properties (`--cs-radius`, `--cs-handle-w`, `--cs-grip-size`, `--cs-grip-bg`, `--cs-label-bg`, etc.).

## Files

- `demo.html` — self-contained showcase (open directly in a browser; no server, CDNs, or frameworks). Two sliders using inline-SVG before/after images.
- `style.css` — stacked image layers, `clip-path` default, invisible range input, handle line + grip driven by `--cs-pos`, BEFORE/AFTER labels, focus/active states, reduced-motion rules.
- `README.md` — this documentation.

## Notes for the maintainer

The contributor used the `-sbh` suffix per the naming policy to avoid collisions. Class names intentionally avoid the `ease-` prefix so the maintainer can standardize them during curation.
