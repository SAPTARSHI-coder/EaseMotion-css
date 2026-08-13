# Asteroid Belt Drift

Rocks of varying size drift across a star field on different durations, with a tiny motion-blur streak.

## How is it used?

A script creates 40 rocks, each storing its size, duration, vertical position, and a negative delay as CSS custom properties:

```js
rock.style.setProperty("--scale", (0.4 + layer * 1.4).toFixed(2));
rock.style.setProperty("--dur", (9 + layer * 22).toFixed(1) + "s");
rock.style.setProperty("--delay", (-Math.random() * 30).toFixed(1) + "s");
```

```css
.rock {
  width: calc(6px * var(--scale));
  animation: drift var(--dur) linear infinite;
  animation-delay: var(--delay);
}

@keyframes drift {
  100% {
    transform: translateX(400px) rotate(180deg);
  }
}
```

## Why is it useful?

One keyframe becomes an infinite stream because negative delays start every rock mid-flight. Duration tied to layer depth gives automatic parallax, and the `::after` streak sells speed — a lightweight stand-in for a particle system.
