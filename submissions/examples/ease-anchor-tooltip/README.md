# ease-anchor-tooltip

A zero-JavaScript tooltip component for **EaseMotion CSS** that leverages the native [CSS Anchor Positioning API](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) to position a tooltip relative to its trigger button — entirely inside the browser's layout engine, with no scripting required.

---

## 1. What does this do?

`ease-anchor-tooltip` creates a fully interactive hover tooltip that is **spatially bound to its trigger button using only CSS**.

Instead of using JavaScript to read `getBoundingClientRect()` and set `top`/`left` pixel values at runtime, this component uses two new CSS properties:

- **`anchor-name: --ease-btn`** — declared on the button, this registers the element as a named anchor point in the browser's layout system.
- **`position-anchor: --ease-btn`** — declared on the tooltip, this tells the browser to resolve `anchor()` coordinate functions against the `--ease-btn` anchor.

The tooltip's position is then computed using pure CSS coordinate math:

```css
left: anchor(center);              /* horizontally centered on the button */
top:  calc(anchor(bottom) + 8px); /* 8 px below the button's bottom edge */
translate: -50% 0;                 /* correct for the tooltip's own width  */
```

The show/hide animation is driven by an **adjacent-sibling hover selector** — no `click` handlers, no `mouseenter` listeners, no `requestAnimationFrame` loops:

```css
.ease-anchor-btn:hover + .ease-anchor-tooltip,
.ease-anchor-tooltip:hover {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

---

## 2. How is it used?

Add `style.css` to your page, then place the button and tooltip as **adjacent siblings** inside a flex wrapper:

```html
<link rel="stylesheet" href="style.css" />

<!-- Wrapper keeps the two siblings in the same flow context -->
<div class="ease-anchor-wrapper">

  <!-- anchor-name is declared on this element inside style.css -->
  <button class="ease-anchor-btn">
    Hover for Action
  </button>

  <!-- position-anchor resolves against the button above -->
  <div class="ease-anchor-tooltip">
    Native CSS Anchor Positioned!
  </div>

</div>
```

The corresponding CSS that wires them together:

```css
/* Register the button as the named anchor */
.ease-anchor-btn {
  anchor-name: --ease-btn;
}

/* Resolve the tooltip's position against that anchor */
.ease-anchor-tooltip {
  position: absolute;
  position-anchor: --ease-btn;

  left: anchor(center);
  top:  calc(anchor(bottom) + 8px);
  translate: -50% 0;
}
```

No wrapper `position: relative` is required. No JavaScript. No build step.

---

## 3. Why is it useful?

### Permanently eliminates JavaScript positioning libraries

Libraries like **Floating UI** and **Popper.js** exist solely because CSS historically had no way to position an element relative to an arbitrary other element across stacking contexts. They solve this by:

1. Reading `getBoundingClientRect()` on every `scroll`, `resize`, and `mutation` event.
2. Computing pixel coordinates in JavaScript.
3. Writing those coordinates back to inline styles — forcing browser reflows.

The CSS Anchor Positioning API makes all of that **obsolete**. The browser itself tracks the anchor element's geometry and resolves `anchor()` values natively during the layout pass — before paint, before composite, on the GPU-accelerated rendering thread. The result is:

| Concern | JS Library approach | CSS Anchor Positioning |
|---|---|---|
| Scroll recalculation | `scroll` event → JS → inline style | Browser layout engine, automatic |
| Viewport bounds | Manual `getBoundingClientRect` logic | `position-try-fallbacks` property |
| Bundle size impact | Floating UI ≈ 12 kB min+gzip | **0 bytes** of JavaScript |
| Main thread cost | Yes — every scroll tick | **None** |
| Works across `overflow: hidden` | No (requires portals/teleport) | Yes — absolute in top-layer |

### Native viewport bounds-checking

The browser handles overflow detection automatically. Using `position-try-fallbacks`, the browser can try alternative placements if the preferred placement clips outside the viewport — no JavaScript bounds-checking required:

```css
.ease-anchor-tooltip {
  /* If bottom clips the viewport, try flipping to the top */
  position-try-fallbacks: flip-block, flip-inline;
}
```

### Progressive enhancement built-in

A `@supports not (anchor-name: --test)` block provides a graceful static fallback for browsers that do not yet implement the API, ensuring the component degrades safely without breaking layout.

---

## Browser Support

The CSS Anchor Positioning API is available in **Chrome/Edge 125+** (Chromium). Firefox and Safari support is in active development. Check [caniuse.com/css-anchor-positioning](https://caniuse.com/css-anchor-positioning) for the latest status.

---

## Files

| File | Purpose |
|---|---|
| `style.css` | Component styles — all anchor positioning logic |
| `demo.html` | Self-contained interactive demo, zero JavaScript |
| `README.md` | This file |

---

*Part of [EaseMotion CSS](../../) · Issue #62015*
