# Firework Burst

A radial burst of sparks expands from center and fades like a firework in the night sky.

## How is it used?

The demo shows the base flash via `::before`/`::after`, while JavaScript spawns 12 `.spark` dots that each fly outward along a rotated axis:

```js
for (let i = 0; i < 12; i++) {
  const s = document.createElement("span");
  s.className = "spark";
  s.style.setProperty("--a", (i * 30) + "deg");
  burst.appendChild(s);
  void s.offsetWidth;
  s.classList.add("go");
}
```

```css
.spark {
  animation: fly ease-out both;
}

@keyframes fly {
  0% {
    transform: translate(-50%, -50%) rotate(var(--a)) translateX(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) rotate(var(--a)) translateX(110px) scale(0.3);
    opacity: 0;
  }
}
```

## Why is it useful?

Rotating the element first, then translating along its local X axis, spreads every spark in a perfect circle with a single keyframe and a CSS custom property for the angle — a pattern that scales to confetti, particle blasts, and ring selectors.
