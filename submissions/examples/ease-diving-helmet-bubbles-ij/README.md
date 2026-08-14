# Diving Helmet Bubbles

A brass diving helmet on the seabed exhaling a stream of bubbles that drift up and fade at the surface.

## How is it used?

Bubbles are absolutely-positioned circles that translate upward and fade out:

```css
.bubble {
  animation: bubble-rise 3s ease-in infinite;
}
@keyframes bubble-rise {
  0% { transform: translateY(0); opacity: 0; }
  12% { opacity: 1; }
  100% { transform: translateY(-230px) translateX(10px); opacity: 0; }
}
```

Each bubble is offset with a different `animation-delay` and a different size, so the stream feels organic rather than metronome-like. The dome uses a radial gradient that mimics a lit brass sphere, and the `window-glow` breathes softly to suggest a lamp inside.

## Why is it useful?

The bubble stream is a reusable "particle rise" pattern — the same translate + fade keyframe powers confetti, rising notifications, chat typing dots and loading streams. Staggering identical animations by delay is the cheapest way to build believable ambient motion.
