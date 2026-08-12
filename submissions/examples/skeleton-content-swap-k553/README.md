# Skeleton-to-Content Swap Transition

**EaseMotion Submission** · Contributor: kavin553

---

## 1. What does this do?

Provides a crossfade transition between a shimmer skeleton placeholder and the real content once it loads, avoiding a jarring instant pop-in.

## 2. How is it used?

```html
<div class="skeleton-swap" id="myCard">
  <div class="skeleton-layer card-shape"></div>
  <div class="content-layer">
    <!-- real content goes here -->
  </div>
</div>

<script>
  // Toggle this once your data has actually loaded
  document.getElementById('myCard').classList.add('is-loaded');
</script>