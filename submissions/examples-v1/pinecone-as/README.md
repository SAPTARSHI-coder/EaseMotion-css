# Pinecone

### What does this do?

It shows a pinecone hanging from a snowy twig. It swings on the branch, the pine needles sway, and snow drifts past. Hovering or focusing the cone makes every scale lift and open outward, the way a cone opens when it dries. Under reduced motion it hangs still and the scales stay shut.

### How is it used?

```html
<div class="cone" tabindex="0">
  <span class="body2"></span>
  <span class="scale s1"></span>
  <span class="scale s2"></span>
</div>
```

Each scale keeps its own tilt in a `--pa` custom property, and the open state restates the transform as `rotate(var(--pa)) translateY(-7px) scale(1.06)`. Because the rotation is rebuilt from the same custom property, hovering pushes each scale outward along the direction it already points instead of flattening all nine to a single angle. A `transition` on `transform` is all that is needed to animate the opening, so the effect costs no keyframes at all.

### Why is it useful?

Winter, forest, and seasonal themes use a pinecone. This builds one with pure CSS gradients and a transition driven hover, no images and no JavaScript, with a reduced motion fallback.
