# background-blend-mode Animation

## What does this do?

Animates `background-blend-mode` through CSS keyframes — cycling between `multiply`, `screen`, `overlay`, `difference`, and `hard-light` — and shows a hover-triggered blend switch to `difference`.

## How is it used?

```css
.element {
  background-blend-mode: overlay;
  animation: blend-cycle 6s ease-in-out infinite;
}

@keyframes blend-cycle {
  0%   { background-blend-mode: multiply; }
  25%  { background-blend-mode: screen; }
  50%  { background-blend-mode: overlay; }
  75%  { background-blend-mode: difference; }
  100% { background-blend-mode: hard-light; }
}
```

## Why is it useful?

`background-blend-mode` creates rich, layered visual effects using only CSS — no images or JavaScript required. Blending modes are a core tool in graphic design, and animating them enables dynamic moods, theme shifts, and interactive states, making it a natural fit for EaseMotion CSS's expressive animation toolkit.
