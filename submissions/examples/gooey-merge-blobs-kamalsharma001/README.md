# Gooey Merge Blobs

## 1. What does this do?
A cluster of "blob" elements that visually fuse into one gooey shape when
close together, and separate cleanly into distinct circles when spread
apart — the classic metaball/gooey SVG-filter effect.

## 2. How is it used?
```html
<div class="goo-stage">
  <div class="blob main"></div>
  <div class="blob sub"></div>
</div>
```
Apply `filter: url(#goo)` (an SVG `<feGaussianBlur>` + `<feColorMatrix>`
pair, defined inline in the HTML) to the wrapping container. Toggle a
class to move sub-elements via `transform`; the filter handles the
merge/split visual automatically.

## 3. Why is it useful?
Adds a distinctive, physically-tactile motion effect (FAB menus,
notification merges, playful loading indicators) not achievable with
plain CSS transitions. Includes a `prefers-reduced-motion` fallback that
disables the filter and crossfades instead, so it degrades gracefully.