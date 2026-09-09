# scrollbar-style-advk

A Sass mixin for custom scrollbar styling that writes both the WebKit
pseudo-element API and the standard `scrollbar-color`/`scrollbar-width`
properties, since no single API is supported everywhere yet.

## Usage

```scss
@use 'scrollbar-style' as *;

.sidebar {
  @include scrollbar-style($thumb: #888, $track: #eee, $size: 8px);
  overflow-y: auto;
}
```

| Param | Default | Description |
|---|---|---|
| `$thumb` | `#b7bdcb` | Scrollbar thumb colour. |
| `$track` | `transparent` | Scrollbar track colour. |
| `$thumb-hover` | `#9aa1b4` | Thumb colour on hover (WebKit only). |
| `$size` | `10px` | Thumb/track thickness. |

## Why is it useful?

Custom scrollbar styling has two unrelated APIs: WebKit's
`::-webkit-scrollbar` pseudo-elements (Chrome, Safari, Edge) and the
standards-track `scrollbar-color`/`scrollbar-width` properties (Firefox,
and now also Chromium as a second option). A mixin that only writes one of
the two leaves half of all browsers with the default OS scrollbar, which is
usually a visible mismatch against a custom track/thumb colour scheme.

`scrollbar-width` only accepts the keywords `auto`, `thin`, or `none` — it
cannot take a pixel value — so the mixin derives a `thin`/`auto` choice from
the requested `$size` rather than exposing a parameter that would silently
do nothing on Firefox.
