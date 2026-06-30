# Domino / Cascade Stagger Reveal

## What is this?

A CSS-first entry animation component that triggers list items or grid cells to stagger-reveal sequentially rather than appearing all at once, creating a clean domino-toppling visual flow.

## How does it work?

The cascade is powered by the CSS `:nth-child()` and `:nth-last-child()` selectors combined with `calc()`. Up to 20 children are automatically pre-bound to a `--index` variable in the stylesheet.
Each child's animation delay is calculated using `calc(var(--index) * var(--cascade-gap))`.

- For reverse cascades, `:nth-last-child()` is used to ensure the last item triggers first with zero initial delay, regardless of the list size.
- Grid diagonal stagger uses static indices mapping coordinates to `row + col` offsets.
- Developers can override this dynamically for larger or responsive lists by setting `--index` inline using a simple JS loop.

## Why is it useful?

Choreographing entry animations traditionally requires either writing dozens of custom delay classes or importing bulky JavaScript animation libraries. By using CSS custom properties and pure CSS structural selectors, this system offers a clean, zero-dependency stagger workflow that works out-of-the-box and degrades gracefully on devices that prefer reduced motion.
