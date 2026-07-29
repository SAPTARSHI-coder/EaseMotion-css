# Before/After Comparison Slider (`before-after-slider-hr18`)

A draggable split-screen image comparison slider, built for issue
[#55696](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55696).

## A note on naming

The issue's own filenames (`index.html`, `styles.css`) and its suggested
folder (`before-after-comparison-slider-em`, no per-contributor suffix)
don't match this repo's actual enforced submission convention —
`demo.html` + `style.css` + `README.md`, in a uniquely-suffixed folder.
This submission uses that convention, plus the `script.js` file the issue
also explicitly asks for, matching what the repo's automated submission
validator checks for.

## What it does

Two layers — a "before" scene and an "after" scene — sit exactly on top of
each other inside one frame. The "before" layer is clipped with
`clip-path` to reveal only its left portion, controlled entirely by one
CSS custom property, `--bas-pos-hr18`. Dragging the slider (or clicking
anywhere on the frame, or focusing it and pressing the arrow keys) updates
that single property, which simultaneously moves the reveal clip, the
divider line, and the round handle — all three are bound to the same
variable, so they can never visually drift out of sync with each other.

**The images here are CSS-painted placeholder gradients**, not real
photos — this repo's submission guidelines don't provide a place to bundle
binary image assets, so the demo stands in two solid "scenes" to
illustrate the mechanism. Swapping in real `<img>` elements (or
background images) is a drop-in change; see Usage below.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a local `style.css` and a local
`script.js`; no build step, package manager, or external CDN.

## Usage

```html
<div class="ease-compare-slider-hr18">
  <div class="bas-layer-hr18 bas-layer-after-hr18">
    <!-- swap this background for your own "after" image -->
    <span class="bas-layer-label-hr18">After</span>
  </div>
  <div class="bas-layer-hr18 bas-layer-before-hr18">
    <!-- swap this background for your own "before" image -->
    <span class="bas-layer-label-hr18">Before</span>
  </div>
  <div class="bas-divider-hr18" aria-hidden="true"></div>
  <div class="bas-handle-hr18" aria-hidden="true">&#8646;</div>
  <input type="range" class="bas-range-hr18" min="0" max="100" value="50" aria-label="Comparison slider" />
</div>

<script src="script.js"></script>
```

To use real photos instead of the placeholder gradients, replace each
`.bas-layer-hr18`'s background with `background-image: url(...)` (and
`background-size: cover`), or swap the `<div>` for an `<img>` styled to
fill the frame (`position: absolute; inset: 0; object-fit: cover;`).

`script.js` finds every `.ease-compare-slider-hr18` on the page
automatically and wires up its range input — multiple sliders on one page
work independently with no extra setup.

## Accessibility notes

- The actual interactive control is a native `<input type="range">`,
  stretched invisibly over the whole frame — dragging, clicking, touch
  gestures, and left/right arrow-key adjustment all work for free, since
  they're native range-input behaviors, not custom pointer-event code.
- The range input carries a descriptive `aria-label`
  ("Comparison slider — drag to reveal before or after"), so its purpose
  and current value are announced correctly by screen readers.
- The visual-only divider line and handle icon are marked
  `aria-hidden="true"`, since the range input is already the accessible
  representation of the same state.
- Focus is clearly visible via `:focus-visible` on the range input itself.
- There's no ambient/automatic motion here — the divider only moves in
  direct response to user input — so there's nothing for
  `prefers-reduced-motion` to need to suppress; the stylesheet includes a
  defensive rule disabling transitions under that preference regardless,
  in case a future integration adds one.

## Responsiveness

The frame uses `aspect-ratio: 16 / 10` and fills its container's width, so
it scales cleanly at any viewport size without a dedicated media query.

## Why this fits EaseMotion CSS

The entire reveal mechanism runs on one CSS custom property and a native
form control — no custom drag-tracking math, no pointer-event listeners,
just `range.addEventListener("input", ...)` setting one variable that CSS
does the rest with. That's a small, readable, dependency-free
implementation consistent with the framework's philosophy.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
