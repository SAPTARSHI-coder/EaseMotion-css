# Walrus

### What does this do?

It shows a walrus hauled out on an ice floe. It heaves its bulk up and down, lifts its head, flaps its flippers, twitches its whiskers, and blinks, while snow falls and the floe drifts. Under reduced motion it rests still.

### How is it used?

```html
<div class="walrus">
  <span class="bodyw2"></span>
  <div class="headw2">
    <span class="skullw"></span>
    <span class="tusk tkl"></span>
    <span class="whiskw ww1"></span>
  </div>
</div>
```

The head is a wrapper pivoted at `transform-origin: 90% 90%`, where the neck meets the shoulders, so the tusks and jowls swing up together as one mass. Inside it, each whisker keeps its own angle in a `--wk` custom property and the twitch keyframe steps to `rotate(calc(var(--wk) + 6deg))`, so the whiskers flick relative to the direction they already point rather than all snapping parallel. The tusks use the same `--tk` idea to splay outward symmetrically.

### Why is it useful?

Arctic, wildlife, and marine mammal themes use a walrus. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
