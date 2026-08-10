# Volume Knob

### What does this do?

It shows a panel of rotary control knobs. Each knob has a conic gradient arc showing its level over a 270 degree sweep, and the dial rotates so its indicator mark points at the current value. A single `--p` value (0 to 1) drives both the arc length and the pointer angle.

### How is it used?

```html
<div class="knob-cell" style="--p: 0.7;">
  <div class="knob"><span class="knob-dial"><span class="knob-mark"></span></span></div>
  <span class="knob-label">Volume</span>
  <span class="knob-val">70</span>
</div>
```

Set `--p` on the cell. The knob fills its conic arc up to `calc(var(--p) * 270deg)` and rotates the dial with `rotate(calc(-135deg + var(--p) * 270deg))`, so one property keeps the arc and the pointer in sync.

### Why is it useful?

Audio mixers, synth UIs, and hardware style dashboards use rotary knobs. This builds one from a conic gradient and a rotation, driven by a single custom property, with no images or script.
