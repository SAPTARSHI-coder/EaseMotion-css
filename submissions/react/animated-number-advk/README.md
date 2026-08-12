# AnimatedNumber

A `<span>` that tweens its displayed number toward a target `value` using
`requestAnimationFrame`, honoring `prefers-reduced-motion`.

## API

```jsx
<AnimatedNumber value={1234} duration={500} format={(n) => n.toFixed(0)} />
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | — | Target value to animate toward. |
| `duration` | `number` | `500` | Tween duration in ms. |
| `format` | `(n: number) => string` | `toLocaleString` rounded | Formats the interpolated value each frame. |
| `className` | `string` | — | Passed to the rendered `<span>`. |

## Why is it useful?

Counter animations are often built by lerping from the *previous target* to
the *new target* over a fixed duration from scratch. If the value changes
again before the previous tween finishes — a live dashboard number ticking
up twice in quick succession — that approach jumps to the stale target
first, then restarts, producing a visible stutter. This component instead
starts every new tween from `display`, the number currently on screen, so
rapid updates blend into one continuous motion.

It also checks `prefers-reduced-motion` once and skips the
`requestAnimationFrame` loop entirely for users who've opted out, setting
the value directly instead of animating past it.
