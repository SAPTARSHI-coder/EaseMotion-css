# useReducedMotion

A React hook that tracks `prefers-reduced-motion` and updates when the user
changes it, plus a `MotionSafe` wrapper component.

## API

### `useReducedMotion(): boolean`

Returns `true` when the user has requested reduced motion. Re-renders on change.

### `<MotionSafe fallback={...}>{children}</MotionSafe>`

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Rendered when motion is allowed. |
| `fallback` | `ReactNode` | `null` | Rendered when reduced motion is requested. |

## Usage

```jsx
import useReducedMotion, { MotionSafe } from './useReducedMotion';

function Hero() {
  const reduced = useReducedMotion();
  return <video autoPlay={!reduced} loop={!reduced} muted src="/loop.mp4" />;
}

<MotionSafe fallback={<StaticChart data={data} />}>
  <AnimatedChart data={data} />
</MotionSafe>
```

## Why it fits EaseMotion CSS

CSS handles reduced motion through a media query, but some motion is not
expressible in CSS at all — autoplaying video, canvas loops, imperative scroll
animation, `requestAnimationFrame` tweens. Those need the preference as a value in
JavaScript, and EaseMotion currently offers no such binding.

Two bugs are near-universal in hand-rolled versions of this hook, and both are
fixed here. First, reading `matchMedia(...).matches` once in an effect never
updates — the user can change the setting mid-session, and macOS and Windows both
expose it as a live toggle. Subscribing to the `change` event keeps the value
truthful.

Second, initialising state to `false` and correcting it in an effect means the
first paint always shows the animated variant, so a motion-sensitive user sees a
flash of exactly what they asked to avoid. A lazy `useState` initialiser reads the
value before first render instead.

The `addListener` fallback covers Safari below 14, which never shipped
`addEventListener` on `MediaQueryList`. Guarding on `typeof window` keeps the hook
safe under server rendering, where it reports `false` and lets the client correct
on hydration.
