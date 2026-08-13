# Tornado Funnel Swirl

A funnel wobbles down from storm clouds while debris spirals inward and descends around it.

## How is it used?

The funnel is a trapezoid `clip-path` that rocks side to side; debris uses the orbit trick with a shrinking radius to spiral inward:

```css
.funnel {
  clip-path: polygon(36% 0%, 64% 0%, 78% 100%, 22% 100%);
  animation: funnel-wobble 1.6s ease-in-out infinite;
}

.debris {
  animation: swirl 1.8s linear infinite;
}

@keyframes swirl {
  0% {
    transform: rotate(0deg) translateX(58px) rotate(0deg) scale(1);
    opacity: 0;
  }
  100% {
    transform: rotate(360deg) translateX(14px) rotate(-360deg) scale(0.5);
    opacity: 0;
  }
}
```

## Why is it useful?

Collapsing the orbit radius while rotating pulls debris toward the funnel's axis — the same math drives vortex suction and radar sweeps. The counter-rotate keeps debris upright while it travels, so you can use non-circular shapes freely.
