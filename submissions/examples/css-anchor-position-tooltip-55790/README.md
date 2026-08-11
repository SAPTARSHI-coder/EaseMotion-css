# CSS Anchor Position Tooltip

A tooltip component built on the native CSS Anchor Positioning API,
with a plain absolute-position fallback for browsers that don't
support it yet. No JavaScript is used for placement in either path.

## How it works

### The anchor relationship

Anchor Positioning lets one element ("the anchor") give another
element ("the positioned element") a named handle to attach to, even
though they aren't nested in the DOM:

```css
/* The trigger becomes an anchor */
#anchor-top {
  anchor-name: --anchor-top;
}

/* The tooltip attaches to that anchor by name */
#tip-top {
  position: fixed;
  position-anchor: --anchor-top;
  position-area: top;
}
```

`position-area: top` tells the browser to place the tooltip directly
above whatever element declared `anchor-name: --anchor-top` —
regardless of where the tooltip sits in the document. That's the
whole positioning logic. No `getBoundingClientRect()`, no scroll
listeners, no JS at all.

### The fallback

Anchor Positioning is a newer API, so everything is wrapped in:

```css
@supports (anchor-name: --a) {
  /* anchor-positioning rules only apply here */
}
```

Outside that block, the tooltip uses ordinary `position: absolute`
inside a `position: relative` wrapper (`.anchor-wrap`), offset with
plain `top`/`left`/`right`/`bottom`. Every browser gets a working,
correctly placed tooltip — modern browsers just get the more robust,
JS-free version that also handles edge-of-viewport flipping
automatically (a native browser behavior of anchor positioning, not
something this demo has to code manually).

### Motion

Both paths share the same fade + slight slide transition, driven by
`opacity` and `transform` on `.tooltip`, triggered by `:hover` and
`:focus-within` on the wrapper — so the entrance animation looks
identical no matter which positioning path a browser takes.

## Usage

```html
<div class="anchor-wrap">
  <button class="anchor-btn" id="my-trigger" aria-describedby="my-tip">
    Hover me
  </button>
  <div class="tooltip tooltip--top" id="my-tip" role="tooltip">
    Tooltip content
  </div>
</div>
```

```css
#my-trigger { anchor-name: --my-trigger; } /* inside @supports block */
#my-tip     { position-anchor: --my-trigger; position-area: top; }
```

Four placement modifiers are included: `.tooltip--top`,
`.tooltip--bottom`, `.tooltip--left`, `.tooltip--right`.

## Why it fits EaseMotion CSS

It's pure CSS with zero positioning JavaScript, demonstrates a modern
browser capability, and degrades gracefully — matching EaseMotion's
animation-first, lightweight, composable philosophy while still being
usable in every browser today.

## Accessibility

- `role="tooltip"` and `aria-describedby` connect each trigger to its
  tooltip for assistive technology.
- `:focus-within` mirrors the hover reveal for keyboard users.
- `@media (prefers-reduced-motion: reduce)` removes the fade/slide
  transition; the tooltip still appears, just instantly.

## Files

- `demo.html` — four triggers demonstrating all four placements.
- `style.css` — shared tooltip styling, the `@supports`-gated anchor
  positioning rules, and the absolute-position fallback.
- `README.md` — this file.
