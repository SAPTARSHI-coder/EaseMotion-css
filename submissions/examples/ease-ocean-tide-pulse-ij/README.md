# Ocean Tide Pulse

A moonlit coast where stacked wave bands breathe up and down while a tide marker slides to show the water line rising.

## How is it used?

The waves are three overlapping rounded bands scaling vertically on a loop, and the tide marker is a transitioned top value:

```css
.wave {
  transform-origin: 50% 100%;
  animation: wave-pulse 4s ease-in-out infinite;
}
@keyframes wave-pulse {
  50% { transform: scaleY(0.72); }
}
.tide-mark {
  transition: top 1.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.tide-mark.high { top: 104px; }
```

The three bands are offset by `0.5s`/`1s` delays so they lap rather than move in lockstep. High tide just relocates the marker line; the waves keep breathing underneath.

## Why is it useful?

Layered repeating bands with phase offsets create believable fluid motion from flat shapes — a trick that works for water, auroras, smoke, and gradient "breathing" backgrounds. A marker that slides along a keyframe background is a reusable reading-aid pattern for gauges and progress lines.
