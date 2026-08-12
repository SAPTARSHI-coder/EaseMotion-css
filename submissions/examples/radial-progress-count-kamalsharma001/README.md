# Radial Progress Ring with Counting Label

## 1. What does this do?
A circular progress ring (built with `conic-gradient` + `@property`) whose
fill animates from 0 to a target percentage, synced with a numeric label
that counts up alongside it.

## 2. How is it used?

```html
<div class="ring" style="--target: 72;">
  <span class="ring-label" data-target="72">0%</span>
</div>
```

The ring's CSS `--target` variable drives the fill angle via a keyframe
animation on `--angle` (enabled by `@property`). The label count-up runs
via a small `requestAnimationFrame` loop reading the same `data-target`
value, so both stay in sync.

## 3. Why is it useful?
Most radial progress examples animate only the ring. Pairing it with a
synced counting number makes stats/dashboard sections feel more dynamic
and complete — a small addition that reinforces EaseMotion CSS's
animation-first philosophy by extending motion to the data itself, not
just the shape.