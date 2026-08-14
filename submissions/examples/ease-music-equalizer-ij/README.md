# Music Equalizer

A mini music player with a spinning vinyl and five equalizer bars that dance to their own staggered rhythm.

## How is it used?

The whole visual layer is class-driven. Add `.playing` to the player and the motion starts:

```html
<div class="player playing">
  <div class="cover-area"><div class="vinyl"></div></div>
  <div class="eq">
    <span class="bar b1"></span><span class="bar b2"></span><span class="bar b3"></span>
  </div>
  <button class="p-btn play">Pause</button>
</div>
```

`.playing .vinyl` runs the `spinVinyl` keyframe while each `.bar` plays `eqDance` with a different `animation-delay` so the bars never move in lockstep.

## Why is it useful?

Media players rely on small, playful micro-interactions to signal state. This component shows how a single `playing` state class can orchestrate several independent animations — rotation, staggered equalizer motion, and a live progress fill — which is exactly the composable, readable-class approach EaseMotion CSS is built around.
