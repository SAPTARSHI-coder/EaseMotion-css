# Ink Blot

A drop of ink lands and spreads into an organic, slightly irregular blot on paper.

## How is it used?

The entire effect is one keyframe that scales the circle up while animating `border-radius` between asymmetric values:

```css
@keyframes ink-spread {
  0% {
    transform: scale(0.06) rotate(0deg);
    border-radius: 50%;
  }
  70% {
    transform: scale(0.85) rotate(-4deg);
    border-radius: 40% 60% 38% 62%;
  }
  100% {
    transform: scale(1) rotate(0deg);
    border-radius: 46% 54% 58% 42%;
  }
}
```

## Why is it useful?

Morphing `border-radius` while scaling makes a plain circle feel like liquid pooling — no images or blur filters needed. The same approach animates ink, bubbles, and blobby organic transitions in modern UIs.
