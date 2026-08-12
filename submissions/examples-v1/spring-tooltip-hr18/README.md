# Spring Physics Tooltip (`spring-tooltip-hr18`)

A pure-CSS animated tooltip with a "Spring Physics" entrance, styled for
creative portfolio layouts, built for issue
[#46294](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/46294).

## What it does

Hovering — or tabbing to, with a keyboard — a nav icon reveals a tooltip
label that springs into place: it overshoots past its resting size, settles
back, overshoots again more gently, and comes to rest — a damped-oscillation
approximation of real spring physics using plain `@keyframes`, rather than a
one-shot ease-in fade. Both the **show/hide behavior and the spring
animation are pure CSS**, driven by `:hover`/`:focus-within` plus
`@keyframes ease-spring-hr18` — no JavaScript is required for the core
interaction. A few lines of optional script only add `Escape`-to-dismiss.

The demo applies it to a four-icon portfolio nav bar (Home, Work, Contact,
Resume), each showing its label on hover or focus.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap a trigger and a tooltip bubble in the component markup:

```html
<span class="spt-tooltip-wrap-hr18">
  <button type="button" class="spt-nav-icon-hr18" aria-describedby="myTip">
    <!-- icon SVG -->
  </button>
  <span class="ease-tooltip-spring-hr18" id="myTip" role="tooltip">Home</span>
</span>
```

That's the entire component — no JavaScript wiring is needed per instance.

### Tuning the animation

Every timing/scale value is a CSS custom property, overridable per instance
or globally:

| Property | Default | Controls |
|---|---|---|
| `--ease-spring-duration-hr18` | `650ms` | How long the full settle sequence takes |
| `--ease-spring-easing-hr18` | `cubic-bezier(0.16, 1, 0.3, 1)` | The overall pacing curve applied across the sequence |
| `--ease-spring-peak-scale-hr18` | `1.18` | How far past full size the first overshoot goes — lower for a gentler spring |
| `--ease-spring-delay-hr18` | `0ms` | Delay before the spring starts after hover/focus |

```css
.spt-tooltip-wrap-hr18.gentle .ease-tooltip-spring-hr18 {
  --ease-spring-peak-scale-hr18: 1.06;
  --ease-spring-duration-hr18: 400ms;
}
```

A true spring simulation is a damped harmonic oscillator, which modern CSS
can approximate more precisely with the `linear()` easing function — but
that has notably narrower browser support than plain `@keyframes`, so this
component uses a hand-tuned multi-stage keyframe sequence instead, which
works everywhere `@keyframes` does.

## Accessibility notes

- The trigger is a native `<button>`, reachable and triggerable by keyboard
  without any extra scripting.
- The tooltip shows on `:focus-within` as well as `:hover`, so keyboard-only
  users see the same label sighted mouse users do.
- The trigger and its tooltip are connected with `aria-describedby`, and the
  tooltip carries `role="tooltip"`, so it's announced together with the
  icon button it describes.
- The tooltip contains only text — no interactive content — matching the
  WAI-ARIA tooltip pattern's expectations.
- `Escape` blurs the trigger (via the small optional script) to dismiss the
  tooltip early without needing to tab away.
- The spring animation respects `@media (prefers-reduced-motion: reduce)`
  and appears instantly at rest instead.

## Responsiveness

The nav bar wraps onto a second line on narrow viewports rather than
overflowing, since it's a flex row with `flex-wrap: wrap`.

## Why this fits EaseMotion CSS

The entire interaction runs on plain CSS selectors and a single
`@keyframes` block, matching the issue's explicit ask for zero JavaScript
overhead, while exposing every timing/scale value as a tunable custom
property and remaining keyboard accessible via `:focus-within`.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/examples/`.
