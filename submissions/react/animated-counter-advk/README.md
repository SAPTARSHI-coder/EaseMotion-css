# AnimatedCounter

A React counter that tweens to its target value the first time it scrolls into
view, and shows the final value instantly when the user prefers reduced motion.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `to` | `number` | — (required) | Value to count up to. |
| `from` | `number` | `0` | Starting value. |
| `duration` | `number` | `1600` | Tween length in ms. `0` disables the tween. |
| `format` | `(n: number) => string` | `n => n.toLocaleString()` | Formats the displayed number. |
| `className` | `string` | `''` | Appended to the built-in `ease-fade-in`. |

Any other props are spread onto the rendered `<span>`.

## Usage

```jsx
import AnimatedCounter from './AnimatedCounter';

<AnimatedCounter to={27215} className="ease-hover-lift" />

<AnimatedCounter
  to={99.9}
  duration={2200}
  format={(n) => `${n.toFixed(1)}%`}
/>
```

## Why it fits EaseMotion CSS

Stat counters are the most common place a marketing page needs motion, and the
usual implementations start the tween on mount — so a counter far below the fold
finishes animating before the user ever sees it, and they arrive at a static
number. Gating on `IntersectionObserver` means the animation plays when it is
actually watched, and the observer disconnects after firing once so there is no
lingering listener.

The reduced-motion branch is checked at animation time rather than at import, and
it sets the final value directly rather than merely shortening the duration —
a fast tween is still moving text, which is what the preference asks to avoid.

The component composes with the framework instead of replacing it: it renders a
plain `<span>` carrying `ease-fade-in`, so EaseMotion utility classes stack on it
through `className` exactly as they would on any other element.
