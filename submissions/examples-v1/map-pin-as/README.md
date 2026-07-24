# Map Pin

### What does this do?

It shows a location pin dropping onto a stylized map. The pin falls in, bounces slightly as it lands, a ripple pulses out from its base, and its shadow grows on impact. The map behind it has faint roads and city blocks. Under reduced motion the pin rests in place with the ripple hidden.

### How is it used?

```html
<div class="marker">
  <span class="ripple"></span>
  <div class="pin"><span class="dot"></span></div>
  <span class="shadow"></span>
</div>
```

The pin is a circle with one square corner rotated 45 degrees to form the classic teardrop, with a white dot in the middle. The `drop` animation falls it in with a small bounce, timed together with the expanding `ripple` and the growing `shadow` so they all land on the same beat.

### Why is it useful?

Maps, delivery apps, and location pickers use a marker. This builds a dropping map pin with pure CSS shapes and animation, no images, with a reduced motion fallback.
