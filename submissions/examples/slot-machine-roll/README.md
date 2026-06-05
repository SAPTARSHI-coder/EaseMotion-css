# ⚡ Interaction: Slot Machine Roll (`ease-slot-roll`)

### What does this do?

This component utility mimics the physical rolling and clicking engagement behaviors of a classic mechanical slot-machine interface. By locking contents inside a strict container mask (`overflow: hidden`), a keyframed vertical transform sweeps an element strip through multi-value arrays on load or hover interactions before settling into a fluidly balanced final index position.

### How is it used?

Stack your tracking metrics or alternative short typographic text blocks vertically inside the structural components, specifying inline count metrics via token configurations:

```html
<div
  class="ease-slot-roll"
  style="--slot-items-count: 4; --slot-duration: 2.2s;"
>
  <div class="ease-slot-strip">
    <div class="ease-slot-item">Value Premium 1</div>
    <div class="ease-slot-item">Value Premium 2</div>
    <div class="ease-slot-item">Value Premium 3</div>
    <div class="ease-slot-item">Settled Target 4</div>
  </div>
</div>
```

### By

Pari Dubey
