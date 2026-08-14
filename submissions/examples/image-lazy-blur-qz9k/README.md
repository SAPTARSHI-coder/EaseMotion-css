# Lazy Blur-Up Image

## What does this do?

An image that shows a blurred, scaled-up tiny placeholder immediately, then
loads the full-resolution image only once its frame nears the viewport
(via `IntersectionObserver`), cross-fading it in over the placeholder
rather than popping in abruptly once loaded.

## How is it used?

```html
<div class="ilb-frame" style="aspect-ratio: 4 / 3">
  <img class="ilb-placeholder" src="tiny-8x6.jpg" alt="" aria-hidden="true" />
  <img class="ilb-full" data-src="full-res.jpg" alt="Description of the photo" />
</div>
```

The full-resolution image's real URL lives in `data-src`, not `src`, until
`ilbLoad` decides to fetch it — keeping it out of `src` is what prevents the
browser from eagerly requesting every image on the page immediately,
which is the behaviour lazy-loading exists to avoid.

## Why is it useful?

A common blur-up implementation sets the full image's `src` directly once
its frame scrolls into view and immediately toggles a "loaded" class — but
that means the visible transition starts before the browser has actually
finished downloading and decoding the image, so the cross-fade can begin
against a still-blank or partially-rendered frame depending on network
speed. This example pre-loads the full image into a throwaway, off-screen
`Image()` object first, and only assigns `src` on the visible `<img>` (plus
adds the `.ilb-loaded` class that starts the fade) inside that loader's own
`onload` callback — so the fade-in is guaranteed to start with fully decoded
image data ready to paint, not a race against an in-flight network
request.

`IntersectionObserver` with a `rootMargin: '200px'` starts the load
slightly before the frame is actually visible, so the image has a head
start and is more likely to be ready by the time the user scrolls it fully
into view, rather than only beginning the fetch the instant it crosses the
viewport edge. A feature-detection fallback loads every image immediately
in engines without `IntersectionObserver` support, rather than leaving
images permanently unloaded.
