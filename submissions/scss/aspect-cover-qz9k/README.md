# aspect-cover-qz9k

Sass mixins for cropping images/video to a fixed aspect ratio via
`aspect-ratio` + `object-fit: cover`, with `object-position` exposed as a
first-class parameter.

## Usage

```scss
@use 'aspect-cover' as *;

.thumbnail {
  @include aspect-cover(4, 3, top);
}

.hero-media-container {
  @include aspect-cover-container(21, 9);
}
```

```html
<img class="thumbnail" src="portrait.jpg" alt="..." />

<div class="hero-media-container">
  <iframe src="https://maps.example.com/embed" title="Location map"></iframe>
</div>
```

| Param | Default | Description |
|---|---|---|
| `$width` / `$height` | `16` / `9` | Target ratio. |
| `$position` | `center` | `object-position` value (aspect-cover only) — which part of the source survives the crop. |

## Why is it useful?

`aspect-ratio` plus `object-fit: cover` is the standard fixed-ratio crop
recipe, but most copies of it hard-code `object-position: center`, which
crops symmetrically from all sides — for a portrait photo used as a wide
thumbnail, that usually crops off the top of someone's head. Exposing
`$position` as a real parameter (`top`, `20% 80%`, etc.) lets each usage
choose which part of the source image should survive the crop, without
needing a separate override rule bolted on after including the mixin.

`aspect-cover-container` exists because `object-fit`/`object-position` only
apply to *replaced elements* (`img`, `video`, `canvas`, `iframe` in some
engines) — a ratio-locked box wrapping arbitrary content (a map embed
that doesn't behave as a replaced element consistently, a chart canvas)
needs the ratio on the wrapper instead, with the child stretched to fill it
via `width: 100%; height: 100%`. Keeping both variants in one file makes the
choice between them explicit rather than reaching for the wrong one and
discovering the ratio silently doesn't apply.

## Choosing between the two variants

```scss
// Direct <img>/<video> -- use aspect-cover.
.product-photo {
  @include aspect-cover(1, 1);
}

// Anything else (embeds, canvases, custom elements) -- use
// aspect-cover-container, since object-fit won't apply to the child directly.
.chart-frame {
  @include aspect-cover-container(3, 2);
}
```

A quick rule of thumb: if the element in markup is literally `<img>`,
`<video>`, or `<canvas>`, reach for `aspect-cover` directly on that
element. For anything else — a `<div>` wrapping a third-party embed, a
custom component that renders its own internal markup — reach for
`aspect-cover-container` on the wrapper instead, since `object-fit`
silently does nothing on a non-replaced element and the ratio would
otherwise need a completely different technique (the padding-top hack) to
enforce.

## Responsive art direction with object-position

Because `object-position` is a real CSS property, it can be combined with
media queries to change which part of an image is emphasized at different
viewport widths — useful when the same photo is used as both a wide
banner and a narrow card thumbnail:

```scss
.banner-photo {
  @include aspect-cover(21, 9, center);

  @media (max-width: 640px) {
    // On narrow viewports the same photo crops to a taller ratio via a
    // separate rule; re-centering the crop keeps the subject in frame
    // rather than relying on the wide-crop's center point.
    aspect-ratio: 4 / 3;
    object-position: 30% center;
  }
}
```

This keeps the responsive behaviour declared entirely in CSS, with no
JavaScript needed to swap image sources or recompute a crop region per
breakpoint.
