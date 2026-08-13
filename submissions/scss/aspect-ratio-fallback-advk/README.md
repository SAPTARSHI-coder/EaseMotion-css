# aspect-ratio-fallback-advk

A Sass mixin that sets the native `aspect-ratio` property and provides the
classic padding-top intrinsic-ratio fallback for engines that predate it.

## Usage

```scss
@use 'aspect-ratio-fallback' as *;

.video-frame {
  @include aspect-ratio-fallback(16, 9);
}
```

```html
<div class="video-frame">
  <iframe src="..."></iframe>
</div>
```

| Param | Default | Description |
|---|---|---|
| `$width` | `16` | Ratio width component. |
| `$height` | `9` | Ratio height component. |

In the fallback path, the mixin's element needs exactly one child (the
media/content) — the fallback absolutely positions `:first-child` to fill
the ratio box created by the `::before` spacer.

## Why is it useful?

`aspect-ratio` is broadly supported now, but a component library aiming for
older browser support (or embedded WebViews pinned to older engines) can't
assume it's always present — without a fallback, those boxes collapse to
zero height in a browser that ignores the property, since nothing else sets
a height. The `@supports not (aspect-ratio: 1 / 1)` block reintroduces the
padding-top trick (`padding-top` percentages resolve against the
*containing block's width*, which is what makes it usable as a
width-derived height) only where it's actually needed, so modern browsers
get the simpler, layout-cheaper native property and nothing extra.
