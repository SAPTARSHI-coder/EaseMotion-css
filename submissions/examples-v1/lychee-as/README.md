# Lychee

### What does this do?

It shows two lychees hanging from a branch. They swing on their stems, light glints off the red rind, and sparkles pop around them. Hovering or focusing the front fruit peels it: two flaps of rind swing away and the pearly white flesh and dark seed fade in underneath. Under reduced motion it hangs still and stays whole.

### How is it used?

```html
<div class="lychee" tabindex="0">
  <span class="rindL"></span>
  <span class="bumps"></span>
  <span class="peelL pl1"></span>
  <span class="fleshL"></span>
</div>
```

The lychee's knobbly skin is two gradients on one element: a `repeating-conic-gradient` cuts the radial ridges and a `repeating-radial-gradient` lays concentric rings across them, and where the two cross they read as the scaly bumps a lychee actually has. Building the texture from crossing gradients rather than dozens of little elements keeps the whole rind to a single node. The peel flaps each keep their lean in a `--pl2` custom property, and the open state multiplies it eightfold, so they swing away in opposite directions from one shared rule.

### Why is it useful?

Fruit, tropical, and reveal or "unwrap" themes use a lychee. This builds one with pure CSS gradients and a transition driven hover, no images and no JavaScript, with a reduced motion fallback.
