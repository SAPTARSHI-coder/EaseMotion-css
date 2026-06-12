# shimmer-skeleton

1. What does this do?
   Creates pure CSS shimmer loading placeholders — the same effect
   used by Facebook, LinkedIn, and YouTube while content loads.
   A light sweep animates across grey placeholder shapes, signalling
   that real content is on its way.

2. How is it used?
   Apply `skeleton-box` to any div to make it shimmer:

```html
<!-- Simple text skeleton -->
<div class="skeleton-box skeleton-line-full"></div>
<div class="skeleton-box skeleton-line-half"></div>

<!-- Avatar + text combo -->
<div class="skeleton-card">
  <div class="skeleton-row">
    <div class="skeleton-avatar"></div>
    <div class="skeleton-lines">
      <div class="skeleton-box skeleton-line-full"></div>
      <div class="skeleton-box skeleton-line-half"></div>
    </div>
  </div>
</div>
```

Add `skeleton-dark` to the card wrapper for dark mode.
Add `skeleton-slow` or `skeleton-fast` to adjust speed.

3. Why is it useful?
   EaseMotion CSS currently animates elements that are visible —
   but has nothing for the loading state before content appears.
   Skeleton loaders are used on virtually every modern production
   app and fill a real gap in the framework. A single class turns
   any div into a professional shimmer placeholder instantly,
   perfectly matching EaseMotion CSS's goal of expressive,
   utility-first animations.
