# Fix: ease-popover focus outline clipped by parent overflow

Resolves #59785

## What

The `ease-popover` component's keyboard-focus ring was drawn with an
outward `outline`, which gets clipped whenever the popover sits inside a
container with `overflow: hidden` or `overflow: auto`. This broke the
visible focus indicator for keyboard users - an accessibility regression.

## How

Replaced the outward `outline` on `.ease-popover:focus-visible` with an
inset `box-shadow`:

    .ease-popover:focus-visible {
      box-shadow: 0 0 0 2px var(--ease-focus-color) inset;
    }

An inset box-shadow is painted inside the element's own border box, so no
ancestor's `overflow` can ever clip it, regardless of nesting or
positioning. The default `outline` is also reset to `none` on the base
`.ease-popover` class so it never fires and conflicts with the new
box-shadow ring.

`demo.html` reproduces the original bug side-by-side with the fix, both
inside an identical `overflow: hidden` wrapper - tab through both buttons
to compare.

## Why this approach (vs. negative outline-offset)

A negative `outline-offset` also pulls the ring inward and was considered,
but it produces a thinner, softer-looking ring in most browsers than the
project's existing focus styling, and can still get clipped by a pixel or
two in combination with certain overflow + transform setups. The inset
box-shadow is the more robust fix and needs no extra offset tuning.

## Testing

1. Open `demo.html` in a browser.
2. Press Tab to move focus to the "before" button - note the ring is
   clipped by the dashed container edge.
3. Press Tab again to move to the "after" button - the ring is fully
   visible, still inside the same `overflow: hidden` container.
