# Washing Machine

### What does this do?

It shows a front load washing machine with a control panel and a round glass door. Inside, a drum tumbles four colored clothes with a stop and go spin while suds sit at the bottom. The panel has a dial, a timer display, and status LEDs. Under reduced motion the drum stops.

### How is it used?

```html
<div class="door">
  <div class="glass">
    <div class="drum"><span class="cloth c1"></span>...</div>
    <span class="suds"></span>
  </div>
</div>
```

The glass clips a `drum` that spins with the `wash-spin` keyframes (a tumble with pauses), carrying the clothes around. Layered `radial-gradient` bubbles form the suds, and the panel holds a knob, a display, and LEDs.

### Why is it useful?

Appliance apps, laundry status, and progress metaphors use a washing machine. This builds a tumbling washer with pure CSS shapes and a keyframe drum, no images, with a reduced motion fallback.
