# ease-progress — Animated Progress Bar

Targets the roadmap item **"Badge, tag, avatar, progress bar" — Planned v1.3**.
A pure CSS progress bar with a smooth animated fill, striped/animated variant,
and an indeterminate loading state — no JavaScript required to render or
animate.

## Why

Progress bars are one of the most common feedback UI elements (uploads,
loading states, quotas, onboarding steps) and benefit directly from
EaseMotion's animation-first approach — width transitions and stripe motion
are handled entirely in CSS.

## What it does

- Pure CSS — width is set inline (`style="width:65%"`) or via JS, and the
  fill animates smoothly to any new value using `--ease-speed-medium`
- Color variants: default (primary), `ease-progress-success`,
  `ease-progress-danger`
- Size modifiers: `ease-progress-sm`, `ease-progress-lg`
- `ease-progress-striped` — diagonal stripe texture
- `ease-progress-striped-animated` — stripes continuously scroll
- `ease-progress-indeterminate` — for unknown-duration loading states,
  animates a sliding segment instead of a fixed width
- Optional `.ease-progress-label` row for a title + percentage above the bar

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress-bar" style="width: 65%;"></div>
</div>
```

With label:

```html
<div class="ease-progress-label"><span>Uploading</span><span>65%</span></div>
<div class="ease-progress">
  <div class="ease-progress-bar" style="width: 65%;"></div>
</div>
```

Variants:

```html
<div class="ease-progress ease-progress-success">...</div>
<div class="ease-progress ease-progress-striped ease-progress-striped-animated">...</div>
<div class="ease-progress ease-progress-indeterminate">
  <div class="ease-progress-bar"></div>
</div>
```

## Files

- `demo.html` — standalone live demo covering all variants: basic,
  success, danger, small, large, striped-animated, indeterminate
- `style.css` — self-contained component styles, falls back to sensible
  defaults if a design token isn't present

## Accessibility notes

- Intended usage is to pair the markup with `role="progressbar"`,
  `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` on the outer
  `.ease-progress` element when integrated (kept out of the raw demo
  per the submission convention of raw, un-namespaced markup — happy
  to add these attributes directly if preferred during standardization)
- Indeterminate variant is meant to be paired with `aria-busy="true"`
  and a visible or `aria-label` text description of what's loading

## Naming

Raw class names (`progress`, `progress-bar`, `progress-label`) kept simple
per the contribution guide — happy for the maintainer to remap to final
`ease-*` naming during standardization.