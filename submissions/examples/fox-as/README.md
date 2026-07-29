# Fox

### What does this do?

It shows a fox sitting in the grass. Its bushy white-tipped tail swishes behind it, it tilts its head from side to side, it blinks, and its body rises and falls as it breathes. Under reduced motion the fox sits perfectly still.

### How is it used?

```html
<div class="fox">
  <span class="tail"></span>
  <span class="body"></span>
  <div class="head">
    <span class="ear le"></span>
    <span class="face"></span>
    <span class="snout"></span>
  </div>
</div>
```

The tail is a single rounded shape whose gradient goes from white at the tip to orange at the base, so the classic white-tipped brush comes from one property. It swishes from a `transform-origin` placed where it meets the body. The ears are `clip-path` triangles with a darker inner triangle, and the head tilts around a pivot at the neck so the whole face turns together.

### Why is it useful?

Wildlife, autumn, and mascot or storybook themes use a fox. This builds a sitting fox with pure CSS shapes and animation, no images, with a reduced motion fallback.
