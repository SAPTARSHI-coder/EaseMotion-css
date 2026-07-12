# 3D Flip Card

### What does this do?

It shows a card that flips over in 3D on hover or focus to reveal a back side with more detail and a call to action.

### How is it used?

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>Aurora</h3>
      <p>Design system</p>
    </div>
    <div class="flip-card-back">
      <p>A component library with tokens and themes.</p>
      <a href="#">Explore</a>
    </div>
  </div>
</div>
```

The `.flip-card` sets the perspective, the `.flip-card-inner` rotates on hover, and the front and back faces hide their back sides so only one shows at a time.

### Why is it useful?

Flip cards fit two sides of content into one space, useful for team members, features, or product cards. This builds the flip with `perspective`, `transform-style: preserve-3d`, and `backface-visibility`, so it needs no JavaScript. It also flips on `:focus-within` for keyboard users, the back link shows a focus ring, and the rotation is disabled under `prefers-reduced-motion: reduce`.
