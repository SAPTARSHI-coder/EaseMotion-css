# Skeleton-to-Content Morph Swap

## 1. What does this do?

A replayable morph-swap demo that transitions skeleton placeholders into real card content using blur→sharp, scale, and clip-path choreography.

## 2. How is it used?

Open `demo.html` in a browser. Wait for the automatic handoff, or press **Replay morph** to watch skeletons dissolve into content again.

```html
<article class="card" data-state="ready">
  <div class="layer skeleton-layer">...</div>
  <div class="layer content-layer">...</div>
</article>
```

## 3. Why is it useful?

Most skeleton demos only pulse forever. This shows a clear loading→ready motion pattern that matches EaseMotion’s readable, purposeful interaction style.

## Issue

Resolves #51866
