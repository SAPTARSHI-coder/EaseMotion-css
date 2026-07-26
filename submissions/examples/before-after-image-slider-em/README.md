# Interactive Comparison Image Slider (Before/After)

> A split-screen image comparison component with a draggable divider handle, full touch/pointer support, and keyboard accessibility using a transparent `<input type="range">` overlay.

## Features

- **CSS Custom Property Clip** — The Before image layer is clipped using `clip-path: inset(0 calc(100% - var(--split)) 0 0)`. Only the `--split` CSS variable needs updating to reveal/hide the layer.
- **Transparent Range Input** — A full-size invisible `<input type="range">` sits atop all layers. This gives native keyboard arrow-key support and mobile drag functionality for free, while the visual handle and divider are pure CSS.
- **Pointer Events API** — Supplements the range input with raw `pointerdown / pointermove` events and `setPointerCapture()` for smooth dragging anywhere on the component, not just over the thumb.
- **Accessible** — `role="img"` with `aria-label` on the container, and dynamic `aria-valuenow` updates on the hidden range input for screen reader announcements.
- **No Distortion** — `aspect-ratio: 16 / 9` preserves the comparison panel geometry and `object-fit: cover` keeps both images correctly cropped.

## Files

```
submissions/examples/before-after-image-slider-em/
├── demo.html    — Component HTML with stacked image layers, divider handle, and overlay range input
├── style.css    — clip-path clipping logic, divider positioning, and the invisible range input overlay
├── script.js    — Pointer event handling, --split CSS property updates, and ARIA sync
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--split` | `50%` | The CSS variable controlling the Before image clip boundary |
| `--handle-bg` | `#ffffff` | Background of the circular drag handle |
| `--divider-color` | `rgba(255, 255, 255, 0.9)` | White vertical divider line |

## HTML Structure

```html
<div class="comparison" id="comparison" style="--split: 50%">
  <div class="comparison__after"> ... </div>   <!-- Bottom layer -->
  <div class="comparison__before"> ... </div>  <!-- Top, clipped layer -->
  <div class="comparison__divider">
    <div class="comparison__handle"> ... </div>
  </div>
  <input type="range" class="comparison__range" id="comparison-range" min="0" max="100" value="50" />
</div>
```

## How It Works

1. The **After** image fills the full container.
2. The **Before** image sits on top, clipped to `clip-path: inset(0 calc(100% - var(--split)) 0 0)` — so it only shows from the left edge to the split position.
3. The **divider** is `position: absolute; left: var(--split)` and moves in sync.
4. JavaScript updates `--split` from the transparent overlay `<input type="range">` or raw pointer events.

## Acceptance Criteria ✅

- [x] Dragging the divider line reveals/hides the top image layer seamlessly.
- [x] Touch gestures fully supported via native `<input type="range">` and `Pointer Events API`.
- [x] Keyboard Left/Right arrow keys adjust the comparison slider level.
- [x] Image aspect ratio maintained without distortion via `aspect-ratio: 16/9` and `object-fit: cover`.
- [x] Conforms to repository structure (`demo.html`, `style.css`, `script.js`, `README.md`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
# Before / After Comparison Slider

## 1. What does this do?

This is a self-contained example (resolves [#55696](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55696)) that adds an interactive, draggable before/after image comparison slider — the kind used in design-portfolio and photo-retouching showcases to reveal a "before" and "after" state side by side.

It includes two working instances:

- **Darkroom grade** — a desaturated landscape scene sliding into a vivid color-graded version, demonstrating the component on illustrative imagery.
- **Interface redesign** — a wireframe-style UI mockup sliding into its redesigned counterpart, demonstrating the component on flat UI content instead of a photo.

Both instances share the same markup pattern and are driven entirely by one CSS custom property, `--clip-offset`.

## 2. How is it used?

Open `demo.html` in a browser — no build step, no dependencies. Drag the circular handle left/right, tap and swipe on mobile, or click the handle and use the **Left/Right arrow keys** to nudge the comparison point.

The core pattern, consistent with the [component conventions](../../../README.md) used elsewhere in this repo:

```html
<div class="compare" style="--clip-offset: 50%">
  <div class="compare-frame">
    <div class="compare-layer compare-layer--before">...before content...</div>
    <div class="compare-layer compare-layer--after">...after content...</div>
    <div class="compare-handle"></div>
  </div>
  <input type="range" class="compare-range" min="0" max="100" value="50" />
</div>
```

```css
.compare-layer--after {
  clip-path: inset(0 calc(100% - var(--clip-offset)) 0 0);
}
```

```js
// script.js
range.addEventListener("input", () => {
  container.style.setProperty("--clip-offset", `${range.value}%`);
});
```

The "after" layer sits on top of the "before" layer and is clipped from the right edge by `--clip-offset`. A native `<input type="range">` is stretched over the whole frame, fully transparent except for its thumb, which is styled to look like the visible handle grip. Because it's a real range input, dragging, touch swiping, and arrow-key nudging all come from the browser for free — `script.js` only has to copy the input's value onto the CSS variable.

## 3. Why is it useful?

Most before/after sliders reach for `mousemove`/`touchmove` listeners and manual position math, which means re-implementing drag physics, touch handling, and keyboard support separately. Anchoring the whole interaction to a single custom property and a native range input removes almost all of that: the browser already knows how to drag, swipe, and step a range control, and CSS already knows how to clip a layer — this component just wires the two together. That makes it easy to drop a second, third, or fourth instance onto a page (as the two examples here show) without writing any additional interaction code, only new markup for the before/after content itself.
