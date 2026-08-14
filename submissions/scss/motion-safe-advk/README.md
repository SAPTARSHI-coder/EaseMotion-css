# motion-safe-advk

SCSS mixins that make `prefers-reduced-motion` handling structural rather than
optional.

## Mixins

| Mixin | Purpose |
|---|---|
| `motion-safe` | Wrap `@content` in `(prefers-reduced-motion: no-preference)`. |
| `motion-reduce` | Wrap `@content` in `(prefers-reduced-motion: reduce)`. |
| `animate-safely($name, $duration, $easing, $reduced, $reduced-duration)` | Declare an animation and its reduced alternative together. |
| `transition-safely($props, $duration, $easing)` | Transition that collapses to `0.01ms` under reduced motion. |
| `loop-safely($name, $duration, $easing)` | Infinite animation that stops entirely under reduced motion. |

## Usage

```scss
@use "motion-safe-advk" as m;

.card {
  @include m.animate-safely(slide-up, 480ms, ease-out, $reduced: fade-in);
}

.button {
  @include m.transition-safely(transform background, 200ms);
}

.spinner {
  @include m.loop-safely(spin, 900ms);
}
```

## Why it fits EaseMotion CSS

An audit of this repository found 25 stylesheets in `core/` and `components/`
with no `prefers-reduced-motion` block at all, including `loaders.css`,
`skeleton.css`, `progress.css` and `toast.css`. That is not carelessness by any
individual author — it is what happens when the accessible path is a separate,
optional block that has to be remembered every time.

These mixins invert that. `animate-safely` emits both branches from one call, so
the reduced variant cannot be omitted without deliberately passing nothing, and
even then the fallback is `animation: none` rather than an unhandled loop.
`loop-safely` exists as a distinct mixin because infinite animations are the
highest-risk category and deserve a name that makes the author think about it.

`transition-safely` collapses to `0.01ms` rather than `0`. A genuinely zero
duration prevents `transitionend` from firing, which silently breaks any component
that sequences unmount off that event — a trap worth encoding once in a mixin
instead of rediscovering per project.
