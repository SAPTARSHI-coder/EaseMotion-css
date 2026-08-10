# Helicopter

### What does this do?

It shows a helicopter hovering in the sky. The three main rotor blades spin fast enough to blur into a disc, the tail rotor spins with them, the whole aircraft bobs and tilts as it holds station, and clouds drift past. Under reduced motion the rotors and the aircraft hold still.

### How is it used?

```html
<div class="heli">
  <div class="rotor">
    <span class="blade bl1"></span>
    <span class="hubh"></span>
  </div>
  <span class="bodyh"></span>
  <div class="trotor"><span class="tblade tb1"></span></div>
</div>
```

Each rotor is a zero-size wrapper spun by a single `spinr` animation, with the blades hanging off it at 120 degree offsets and a `transform-origin` at the hub end. Because the wrapper carries the rotation, adding or removing blades needs no change to the animation, and the blade tips trace a perfect circle rather than wobbling.

### Why is it useful?

Aviation, rescue, and travel or delivery themes use a helicopter. This builds a hovering helicopter with pure CSS shapes and animation, no images, with a reduced motion fallback.
