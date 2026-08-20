# useInView

A React hook reporting whether an element is in the viewport, returning a
callback ref so it re-observes when the node changes.

## API

```js
const [ref, inView] = useInView({ threshold, rootMargin, once });
```

| Option | Type | Default | Description |
|---|---|---|---|
| `threshold` | `number` | `0` | Fraction visible before reporting true. |
| `rootMargin` | `string` | `'0px'` | Margin around the root, e.g. `'-80px 0px'`. |
| `once` | `boolean` | `false` | Stop observing after the first intersection. |

## Usage

```jsx
import useInView from './useInView';

function Section() {
  const [ref, inView] = useInView({ threshold: 0.3, once: true });
  return <div ref={ref} className={inView ? 'ease-fade-in' : 'ease-pre-reveal'} />;
}
```

## Why it fits EaseMotion CSS

Reveal-on-scroll is the most common reason a project reaches for a JavaScript
animation library. This hook supplies just the observation and leaves the
animation to EaseMotion's `ease-*` classes, so the CSS stays the source of truth
for motion.

The callback-ref design is the substantive difference from typical
implementations. A hook that takes a `useRef` object and observes it inside
`useEffect` only sees the node present on the effect's first run — if the element
is conditionally rendered, keyed differently, or replaced, the observer keeps
watching a detached node and `inView` silently stops updating. A callback ref
fires on every attach and detach, so the observer always tracks the live node.

The disconnect-before-reobserve in the ref callback prevents observer leaks when
options change, and the `useEffect` cleanup handles unmount.

The no-support branch reports `true` rather than `false`, so content gated behind
`inView` is shown rather than permanently hidden — the same fail-open principle
used in the RevealOnScroll component.
