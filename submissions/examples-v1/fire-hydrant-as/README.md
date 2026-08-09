# Fire Hydrant

### What does this do?

It shows a red fire hydrant on the curb. Hovering or focusing it opens the valve: the top bolt turns and jets of water arc out of both side nozzles in a repeating spray. It works with no JavaScript. Under reduced motion the bolt turns without easing and the water stays off.

### How is it used?

```html
<div class="hydrant" tabindex="0">
  <span class="bolt"></span>
  <div class="body"><span class="band"></span></div>
  <span class="nozzle ln"></span>
  <span class="jet j1"></span>
</div>
```

The hydrant is a rounded body with a domed cap, a gold band, and two side nozzles. On `:hover` or `:focus` the bolt rotates and the water droplets start their `sprayL` and `sprayR` animations, which translate them outward and down in an arc. Pairing two droplets per side on offset delays makes the stream look continuous rather than pulsed.

### Why is it useful?

City, safety, and summer street scenes use a fire hydrant. This builds an interactive hydrant with pure CSS shapes and animation, no images or JavaScript, with a reduced motion fallback.
