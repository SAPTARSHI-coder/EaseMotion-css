# Moon Phase

### What does this do?

It shows the moon cycling through its phases. A dark shadow sweeps across the cratered face, taking it from a full moon through gibbous, quarter, and crescent to new, then back out the other side, while stars twinkle behind it. Under reduced motion the moon rests at a crescent.

### How is it used?

```html
<div class="moon">
  <span class="disc"><span class="crater cr1"></span></span>
  <span class="shadow"></span>
</div>
```

The moon is a circle with `overflow: hidden` holding a lit, cratered `disc`. Over it sits a `shadow` circle of the same size in the dark grey of the unlit surface. The `phase` animation slides that shadow from one side to the other, and because both are circles, the terminator between them is a natural curved arc that bends the right way for every phase.

### Why is it useful?

Astronomy, night, and calendar or sleep-tracking themes use moon phases. This builds a full lunar cycle with pure CSS shapes and one sliding shadow, no images, with a reduced motion fallback.
