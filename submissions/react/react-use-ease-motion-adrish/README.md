# useEaseMotion — React Hook for the Motion Engine

A reusable React hook that wires any DOM node into EaseMotion CSS's
Motion Engine `em=""` DSL, instead of hand-writing `useEffect` +
`setAttribute` boilerplate in every component that wants engine-driven
animation.

> Submission track: `submissions/react/react-use-ease-motion-adrish/`
> Resolves: #<issue-number>

---

## What does this do?

`useEaseMotion(tokens)` returns a ref. Attach it to any element and the
element gets the real `em=""` attribute set — the engine's own
`runtime.js` (already running its `MutationObserver` on `attributeFilter:
['em']`) picks up the change and compiles/applies the animation exactly
like it would for a hand-written `<div em="...">`. No engine internals
are touched by this hook; it's purely a React-lifecycle-to-attribute
bridge.

## How is it used?

```jsx
import { useEaseMotion } from './useEaseMotion';

function Banner() {
  const ref = useEaseMotion('slide-in-from-bottom 600ms ease-out');
  return <div ref={ref} className="ease-card">Hello</div>;
}
```

`AnimatedCard.jsx` in this submission is a working demo consumer:

```jsx
import AnimatedCard from './AnimatedCard';

<AnimatedCard title="Real-time sync" tokens="fade-in 400ms ease-out">
  Your changes save automatically.
</AnimatedCard>
```

## Props / API reference

### `useEaseMotion(tokens, deps?)`

| Param | Type | Description |
|---|---|---|
| `tokens` | `string` | Any valid `em=""` token string (e.g. `"fade-in 500ms ease-out delay-200ms"`) |
| `deps` | `any[]` (optional) | Effect dependency array — defaults to `[tokens]`, re-applies the attribute whenever the token string changes |

Returns a `RefObject` — attach it to the DOM node you want animated.

### `<AnimatedCard />` (demo component)

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Card heading |
| `children` | `ReactNode` | — | Card body content |
| `tokens` | `string` | `"fade-in 500ms ease-out"` | Passed straight through to `useEaseMotion` |

## How is this different from existing hook proposals?

Two prior issues cover adjacent but distinct ground:

- **#34686 (`useEaseReveal`, merged via #34987)** wraps the existing
  vanilla `ease-scroll-reveal` + `reveal.js` utility for scroll-gated
  reveals specifically. `useEaseMotion` wraps the separate `em=""`
  Motion Engine DSL instead, for any animation (mount-time or
  otherwise) — not scroll-gated, and not built on `IntersectionObserver`.
- **#43920 (`useMotionOrchestrator`)** uses the native Web Animations
  API (`element.animate()`) directly to orchestrate staggered
  sequences across multiple elements. `useEaseMotion` doesn't use
  WAAPI at all and isn't a stagger/orchestration tool — it's a
  single-element bridge into the engine's existing attribute-driven
  compile pipeline.

No existing hook wraps the `em=""` engine DSL itself.

## Why is this useful?

- VISION.md lists "Framework integrations (React, Vue, Astro)" as an
  unshipped long-term goal. This is the React half of that, built the
  lowest-risk way possible.
- 619 existing submissions in `submissions/react/` use EaseMotion's
  static `ease-*` classNames, but none of them wire a component into
  the actual Motion Engine DSL — every animated React usage today means
  re-deriving this same `useEffect`/`setAttribute` pattern by hand.
  This makes it a one-line reusable primitive instead.
- **Zero changes to `parser.js`, `compiler.js`, or `runtime.js`** —
  same low-risk shape as the already-merged scroll-trigger plugin: ride
  the existing attribute-mutation observer, don't add a second code
  path.
- Self-contained — no edits to `core/`, `components/`, or engine files,
  compliant with the current submissions-only freeze.

## Files

| File | Purpose |
|---|---|
| `useEaseMotion.js` | The reusable hook |
| `AnimatedCard.jsx` | Demo component consuming the hook, using real `ease-card` classes |
| `README.md` | This document |

## Compliance notes

- Only new files inside `submissions/react/react-use-ease-motion-adrish/`.
- No edits to `core/`, `components/`, `parser.js`, `compiler.js`,
  `runtime.js`, or any config/workflow file.
