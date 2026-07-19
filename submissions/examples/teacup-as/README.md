# Teacup

### What does this do?

It shows a cup of tea on a saucer with a teabag steeping in it. Steam curls up off the surface, rings ripple out across the brew, the teabag tag sways on its string, and the cup settles gently. Under reduced motion everything is still.

### How is it used?

```html
<div class="cup">
  <span class="handle2"></span>
  <span class="bowl"></span>
  <span class="brew"></span>
  <span class="tagt"></span>
</div>
```

The handle is a circle with one border side set to `transparent`, which leaves an open C shape with no clip path and no second element. The brew is a flat ellipse laid across the mouth of the cup, so the tea reads as a surface seen at an angle rather than a flat disc, and the ripple is one ring that scales outward from the middle of it while fading. The tag and its string share the same swing keyframe but pivot from different origins, so the string bends at the cup rim while the tag trails behind it.

### Why is it useful?

Cafe, cosy, and break time themes use a cup of tea. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
