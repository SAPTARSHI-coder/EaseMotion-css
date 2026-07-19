# Bicycle

### What does this do?

It shows a bicycle riding along a road. Both spoked wheels spin, the crank turns and carries the pedals around with it, the frame bumps gently over the surface, and the road markings stream past underneath. Under reduced motion everything stops.

### How is it used?

```html
<div class="bike">
  <span class="wheel rear"><span class="spokes"></span><span class="hub"></span></span>
  <span class="frame f1"></span>
  <span class="crank"><span class="pedal pa"></span></span>
</div>
```

The spokes are a `repeating-conic-gradient` of thin lines, so a whole wheel of spokes costs one property and spins with the wheel. The frame is built from rotated bars anchored at their left ends, and the crank shares the wheels' rotation so the pedals always turn in time with the road speed, which itself comes from a dashed gradient scrolling under the bike.

### Why is it useful?

Travel, fitness, and delivery themes use a bicycle. This builds a riding bicycle with pure CSS shapes and animation, no images, with a reduced motion fallback.
