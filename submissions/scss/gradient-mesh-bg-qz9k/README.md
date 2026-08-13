# gradient-mesh-bg-qz9k

A Sass mixin generating a layered radial-gradient "mesh" background from a
list of colour/position/size stops, instead of hand-writing several
`radial-gradient()` calls joined by commas.

## Usage

```scss
@use 'gradient-mesh-bg' as *;

.hero-section {
  @include gradient-mesh-bg(
    (rgba(76, 110, 245, 0.5), 20% 30%, 55%),
    (rgba(236, 72, 153, 0.4), 80% 20%, 50%),
    (rgba(34, 197, 94, 0.3), 50% 85%, 60%)
  );
  background-color: #0b0d12;
}
```

Each stop is a Sass list: `(color, position, size)`. `position` and `size`
are optional per-stop and default to `50% 50%` / `60% 60%` if omitted.

## Why is it useful?

A soft, colourful "mesh gradient" background — currently a common design
trend for hero sections and marketing pages — is built from several
overlapping `radial-gradient()` layers with carefully positioned centres
and fade-out radii. Writing that by hand means keeping 3-6
`radial-gradient(...)` expressions, their commas, and their individual
position/size values all correctly formatted and in sync as a single
`background-image` value — a single misplaced comma or mismatched
parenthesis breaks the entire declaration silently (no error, just a
background that doesn't render as intended). Generating the layer list
programmatically from a Sass list of stops means adding, removing, or
adjusting one colour blob is a one-line change to that stop's entry, not a
careful hand-edit of a long comma-separated CSS value.

Each stop's `$position` and `$size` default independently based on how
many elements the stop's own list contains, so a stop can be specified with
just a colour (using sensible centre-and-standard-size defaults) while
another stop in the same mesh specifies an exact position — useful when
only one or two blobs in a mesh need precise placement and the rest are
fine centred.

## Mixing partial and full stop specifications

```scss
.card-glow {
  @include gradient-mesh-bg(
    rgba(76, 110, 245, 0.4),                    // colour only -- centred, default size
    (rgba(236, 72, 153, 0.3), 80% 70%),          // colour + position -- default size
    (rgba(34, 197, 94, 0.25), 20% 30%, 45%)      // colour + position + size, fully specified
  );
}
```

A bare colour value (not wrapped in parentheses) is itself a one-element
Sass list, so `list.length($stop) > 1` correctly evaluates to `false` for
it and both defaults apply — no special-casing needed to accept either a
plain colour or a parenthesized list as a stop.

## Layering over a solid base colour

Because each `radial-gradient()` fades to `transparent`, the mesh always
needs a solid `background-color` set separately underneath it — the
gradients alone don't fill any area they don't explicitly cover, so a mesh
without a base colour shows through to whatever's behind the element
(often unintended). Setting both `background-image` (via the mixin) and
`background-color` (set by the caller, as in the demo) is the expected
usage pattern, since a mesh's base tone is usually different per section
of a page and not something the mixin should assume.

## Performance consideration

Each additional radial-gradient layer is one more surface the browser has
to composite and blend, which is generally cheap for a handful of layers
but can add up on lower-powered devices if the mesh background covers a
large scrolling area and is repainted frequently (e.g. behind
content that itself animates). Keeping the stop count to 3-5 layers, as in
the examples here, is a reasonable practical ceiling for most hero/section
backgrounds.
