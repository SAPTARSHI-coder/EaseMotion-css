# my-animated-card — EaseMotion React Components

React wrapper components for EaseMotion CSS animations — declarative props instead of hand-written class names.

Closes: #28243

## What this adds

Three drop-in components that map directly onto EaseMotion's existing `ease-*` classes, so you get entry animations, hover effects, and scroll-triggered reveals from plain JSX props instead of memorizing/typing class names by hand.

- **`<Animate>`** — apply a keyframe animation, with duration, delay, iteration count, an optional hover effect, and native animation lifecycle callbacks.
- **`<Hover>`** — a focused component for hover-only effects (lift, scale, shake, glow) when there's no entry animation involved.
- **`<ScrollReveal>`** — wraps `IntersectionObserver` to trigger an entry animation the first time (or every time) an element scrolls into view.

**Dependency:** these components have no runtime dependencies beyond React. They assume the real `easemotion.css` is already loaded on the host page — they only ever add/remove the framework's existing `ease-*` classes, they don't ship or duplicate any CSS of their own.

## Installation

Copy `Animate.jsx`, `Hover.jsx`, and `ScrollReveal.jsx` into your project (e.g. `src/components/`).

---

## `<Animate>`

Applies the real `ease-{type}` keyframe class (no `-animate-` infix), with optional duration, delay, iteration count, hover effect, and animation lifecycle callbacks.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | — | Animation type, e.g. `'fade-in'`, `'slide-up'`, `'zoom-in'`, `'rotate'`, `'bounce-in'` → `ease-{type}` |
| `duration` | `'fast' \| 'medium' \| 'slow' \| number` | `'medium'` | Keyword adds `ease-duration-{duration}`; a number (ms) is set as an inline `animationDuration`/`transitionDuration` instead of a class |
| `delay` | `number` | `0` | Delay in ms, applied as inline `animationDelay`/`transitionDelay` |
| `iteration` | `number \| 'infinite'` | `1` | Applied as inline `animationIterationCount` |
| `hover` | `string` | — | Hover effect, e.g. `'lift'`, `'glow'`, `'scale'`, `'shake'` → `ease-hover-{hover}` |
| `onStart` | `(event) => void` | — | Fired on the native `animationstart` event |
| `onEnd` | `(event) => void` | — | Fired on the native `animationend` event |
| `tag` | `string \| Component` | `'div'` | Element/component to render |
| `className` | `string` | `''` | Additional classes, merged in |
| `style` | `object` | `{}` | Additional inline styles, merged in |

`onStart`/`onEnd` are wired via real `addEventListener('animationstart'/'animationend', ...)` calls on the rendered node (attached through a `ref`) rather than React's `onAnimationStart`/`onAnimationEnd` JSX props, so they fire reliably on the actual native DOM lifecycle events regardless of host app/tooling.

### Usage

```jsx
import Animate from './Animate';

<Animate type="fade-in" duration="fast" delay={150}>
  <p>I fade in quickly, after a short delay.</p>
</Animate>

<Animate type="rotate" iteration="infinite" onEnd={() => console.log('cycle complete')}>
  <LoaderIcon />
</Animate>

// Staggered list
{items.map((item, i) => (
  <Animate key={item.id} type="slide-up" delay={i * 100}>
    <ListItem item={item} />
  </Animate>
))}
```

---

## `<Hover>`

A focused component for hover-only interactions — use this instead of `<Animate hover="...">` when an element has no entry animation, just a hover effect.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `effect` | `'lift' \| 'scale' \| 'shake' \| 'glow'` | `'lift'` | → `ease-hover-{effect}` |
| `tag` | `string \| Component` | `'div'` | Element/component to render |
| `className` | `string` | `''` | Additional classes, merged in |
| `style` | `object` | `{}` | Additional inline styles |

### Usage

```jsx
import Hover from './Hover';

<Hover effect="lift" className="card">
  <h3>Pricing Card</h3>
</Hover>

<Hover effect="glow" tag="button" onClick={handleClick}>
  Get Started
</Hover>
```

---

## `<ScrollReveal>`

Wraps `IntersectionObserver` to trigger an EaseMotion entry animation the first time (or every time) an element enters the viewport — no manual scroll-listener wiring required.

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | — | If set, uses keyframe mode: applies the real `ease-{type}` class once revealed instead of the default `.ease-reveal` transition |
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'scale'` | — | Default-mode only — adds `ease-reveal-{direction}` |
| `duration` | `'fast' \| 'medium' \| 'slow' \| number` | `'medium'` | In keyframe mode, keyword adds `ease-duration-{duration}`; number sets `animationDuration` inline. Default mode's `.ease-reveal` manages its own transition duration in CSS |
| `delay` | `number` | `0` | Delay in ms before the reveal animation starts |
| `threshold` | `number` | `0.15` | `IntersectionObserver` threshold (0–1) |
| `rootMargin` | `string` | `'0px'` | `IntersectionObserver` rootMargin |
| `once` | `boolean` | `true` | If `true`, reveals once and stops observing. If `false`, re-triggers on every enter/exit |
| `activeClassName` | `string` | `'ease-reveal-active'` | Companion class added once revealed in default mode |
| `tag` | `string \| Component` | `'div'` | Element/component to render |
| `className` | `string` | `''` | Additional classes, always applied |
| `onReveal` | `() => void` | — | Fired the first time the element becomes visible |

Also handles `prefers-reduced-motion` (reveals immediately, no observing) and environments without `IntersectionObserver` (reveals immediately as a fallback), matching the behavior of EaseMotion's own `reveal.js`.

### Usage

```jsx
import ScrollReveal from './ScrollReveal';

<ScrollReveal type="slide-up">
  <FeatureCard />
</ScrollReveal>

// Default mode — mirrors reveal.js's own transition
<ScrollReveal direction="up">
  <StatBanner />
</ScrollReveal>

// Re-animates every time it scrolls in and out of view
<ScrollReveal type="fade-in" once={false} threshold={0.3}>
  <StatBanner />
</ScrollReveal>
```

---

## Why this fits EaseMotion CSS

These components don't introduce any new CSS or animation behavior — they're a thin, declarative JSX layer over the framework's existing `ease-*` classes (`ease-{type}`, `ease-duration-{keyword}`, `ease-hover-{effect}`, `ease-reveal`/`ease-reveal-active`), so React/JSX users get the same human-readable, animation-first experience as hand-written class names, without hand-writing them.