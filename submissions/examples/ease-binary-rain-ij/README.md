# Binary Rain

Columns of `0`s and `1`s stream down a dark screen with glowing trails, like a digital downpour.

## How is it used?

A tiny script generates 12 columns, each a pre-built string of binary digits. Every column gets a random duration and a negative delay so the rain is already flowing on load:

```js
const col = document.createElement("span");
col.className = "col";
col.style.left = c * 8 + "%";
col.style.animationDuration = 2.2 + Math.random() * 2 + "s";
col.style.animationDelay = -Math.random() * 4 + "s";
```

```css
.col {
  animation: rain-fall linear infinite;
}

@keyframes rain-fall {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(420%);
    opacity: 0;
  }
}
```

## Why is it useful?

Negative animation delays fake a mid-stream state, so the effect is alive the instant the page paints. The same stagger trick powers any falling/marquee stream without a timer.
