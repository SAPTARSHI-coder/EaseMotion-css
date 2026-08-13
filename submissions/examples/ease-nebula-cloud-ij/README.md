# Nebula Cloud

Two blurred radial gas clouds drift on independent paths over a starry void, blending with `screen`.

## How is it used?

Each cloud blob is a pseudo-element with a heavy `blur` and its own slow alternate drift loop, all inside a parent that slowly rotates:

```css
.nebula::before {
  background: radial-gradient(circle, #c86bff, rgba(150, 60, 255, 0.5) 55%, transparent 75%);
  animation: nebula-drift-a 18s ease-in-out infinite alternate;
}

@keyframes nebula-drift-a {
  0% {
    transform: translate(0, 0) scale(1);
  }
  100% {
    transform: translate(40px, -30px) scale(1.25);
  }
}
```

## Why is it useful?

`mix-blend-mode: screen` makes overlapping blurred gradients glow like light, not paint. Long slow durations read as massive scale — ideal for ambient hero backgrounds, and it needs zero images.
