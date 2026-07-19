# Train

### What does this do?

It shows a steam locomotive running on the rails. The spoked driving wheels turn, the coupling rod cranks around with them, smoke puffs from the stack and blows back over the cab, the headlamp glimmers, and the sleepers stream past underneath. Under reduced motion everything stops.

### How is it used?

```html
<div class="loco">
  <span class="boiler"></span>
  <span class="cab"></span>
  <span class="wheel bigw bw1"></span>
  <span class="rodt"></span>
</div>
<span class="railt"></span>
```

The wheel spokes are a `repeating-conic-gradient` with two inset rings for the tyre and hub, so a whole spoked wheel is one element. The coupling rod does not rotate: it traces a small circle with `translate` on the same duration as the wheels, which is exactly how a real connecting rod moves, and keeps it visually locked to the turning wheels.

### Why is it useful?

Travel, industry, and progress or journey themes use a train. This builds a running steam train with pure CSS gradients and animation, no images, with a reduced motion fallback.
