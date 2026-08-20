# Hot Air Balloon

### What does this do?

It shows a hot air balloon drifting in a blue sky with a sun and passing clouds. The striped envelope sits above a woven basket on ropes, and the whole balloon bobs gently up and down. Under reduced motion the balloon and clouds hold still.

### How is it used?

```html
<div class="balloon">
  <div class="envelope"><span class="gore g1"></span>...</div>
  <span class="rope left"></span>
  <span class="basket"></span>
</div>
```

The envelope is a rounded teardrop clipping vertical `gore` panels in alternating colors, with an inset shadow for volume. Ropes angle down to a striped basket, and a `float` animation bobs the balloon while clouds drift across.

### Why is it useful?

Travel, onboarding, and cheerful empty states use a hot air balloon. This builds a floating balloon with pure CSS shapes and animation, no images, with a reduced motion fallback.
