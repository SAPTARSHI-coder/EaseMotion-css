# Scroll Reveal Tall Container Height Fix

## What does this do?
This submission fixes an issue with the scroll reveal IntersectionObserver. By reducing the intersection threshold from a high `0.15` to a safer `0.01`, it guarantees that animations will successfully trigger on entering the viewport, even if the element's height is taller than the viewport height.

## How is it used?
Add the reveal classes to elements on your page:

```html
<section class="reveal-hn reveal-up-hn">
  <h2>A Super Tall Section (e.g. 150vh)</h2>
  <p>Content goes here...</p>
</section>
```

When this element scrolls into view, the IntersectionObserver triggers as soon as 1% of the container is visible, appending `reveal-active-hn` and smoothly sliding/fading it into place.

## Why is it useful?
In original versions of the framework, long pages, blog posts, or large dashboard sections using scroll reveal remained permanently hidden (`opacity: 0`). This was because a 15% threshold could never be satisfied if the element was larger than the viewport. This fix resolves the bug, enabling scroll animations on content of any height.
