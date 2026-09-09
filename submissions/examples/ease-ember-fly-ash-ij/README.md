# Ember Fly Ash

Glowing embers rise from a campfire's glow, drift sideways, and fade as they cool.

## How is it used?

Six embers share one rise-and-fade keyframe, each with a negative delay so the stream never empties:

```css
.ember {
  animation: ember-rise 2.8s ease-in infinite;
}

.ember-3 {
  animation-delay: -1s;
  width: 3px;
  height: 3px;
}

@keyframes ember-rise {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translate(24px, -170px) scale(0.4);
    opacity: 0;
  }
}
```

## Why is it useful?

`ease-in` acceleration on the rise mimics hot air carrying the spark, while shrinking + fading reads as cooling. A few staggered dots give a whole fire. The same recipe works for smoke, dust motes, and celebration sparkle.
