# Spotlight Card

## What does this do?

Cards with a radial highlight and border glow that follow the pointer, using two
custom properties and one delegated listener.

## How is it used?

```html
<div class="spc-grid" onpointermove="/* set --x and --y on the hovered card */">
  <article class="spc"><h2>Title</h2><p>Body</p></article>
</div>
```

## Why is it useful?

The usual implementation attaches a `pointermove` handler to every card. On a
grid of twenty that is twenty listeners firing at pointer frequency, each writing
inline styles. Delegating a single listener to the grid and resolving the target
with `closest()` reduces that to one.

More importantly, the handler only writes two custom properties. It never reads
layout during the move (the `getBoundingClientRect` call is per-event but on the
hovered card only) and never touches the card's own `transform` or `box-shadow`,
so the content is not re-rasterised as the pointer travels. The gradients live on
pseudo-elements behind the content via `z-index: -1` and `isolation`.

The `@media (hover: none)` block matters and is usually omitted. On touch devices
there is no pointer to track, so a hover-only effect leaves the card looking
unfinished — here the border glow settles at a static low opacity instead.

`:focus-within` mirrors the hover state so keyboard users get the same emphasis,
and `forced-colors` drops both gradients in favour of the plain border, since
neither is painted in High Contrast.
