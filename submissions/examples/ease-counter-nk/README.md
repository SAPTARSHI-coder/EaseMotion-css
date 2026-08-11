# Animated Number Counter (`ease-counter`)

> A CSS-only animated number count-up utility that ramps a value from `0` to any target using an animatable `@property` integer rendered through a CSS counter — no JavaScript.

Resolves [#55254](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55254).

## What does this do?

It animates a number from zero up to a target value ("0 → 10,000 customers") entirely in CSS, by registering `--em-count` as an animatable `<integer>` with `@property`, animating it in a `@keyframes` rule, and printing it via `counter()` in generated content.

## How is it used?

```html
<span class="counter" style="--em-count-target: 248"></span>

<span class="counter" style="--em-count-target: 99; --em-count-suffix: '%'"></span>

<span class="counter counter--grouped" style="--em-count-target: 10000"></span>

<span class="counter counter--decimal" style="--em-count-target: 48"></span>

<span class="counter counter--on-view" style="--em-count-target: 500"></span>
```

Because the number lives in a pseudo-element, generated content is not reliably exposed to assistive technology. Give the element its final value as an accessible name:

```html
<span
  class="counter"
  style="--em-count-target: 10000"
  role="img"
  aria-label="10,000 happy customers"
></span>
```

## Why is it useful?

Count-up stats are one of the most common landing page and dashboard motion effects, and they are almost always shipped as a `requestAnimationFrame` loop. This delivers the same effect with a single class and one custom property, keeping the animation on the compositor-adjacent CSS path and off the main thread — which is exactly EaseMotion's zero-config, animation-first, zero-dependency philosophy.

## Features

- **Zero JavaScript** — `@property` makes `--em-count` interpolable, so the browser tweens the integer natively.
- **Token-driven** — duration, delay, easing, prefix, suffix, and separator are all custom properties, overridable inline or per-theme.
- **Thousands separator** — `counter--grouped` splits the value into two counters with `round(down, …)` and zero-pads the remainder via `@counter-style em-pad-3`, so `10000` renders as `10,000` rather than `10,0`.
- **Decimal support** — `counter--decimal` renders one fractional digit by dividing the integer by ten, working around `@property`'s inability to feed a non-integer into `counter()`.
- **Scroll-triggered variant** — `counter--on-view` swaps the time-based animation for `animation-timeline: view()` inside an `@supports` guard, so the count runs as the stat scrolls in.
- **Tabular figures** — `font-variant-numeric: tabular-nums` stops the layout from jittering as digit widths change mid-count.
- **Motion safe** — under `prefers-reduced-motion: reduce` the animation is cancelled and `--em-count` is set straight to the target, so the final value is shown immediately.

## Files

```
submissions/examples/ease-counter-nk/
├── demo.html    — Basic, grouped, decimal, and scroll-triggered counters plus a token reference table
├── style.css    — The @property registration, keyframes, counter variants, and demo page styling
└── README.md    — Component documentation
```

## Custom Properties

| Property | Default | Purpose |
|---|---|---|
| `--em-count-target` | `100` | End value of the count-up. Set this inline per element. |
| `--em-count-duration` | `2s` | How long the count takes. |
| `--em-count-delay` | `0s` | Delay before counting starts; useful for staggering a stat row. |
| `--em-count-easing` | `ease-out` | Timing function applied to the numeric ramp. |
| `--em-count-prefix` | `""` | String rendered before the number, e.g. `"$"`. |
| `--em-count-suffix` | `""` | String rendered after the number, e.g. `"%"` or `"+"`. |
| `--em-count-separator` | `","` | Thousands separator used by `counter--grouped`. |

## Variants

| Class | Effect |
|---|---|
| `counter` | Base count-up from `0` to `--em-count-target`. |
| `counter--grouped` | Inserts a thousands separator. Intended for `1000`–`999999`. |
| `counter--decimal` | Renders one decimal place; pass the target times ten (`48` → `4.8`). |
| `counter--on-view` | Counts on scroll via `animation-timeline: view()` where supported. |

## Browser Support

| Feature | Chrome/Edge | Firefox | Safari |
|---|---|---|---|
| `@property` | 85+ | 128+ | 16.4+ |
| `round()` in `calc()` (grouped/decimal variants) | 125+ | 118+ | 15.4+ |
| `animation-timeline: view()` (`counter--on-view`) | 115+ | — | 26+ |

**Fallback behaviour.** Where `@property` is unsupported, `--em-count` is never registered and so cannot animate; the `counter-reset` fallback chain resolves to `var(--em-count-target)` and the final value renders statically with no animation. The scroll-linked variant is wrapped in `@supports (animation-timeline: view())`, so unsupporting browsers keep the ordinary time-based count. In every case the correct final number is displayed — the animation is the only thing that degrades.

## Acceptance Criteria ✅

- [x] Pure CSS implementation with zero JavaScript.
- [x] Registers `--ease-count`-style integer via `@property` and animates it in `@keyframes`.
- [x] Target, duration, delay, and easing exposed as custom properties.
- [x] Respects `prefers-reduced-motion: reduce` by showing the final value immediately and skipping the animation.
- [x] Documented browser support with a described fallback for older browsers.
- [x] Conforms to the repository submission standards (`demo.html`, `style.css`, `README.md`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
