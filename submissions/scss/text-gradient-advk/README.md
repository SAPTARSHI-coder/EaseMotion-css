# text-gradient-advk

A Sass mixin for gradient-filled text, with a solid-colour fallback so
unsupported engines show readable text instead of invisible
transparent-on-transparent content.

## Usage

```scss
@use 'text-gradient' as *;

.hero-title {
  @include text-gradient($gradient: linear-gradient(90deg, #f59e0b, #ef4444));
}
```

| Param | Default | Description |
|---|---|---|
| `$gradient` | `linear-gradient(90deg, #4c6ef5, #a855f7)` | Gradient painted through the text. |
| `$fallback` | `#4c6ef5` | Solid colour used where clip-to-text isn't supported. |

## Why is it useful?

The standard gradient-text recipe sets `color: transparent` and clips a
background gradient to the glyph shapes — but `color: transparent` is
unconditional in most copies of the snippet, so an engine without
`background-clip: text` support renders genuinely invisible text: transparent
color, no clipped background to show through. This mixin sets an opaque
`$fallback` color first and only overrides it to `transparent` inside an
`@supports` block gated on real clip-to-text support, so the unsupported
path degrades to solid-colour text rather than disappearing.

It also forces solid `CanvasText` under `forced-colors: active`, where
gradient fills are typically stripped by the user agent anyway and a leftover
`transparent` color would otherwise make the text vanish against a
high-contrast background.
