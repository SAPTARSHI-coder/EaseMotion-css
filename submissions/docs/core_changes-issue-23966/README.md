# ease-image — Issue #23966

## What

Utility classes that provide **CSS-level hints** for image loading behavior using `content-visibility`. They control <em>rendering</em> of the image container, complementing the HTML `loading` attribute which controls <em>fetching</em>.

| Class               | Effect                                                                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `.ease-image-lazy`  | `content-visibility: auto` with `contain-intrinsic-size: 0 var(--ease-image-lazy-size)` — the browser defers rendering until near the viewport |
| `.ease-image-eager` | `content-visibility: visible` — the element renders immediately                                                                                |

Custom property: `--ease-image-lazy-size` (default `300px`) controls the intrinsic size hint for lazy containers.

## How

Wrap `<img>` elements in a container and apply the class:

```html
<!-- Lazy: defer rendering until near viewport -->
<div class="ease-image-lazy">
  <img src="photo.jpg" loading="lazy" alt="Photo" />
</div>

<!-- Eager: render immediately -->
<div class="ease-image-eager">
  <img src="hero.jpg" loading="eager" alt="Hero" />
</div>
```

**Recommended HTML attribute pairing:**

- `loading="lazy"` — defers image fetching (native browser lazy loading)
- `loading="eager"` — fetches image immediately (default behavior)
- `decoding="async"` — enables off-main-thread image decoding
- `fetchpriority="high"` — for LCP-critical images

## Why

Images are often the heaviest resources on a page. Optimizing their loading strategy is critical for performance. While `loading="lazy"` (HTML) handles <em>fetching</em>, `content-visibility` (CSS) handles <em>rendering</em>. By deferring both fetch and render for off-screen images, you reduce initial layout cost, paint time, and memory usage. These utilities provide a simple way to implement this dual-optimization pattern. The eager class ensures critical images (hero banners, above-the-fold content) are rendered immediately.
