# Typhoon Spiral

A satellite-view typhoon: curved cloud bands wrapping a calm eye, with a spiral that spins up on demand.

## How is it used?

The spiral is six triangle borders arranged radially; toggling `.spinning` rotates the whole group:

```css
.spiral.spinning {
  animation: spiral-turn 4.5s linear infinite;
}
@keyframes spiral-turn {
  to { transform: rotate(360deg); }
}
```

Each `.arm` is a CSS triangle pointing outward, and its `::after` adds a second, dimmer band that looks like the trailing edge of a cloud wall. The `eye` pulses with its own scale/brightness keyframe while the storm rotates underneath.

## Why is it useful?

A group rotation over a child pulse is the same layered-motion pattern used for planetary orbits, loader rings, and refresh spinners — one parent keyframe plus one child keyframe gives two simultaneous speeds. Border-based triangles keep the whole thing dependency-free and resolution-independent.
