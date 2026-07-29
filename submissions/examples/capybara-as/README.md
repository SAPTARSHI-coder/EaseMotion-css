# Capybara

### What does this do?

It shows a capybara relaxing in a hot spring with a yuzu balanced on its head. It floats and nods, its ears flick, it blinks, the fruit bobs with it, ripples spread out, and steam curls off the water. Under reduced motion it soaks in stillness.

### How is it used?

```html
<div class="capy">
  <span class="bodyCa"></span>
  <div class="headCa">
    <span class="skullCa"></span>
    <span class="snoutCa"></span>
  </div>
  <span class="orange"></span>
</div>
```

The head is a wrapper that nods from `transform-origin: 86% 90%`, where the neck meets the shoulders, so the blunt snout dips while the back of the skull barely moves. The fruit is not parented to the head: it runs the same five second clock as the body, so it rides the float without inheriting the nod, which is what keeps it sitting level rather than sliding off. The ears use a long-hold keyframe, resting for most of the cycle and flicking only near the end, so the movement reads as an idle twitch instead of a steady wag.

### Why is it useful?

Wildlife, relaxation, and cosy mascot themes use a capybara. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
