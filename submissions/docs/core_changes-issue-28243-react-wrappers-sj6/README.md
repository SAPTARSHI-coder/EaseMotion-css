# EaseMotion React Wrappers — `<Animate>`, `<Hover>`, `<ScrollReveal>`

Reference implementation for **issue #28243** — a full suite of React wrapper
components that make EaseMotion CSS animations declarative in JSX, plus
framework-agnostic helpers and unit tests.

Because contributions live under `submissions/`, this folder is the drop-in
reference: the maintainer can lift `Animate.jsx`, `Hover.jsx`,
`ScrollReveal.jsx` (and their helper modules) into
`examples/react-vite/src/components/`, and the tests into `tests/`.

## What's here

| File | Role |
| --- | --- |
| `Animate.jsx` | Keyframe animation wrapper (expanded from the existing `Animate`) |
| `Hover.jsx` | Hover interactions — lift / scale / glow / shrink / shake |
| `ScrollReveal.jsx` | Reveal-on-scroll via `IntersectionObserver` |
| `animationClasses.js` | Pure class/style resolution logic (no React) |
| `scrollRevealCore.js` | Pure reveal/observer logic (no React) |
| `animationClasses.test.js` | Unit tests for the class/style helpers |
| `scrollReveal.test.js` | Unit tests for the observer logic |
| `demo.html` + `style.css` | Zero-build HTML preview of the behaviour |

The JSX shells are deliberately thin — all branching lives in the two plain
`.js` helpers so it can be unit-tested with the repo's existing `vitest` setup
**without adding React as a dependency**.

## `<Animate>`

Plays a keyframe animation on mount and maps friendly keywords to the real
`ease-*` framework classes.

```jsx
import Animate from './Animate';

// keyword duration → utility class, delay → inline animation-delay
<Animate type="slide-up" duration="slow" delay={200}>Hello</Animate>

// numeric duration (ms) is inlined; looping + lifecycle callbacks
<Animate
  type="pulse"
  duration={800}
  iteration="infinite"
  onStart={() => console.log('start')}
  onEnd={() => console.log('end')}
>
  Live
</Animate>
```

| Prop | Type | Notes |
| --- | --- | --- |
| `type` | string | `fade-in`, `slide-up`, `zoom-in`, `spin`, `bounce`, `shake`, … (unknown → `ease-<type>`) |
| `duration` | `'fast' \| 'medium' \| 'slow'` or number (ms) | keyword → `.ease-duration-*`; number → inline |
| `delay` | number (ms) | inline `animation-delay` |
| `iteration` | `'infinite'` or number | `animation-iteration-count` |
| `hover` | string | inline hover effect (or use `<Hover>`) |
| `onStart` / `onEnd` | function | bound to `onAnimationStart` / `onAnimationEnd` |
| `tag` | string | element to render (default `div`) |

> **Fix included:** the previous `Animate` emitted `ease-animate-<type>` /
> `ease-hover-<hover>`, which are **not** classes the framework ships — so the
> example's animations never fired. This suite maps to the real `ease-*`
> classes while keeping the existing prop API backward-compatible.

## `<Hover>`

```jsx
import Hover from './Hover';

<Hover effect="lift"><button>Lift me</button></Hover>
<Hover effect="shake"><span>Shake on hover</span></Hover>
```

`lift → ease-hover-lift`, `scale → ease-hover-grow`, `glow → ease-hover-glow`,
`shrink → ease-hover-shrink`. `shake` has no pure-CSS hover class (a `:hover`
shake would loop while the pointer rests), so it plays the one-shot
`ease-shake` keyframe on each hover-in via component state.

## `<ScrollReveal>`

```jsx
import ScrollReveal from './ScrollReveal';

<ScrollReveal variant="up" once>
  <section>Revealed on scroll</section>
</ScrollReveal>
```

Uses `IntersectionObserver` and the framework's transition-based
`ease-reveal → ease-reveal-active` convention (the React counterpart of
`core/reveal.js`). Honours `prefers-reduced-motion` and degrades gracefully
(immediate reveal) where `IntersectionObserver` is unavailable.

| Prop | Type | Notes |
| --- | --- | --- |
| `variant` | `'up' \| 'down' \| 'left' \| 'right' \| 'scale' \| 'fade'` | entry direction (default `up`) |
| `once` | boolean | reveal only the first time (default `true`) |
| `threshold` / `rootMargin` | number / string | forwarded to `IntersectionObserver` |
| `onReveal` | function | called with the element once revealed |

## Tests

`animationClasses.test.js` and `scrollReveal.test.js` mirror the style of the
framework's own `tests/reveal.test.js` (vitest + jsdom, mocked
`IntersectionObserver` / `matchMedia`) — 32 assertions across class/style
resolution, iteration normalisation, reveal-on-intersect, `once` behaviour,
reduced-motion & no-IntersectionObserver fallbacks, and observer cleanup.

Once the components are lifted into `examples/react-vite/` and these tests into
`tests/`, they run with `npm test` from the repo root (whose `vitest.config.js`
discovers `tests/**/*.test.js`).

## Live preview

Open `demo.html` in a browser (no build step). It links the framework and uses
the exact `ease-*` classes these components emit, with a few lines of vanilla
JS mirroring the `shake` and scroll-reveal behaviour.
