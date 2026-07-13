# Ship Wheel

### What does this do?

It shows a ship's helm turning slowly over the sea. The wheel rotates on its own, and hovering or focusing it spins it up to full speed as if someone grabbed a handle. The brass cap glows, the light around the wheel breathes, and the water texture drifts past behind it. Under reduced motion the wheel holds still.

### How is it used?

```html
<div class="helm" tabindex="0">
  <span class="handle h1"></span>
  <span class="rimh"></span>
  <span class="spokes"></span>
  <span class="hubh"></span>
</div>
```

The six spokes are one element: a `repeating-conic-gradient` cuts a wooden wedge every 60 degrees, so no spoke markup is needed at all. The rim is a bordered circle, so its thickness is just the border width. Each handle is placed with `rotate(var(--hh)) translateY(-128px)`, rotating first and then pushing outward, so a single value both aims the handle and sets how far out it sits. The spin lives on the wrapper, so it never overwrites the handles' own transforms, and `tabindex="0"` makes the speed up reachable by keyboard as well as by mouse.

### Why is it useful?

Nautical, navigation, and adventure themes use a ship's wheel. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
