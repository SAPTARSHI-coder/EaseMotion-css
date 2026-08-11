# easing-tokens-advk

A named easing and duration scale for EaseMotion, with functions and mixins so
timing is selected by intent rather than by pasting bezier coordinates.

## Tokens

| Easing | Curve | Use for |
|---|---|---|
| `enter` | `cubic-bezier(0.22, 1, 0.36, 1)` | Elements arriving on screen |
| `exit` | `cubic-bezier(0.55, 0, 1, 0.45)` | Elements leaving |
| `move` | `cubic-bezier(0.65, 0, 0.35, 1)` | Moving between on-screen positions |
| `spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Confirmations, playful feedback |
| `elastic` | `cubic-bezier(0.34, 1.8, 0.5, 1)` | Strong attention, sparingly |
| `linear` | `linear` | Progress and time-linear motion |

| Duration | Value |
|---|---|
| `instant` | `120ms` |
| `fast` | `200ms` |
| `base` | `320ms` |
| `slow` | `480ms` |
| `deliberate` | `720ms` |

## API

- `ease($name)` / `dur($name)` — look up a token; errors listing valid keys if the name is unknown.
- `@include transition($props, $speed, $curve)`
- `@include animate($name, $speed, $curve, $fill)`
- `@include easing-custom-properties` — emit the scale as CSS custom properties.

## Usage

```scss
@use "easing-tokens-advk" as m;

.card {
  @include m.transition(transform box-shadow, "fast", "move");

  &:hover { transform: translateY(-4px); }
}

.modal {
  @include m.animate(ease-kf-zoom-in, "base", "enter");
}

:root {
  @include m.easing-custom-properties; // --ease-enter, --dur-base, ...
}
```

## Why it fits EaseMotion CSS

EaseMotion's premise is that motion should be described in words a developer
already understands — `ease-fade-in` beats a hand-rolled keyframe. Timing is the
one place that promise currently breaks down: `core/variables.css` exposes some
tokens, but bezier values still get pasted literally into component CSS, so the
same intent ends up with slightly different curves across files and the framework
drifts out of visual coherence.

Grouping curves by purpose rather than by shape is the important choice here.
`enter` and `exit` are deliberately asymmetric — things should arrive gently and
leave briskly, which is why a single shared "ease-in-out" makes interfaces feel
sluggish. Naming them after the job makes the right default the easy one.

Both mixins collapse to `0.01ms` under `prefers-reduced-motion` rather than to
`0`, because a genuinely zero duration suppresses `transitionend` and
`animationend` events that components may depend on to sequence unmount — the
same trap the MotionToast submission documents. `easing-custom-properties` exists
so projects that do not build SCSS can still consume the identical scale.
