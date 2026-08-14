# Waterfall Cascade

Streams of water pour over a rocky ledge, rippling as they fall into a misty pool below.

## How is it used?

Three falling streams share one pour keyframe with staggered delays; a blurred ellipse at the base breathes like mist:

```css
.fall {
  transform-origin: 50% 0;
  animation: pour 2.4s ease-in infinite;
}

.fall-2 {
  animation-delay: -0.8s;
}

@keyframes pour {
  0% {
    transform: scaleY(0.4) skewX(0deg);
    opacity: 0.85;
  }
  45% {
    transform: scaleY(1) skewX(4deg);
  }
}

.mist {
  animation: mist-breath 2.4s ease-in-out infinite alternate;
}
```

## Why is it useful?

`scaleY` accelerates the stream's fall while `skewX` fakes turbulence — fluid motion from two transforms. Staggered delays keep streams unsynced, and a pulsing blurred ellipse sells splash and mist without particles.
