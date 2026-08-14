# Night Sky Twinkle

Stars blink at staggered rates and sizes beneath a crescent moon, powered by a few lines of JS and one keyframe.

## How is it used?

A loop scatters stars and gives each its own size, duration, and negative delay:

```js
star.style.setProperty("--size", (1 + Math.random() * 2).toFixed(1) + "px");
star.style.setProperty("--dur", (1.4 + Math.random() * 3).toFixed(2) + "s");
star.style.setProperty("--delay", (-Math.random() * 4).toFixed(2) + "s");
```

```css
.star {
  animation: twinkle var(--dur) ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.25;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}
```

## Why is it useful?

Randomized duration + delay desynchronizes every star, so no two blink in unison. The moon's crescent is a simple circle-with-overlap trick — a tiny ambient background that costs almost nothing to animate.
