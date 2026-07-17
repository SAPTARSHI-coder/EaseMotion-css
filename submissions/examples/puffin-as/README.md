# Puffin

### What does this do?

It shows a puffin standing on a sea rock. It bobs in the wind, turns its head from side to side, flexes a wing, shuffles its orange feet, and blinks, while waves roll behind it. Under reduced motion it stands still.

### How is it used?

```html
<div class="puffin">
  <span class="bodypf"></span>
  <span class="bib"></span>
  <div class="headpf">
    <span class="skullpf"></span>
    <span class="beakpf"></span>
  </div>
</div>
```

The head is a wrapper that turns from `transform-origin: 40% 100%`, the point where the neck meets the body, so the beak swings through a real arc while the back of the skull barely moves. Everything inside it, the white cheek, the eye and the striped beak, keeps its own position and simply rides along, which means the head turn costs one rotation rather than five coordinated ones. The beak's shape is a single asymmetric `border-radius`, deep on the left and shallow on the right, which is what gives it the tall wedge profile a puffin has.

### Why is it useful?

Coastal, wildlife, and seabird themes use a puffin. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
