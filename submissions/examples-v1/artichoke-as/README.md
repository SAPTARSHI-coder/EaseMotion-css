# Artichoke

### What does this do?

It shows an artichoke on a board. It bobs gently and its crown nods. Hovering or focusing it makes every scale-like bract lift and splay outward, the way an artichoke opens when it is steamed. Under reduced motion it sits closed and still.

### How is it used?

```html
<div class="choke" tabindex="0">
  <span class="coreA"></span>
  <span class="bractA ba1"></span>
  <span class="tipA"></span>
</div>
```

Each bract is placed with two custom properties at once: `--ba` for the angle it leans and `--by` for how far up the bud it sits, combined as `rotate(var(--ba)) translateY(var(--by))`. That gives nine overlapping leaves in two staggered rows from a single rule. The open state multiplies the angle and pushes the offset further out, `rotate(calc(var(--ba) * 1.6)) translateY(calc(var(--by) - 10px))`, so every bract swings further along the direction it already leans and lifts away from the core, instead of all snapping to the same pose.

### Why is it useful?

Vegetable, cooking, and layered or "unfolding" themes use an artichoke. This builds one with pure CSS gradients and a transition driven hover, no images and no JavaScript, with a reduced motion fallback.
