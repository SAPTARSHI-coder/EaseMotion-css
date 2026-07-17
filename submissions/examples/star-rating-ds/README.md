# Star Rating Component

**What does this do?**
A row of star icons that lets users select a rating by clicking, with a hover-preview that fills stars before you click and a golden filled state once selected.

**How is it used?**
```html
<div class="star-rating" data-rating="0">
  <span class="star" data-value="1">★</span>
  <span class="star" data-value="2">★</span>
  <span class="star" data-value="3">★</span>
  <span class="star" data-value="4">★</span>
  <span class="star" data-value="5">★</span>
</div>
```

**Why is it useful?**
Star ratings are a universal UI pattern used in reviews, feedback forms, and product pages. EaseMotion CSS doesn't have one yet — this fills that gap with a lightweight, animation-first implementation that respects `prefers-reduced-motion`.
