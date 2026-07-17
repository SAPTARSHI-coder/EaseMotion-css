# Manatee

### What does this do?

It shows a manatee drifting slowly through a seagrass bed. It moves diagonally as it swims rather than just bobbing, its paddle tail sweeps, its flippers row, its head nods, its whiskers twitch, and it blinks. Under reduced motion it hangs still in the water.

### How is it used?

```html
<div class="manatee">
  <span class="paddle"></span>
  <span class="bodyMa"></span>
  <div class="headMa"><span class="muzzleMa"></span></div>
</div>
```

The drift keyframe moves the animal on both axes at once, `translate(14px, -12px)`, which is what separates a slow swim from a bob in place: it actually travels while it rises. The tail sweeps from `transform-origin: 0 50%` where it joins the body, so it hinges at the hips rather than pivoting around its own centre. The skin folds are one `repeating-linear-gradient` angled across the body and clipped by the same `border-radius`, so they curve with the animal for free.

### Why is it useful?

Ocean, wildlife, and calm or gentle themes use a manatee. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
