## What does this do?

Provides `ease-content-visibility` utility classes to control content-visibility — lazy-rendering off-screen elements for improved page performance.

## How is it used?

```html
<section class="ease-content-visibility-auto-za">
  <!-- Only rendered when visible in the viewport -->
</section>
```

## Why is it useful?

EaseMotion core has no content-visibility utilities. `content-visibility: auto` defers rendering and painting of off-screen elements, significantly improving initial page load time on content-heavy pages.
