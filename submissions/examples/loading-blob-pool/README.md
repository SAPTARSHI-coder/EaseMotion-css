# Loading Blob Pool

## What does this do?

A loading indicator made of three soft, colorful blobs that bob up and down while morphing shape inside a rounded "pool" container, giving the impression of organic liquid drops floating in water.

## How is it used?

Add the `blob-pool` container with three (or more) `blob-pool__blob` children:

```html
<div class="blob-pool">
  <div class="blob-pool__blob"></div>
  <div class="blob-pool__blob"></div>
  <div class="blob-pool__blob"></div>
</div>
```

No JavaScript is required — the bobbing and morphing motion is driven entirely by CSS `@keyframes` animations (`blob-bob` and `blob-morph`), each blob offset with its own `animation-delay` so they move out of sync with one another. The component also respects `prefers-reduced-motion` by disabling the animation for users who have that preference set.

## Why is it useful?

It fits EaseMotion's animation-first, zero-dependency philosophy: the class names read plainly (`blob-pool`, `blob-pool__blob`), the visual is playful and distinct from generic spinner/skeleton loaders, and it can be dropped into any page as a self-contained loading state with no extra markup or scripting.
