# mix-blend-mode: difference Animated Inversion Sweep

A pseudo-element sweeper that uses `mix-blend-mode: difference` to invert all colors beneath it as it passes — producing a color-complement sweep with no JavaScript and no hardcoded color values.

## Variants

| Variant         | Trigger               | Blend mode                             |
| --------------- | --------------------- | -------------------------------------- |
| Hover sweep     | `:hover`              | `difference`                           |
| Auto sweep      | `@keyframes` infinite | `difference`                           |
| Exclusion sweep | `:hover`              | `exclusion` (softer)                   |
| Isolation demo  | `:hover`              | `difference` — shows broken vs correct |

## How it works

```css
.sweep-card {
  position: relative;
  isolation: isolate; /* required — see below */
  overflow: hidden;
}

.sweep-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -110%;
  width: 55%;
  height: 100%;
  background: rgba(255, 255, 255, 0.92);
  mix-blend-mode: difference;
  transform: skewX(-12deg);
  pointer-events: none;
}

/* hover variant */
.sweep-hover::after {
  transition: left 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.sweep-hover:hover::after {
  left: 150%;
}

/* auto loop variant */
@keyframes ease-blend-sweep {
  0% {
    left: -110%;
  }
  100% {
    left: 150%;
  }
}
.sweep-auto::after {
  animation: ease-blend-sweep 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
```

## Why `isolation: isolate` is required

`mix-blend-mode` composites against every layer below the element by default — including the page background. Without `isolation: isolate` on the parent, the white sweeper inverts against the `<body>` background color instead of the card's gradient, producing the wrong colors (or an entirely dark sweep on a dark background).

`isolation: isolate` creates a new stacking context that caps compositing to the card's own pixels.

## `difference` vs `exclusion`

- **`difference`** — full mathematical complement. White over any color `C` produces `255 - C`. High contrast, dramatic.
- **`exclusion`** — softer variant. Desaturates midtones instead of fully complementing them. More subtle.

Both modes require `isolation: isolate` on the parent.

## Accessibility

`prefers-reduced-motion: reduce` disables the auto-loop animation and removes transitions from all hover variants.

```css
@media (prefers-reduced-motion: reduce) {
  .sweep-auto::after {
    animation: none;
  }
  .sweep-hover::after,
  .sweep-exclusion::after {
    transition: none;
  }
}
```
