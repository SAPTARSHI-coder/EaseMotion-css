# Paper Plane

### What does this do?

It shows a folded paper plane gliding across a bright sky. It climbs and dives along its flight path while rocking from wing to wing, speed streaks flick past behind it, and the clouds drift by. Under reduced motion the plane hangs still in the sky.

### How is it used?

```html
<div class="flight">
  <div class="plane">
    <span class="wingp"></span>
    <span class="wingfar"></span>
    <span class="fin"></span>
  </div>
</div>
```

The plane is three `clip-path` triangles at different shades: the near wing, a darker far wing behind it, and a lighter fin on top, which is what gives a flat shape its folded, three dimensional look. The motion is split across two nested elements on purpose: the outer `.flight` carries the glide path, and the inner `.plane` carries the banking roll. Because they are separate elements, the two transforms compose instead of overwriting each other, which a single element could not do with one `transform` property.

### Why is it useful?

Send, share, and onboarding themes use a paper plane. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
