# contrast() Animation

## What does this do?

Animates the CSS `contrast()` filter — cycling from 50% (washed-out) to 200% (high contrast), with hover-triggered contrast shifts on gradient cards.

## How is it used?

```css
.element {
  animation: con-cycle 3s ease-in-out infinite;
}

@keyframes con-cycle {
  0%,
  100% {
    filter: contrast(0.5);
  }
  50% {
    filter: contrast(2);
  }
}
```

## Why is it useful?

Contrast control is critical for accessibility and visual hierarchy. Animated contrast can draw attention (high contrast pulses), simulate loading/processing states, or create atmospheric transitions (fading to low contrast). This gives developers a simple, declarative way to add perceptual depth to UI — fitting EaseMotion CSS's animation-first approach.
