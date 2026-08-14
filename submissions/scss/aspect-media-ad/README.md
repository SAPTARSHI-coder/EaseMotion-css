# Aspect Media mixin

> Issue: [#63553](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63553)

Fixed-ratio media containers, so images and embeds reserve their space before loading instead of shifting the page when they arrive.

## Mixins

### `aspect-media($ratio, $fit, $radius)`

```scss
.thumb  { @include aspect-media(16 9); }
.square { @include aspect-media(1, $radius: 12px); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$ratio` | `List \| Number` | `16 9` | `16 9`, or a single number treated as `n:1`. Errors on a wrong-length list or non-positive values. |
| `$fit` | `String` | `cover` | `object-fit` for the media child. |
| `$radius` | `Number` | `0` | Corner radius; omitted entirely when `0`. |

Applies to `img`, `video`, `iframe`, `picture`, and `.aspect-media-ad__inner`.

### `aspect-media-responsive($map, $fit, $radius)`

```scss
.hero {
    @include aspect-media-responsive((default: (4 3), 768px: (21 9)));
}
```

A 21:9 cinematic ratio is unreadable on a phone; this lets it become 4:3 there without re-emitting the whole mixin per breakpoint.

### `aspect-media-placeholder($color, $speed)` + `aspect-media-keyframes`

A shimmer skeleton shown while media loads. Call `aspect-media-keyframes` **once** at the top level.

```scss
@include aspect-media-keyframes;
.thumb { @include aspect-media(16 9); @include aspect-media-placeholder; }
```

## Why it fits EaseMotion

**The two ratio strategies cannot simply be stacked.** The padding-top hack requires an absolutely positioned child, and that positioning must *not* apply on the modern path — otherwise the child escapes the flow for no reason, breaking anything that relied on it sizing normally. Scoping the legacy geometry inside `@supports not (aspect-ratio: 1)` means exactly one strategy is ever active.

The placeholder sits **behind** the media child via `z-index`, so it disappears the moment the image paints — no load handler, no state, no JavaScript. Its infinite shimmer is cancelled outright under `prefers-reduced-motion`, since a perpetual loop is precisely what that setting opts out of.

Ratio arguments are validated at build time: a list of the wrong length, a non-numeric ratio, or a zero/negative value all raise an error rather than emitting a division that silently produces `padding-top: 0%` and collapses the container.
