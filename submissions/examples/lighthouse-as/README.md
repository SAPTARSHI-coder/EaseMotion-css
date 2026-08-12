# Lighthouse

### What does this do?

It shows a striped coastal lighthouse at night. A beam of light sweeps out from the lantern room and around, the lamp glows and pulses, and gentle waves lap at the rocks below. Under reduced motion the beam rests pointing out to sea and the waves stop.

### How is it used?

```html
<div class="tower">
  <span class="lantern"><span class="lamp"></span><span class="beam"></span></span>
  <span class="body"></span>
  <span class="base"></span>
</div>
```

The tower body is a `clip-path` trapezoid painted with a repeating red and white stripe, topped by a lantern room, a red roof cone, and a gallery deck. The `beam` is a soft triangular gradient anchored at the lamp; the `sweep` animation rotates it around and fades it as it points away, so the light appears to rotate like a real lighthouse lens.

### Why is it useful?

Coastal, travel, and guidance themes use a lighthouse. This builds a sweeping lighthouse beam with pure CSS shapes and animation, no images, with a reduced motion fallback.
