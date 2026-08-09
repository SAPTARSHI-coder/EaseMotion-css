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
