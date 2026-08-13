# Leaf Fall Twirl

Leaves of random size and hue spiral down from the treetops, swaying sideways as they fall.

## How is it used?

JS assigns each leaf a horizontal start, size, duration, and HSL hue; the keyframe rotates while drifting side to side:

```js
leaf.style.setProperty("--hue", (18 + Math.random() * 28).toFixed(0));
```

```css
.leaf {
  background: radial-gradient(circle at 30% 30%,
    hsl(var(--hue), 70%, 65%), hsl(var(--hue), 55%, 45%));
  border-radius: 80% 20% 80% 20%;
  animation: twirl var(--dur) ease-in infinite;
}

@keyframes twirl {
  100% {
    transform: translateY(380px) translateX(-30px) rotate(320deg);
  }
}
```

## Why is it useful?

The asymmetric `border-radius` makes a flat span read as a leaf shape. `rotate` inside the translate path gives the flutter; `hsl` + custom property gives a whole palette from one element — a reusable recipe for snow, petals, and emoji confetti.
