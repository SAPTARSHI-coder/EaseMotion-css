# ease-map-pin-drop

## What does this do?
A map pin/marker drops from `translateY(-100px)` with a multi-step bounce settle and a slight squash on landing — the standard marker placement animation for map UIs. A companion `.pin-shadow` element grows in sync with the drop to reinforce the landing illusion.

## How to use it
```html
<!-- Default pin drop -->
<div class="ease-map-pin-drop">
  <svg ...>...</svg>
  <div class="pin-shadow"></div>
</div>

<!-- Variants -->
<div class="ease-map-pin-drop ease-map-pin-drop--slow">...</div>
<div class="ease-map-pin-drop ease-map-pin-drop--delay">...</div>

<!-- Staggered multi-pin placement -->
<div class="ease-map-pin-drop" style="animation-delay: 0s">...</div>
<div class="ease-map-pin-drop" style="animation-delay: 0.15s">...</div>
<div class="ease-map-pin-drop" style="animation-delay: 0.30s">...</div>
```

## Animation detail
The keyframe sequence:
- **0%** — starts 100px above, slightly compressed, invisible
- **55%** — lands with a squash (`scaleY(1.08) scaleX(0.94)`) and a small overshoot
- **70%–91%** — damped oscillation settles the pin
- **100%** — rests at natural position

The `.pin-shadow` keyframe mirrors the landing — it's tiny and invisible during the fall, expands on impact, then settles to a natural soft shadow.

## Variants
- `.ease-map-pin-drop` — default, 0.55s
- `.ease-map-pin-drop--slow` — 0.8s, for more dramatic placements
- `.ease-map-pin-drop--delay` — 0.4s delay, for staggered multi-pin reveals

## Why it fits EaseMotion CSS
Map UIs, delivery trackers, location pickers, and store finders are extremely common, and the bounce-drop marker placement animation is the universal feedback pattern for "a location was just placed here." The squash + grow-shadow combination makes the pin feel physically plausible — matching the framework's animation-first philosophy.
