# Sea Urchin

### What does this do?

It shows a sea urchin on the reef. Its twelve spines sway in the current one after another, the body pulses, and the crown at the top glows. Hovering or focusing it makes every spine push outward and stiffen, the way an urchin bristles when something touches it. Under reduced motion it sits still.

### How is it used?

```html
<div class="urchin" tabindex="0">
  <span class="spineu su1"></span>
  <span class="spineu su2"></span>
  <span class="testu"></span>
</div>
```

Every spine is placed with `rotate(var(--ur)) translateY(-8px)`: rotate first, then push outward, so a single angle both aims the spine and sets how far from the centre it sits. Twelve spines at 30 degree steps therefore fill a full circle from one shared rule. Both the sway keyframe and the bristle hover state rebuild that same `rotate(var(--ur))` before adding their own offset, so neither one ever flattens a spine back to zero degrees.

### Why is it useful?

Ocean, reef, and defensive or spiky themes use a sea urchin. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
