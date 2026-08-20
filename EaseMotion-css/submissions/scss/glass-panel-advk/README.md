# glass-panel-advk

A frosted-glass panel mixin that only turns translucent where
`backdrop-filter` is actually supported, and forces an opaque, high-contrast
surface under `forced-colors`.

## Usage

```scss
@use 'glass-panel' as *;

.modal-surface {
  @include glass-panel;
}

.modal-surface--dark {
  @include glass-panel(
    $tint: rgba(20, 22, 28, 0.55),
    $opaque-fallback: #14161c,
    $border: rgba(255, 255, 255, 0.12)
  );
}
```

| Param | Default | Description |
|---|---|---|
| `$tint` | `rgba(255, 255, 255, 0.55)` | Translucent background used when blur is supported. |
| `$opaque-fallback` | `#f4f5f8` | Solid background used everywhere else. |
| `$blur` | `14px` | Blur radius. |
| `$border` | `rgba(255, 255, 255, 0.4)` | Panel border colour. |

## Why is it useful?

A glass panel authored as `background: rgba(...)` plus `backdrop-filter`
directly is only translucent by intent — in a browser without
`backdrop-filter` support, the same rgba background renders as a low-opacity
wash with whatever is behind it showing through unblurred, which frequently
fails contrast for the text sitting on top. This mixin sets an opaque
`$opaque-fallback` background unconditionally and only swaps in the
translucent tint inside an `@supports` block that tests for real blur
support, so contrast is never accidentally inherited from unsupported
translucency.

It also forces the opaque path under `forced-colors: active`, where blur
effects are typically suppressed by the user agent anyway and a translucent
background over system colours can produce unreadable text.
