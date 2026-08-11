# Bamboo Grove

### What does this do?

It shows a stand of bamboo in the wind. Each culm sways on its own offset, the fronds rustle, leaves spiral down through the light shafts, and mist drifts along the floor. The whole grove also leans as one when a gust passes. Under reduced motion the grove stands still.

### How is it used?

```html
<div class="grove">
  <span class="culm cm1"></span>
  <span class="frond fr1"></span>
</div>
```

The gust is the thing worth stealing here. Each culm sways individually, but the wrapper around them also runs a slow `skewX`, and skewing a container displaces its children by an amount proportional to their height: tall stalks lean far, short ones barely move. That single property gives the grove a wind gradient that would otherwise need a different keyframe per stalk. The culm nodes are a `repeating-linear-gradient` down each stem, so the joints cost nothing extra.

### Why is it useful?

Zen, forest, and calm or atmospheric themes use bamboo. This builds a grove with pure CSS gradients and animation, no images, with a reduced motion fallback.
