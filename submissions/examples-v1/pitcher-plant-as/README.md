# Pitcher Plant

### What does this do?

It shows two pitcher plants hanging from a vine. They sway on their tendrils, their lids tilt, the digestive fluid inside sloshes, nectar drips from the rims, and an insect follows the lure around the mouth of one pitcher before falling in and vanishing.

### How is it used?

```html
<div class="pitcher pcA">
  <span class="lidP"></span>
  <span class="peristome"></span>
  <span class="jugP"></span>
</div>
```

The ribbed rim, a pitcher plant's peristome, is a `repeating-conic-gradient` laid over a warm radial base, so the fine radial ribs that guide insects inward come from one property. The insect's path is a single keyframe that walks it around the rim, tips it over the edge at 75 percent and fades it out below the rim, so a whole capture reads as one movement. Note the second pitcher: its smaller size lives in a `--ps` custom property that the sway keyframe rebuilds, because a static `transform: scale()` would have been silently wiped by the animation.

### Why is it useful?

Botanical, carnivorous plant, and jungle themes use a pitcher plant. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
