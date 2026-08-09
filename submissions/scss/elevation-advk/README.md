# elevation-advk

A six-step shadow scale where every level is built from two layered shadows.

## Configuration

```scss
@use "elevation-advk" as e with ($shadow-hue: 260, $shadow-sat: 30%);
```

## API

- `@include elevation($level)` — levels `0` to `5`.
- `@include elevation-interactive($rest, $raised, $duration)` — rises on hover and focus.
- `@include elevation-custom-properties` — emit `--elevation-0` … `--elevation-5`.

## Usage

```scss
@use "elevation-advk" as e;

.card { @include e.elevation(2); }
.card--clickable { @include e.elevation-interactive(1, 4); }
:root { @include e.elevation-custom-properties; }
```

## Why it fits EaseMotion CSS

Shadows across `components/` are written ad hoc, so cards, modals and toasts sit
at visually inconsistent depths and no two use the same blur or opacity. A named
scale makes depth a decision with six answers rather than an improvised value each
time.

The two-layer construction is the substantive part. A single shadow reads as a
grey smudge because real occlusion has two components: a tight, darker contact
shadow directly under the object, and a wide, faint ambient one. Layering them is
the difference between a card that looks lifted and one that looks blurred.

Tinting toward the background hue rather than pure black is the other half —
`hsla(220, 25%, 18%)` reads as shadow, while `rgba(0,0,0,…)` reads as dirt on
light surfaces.

Every level includes a `forced-colors` branch adding a real border, because
`box-shadow` is not painted in High Contrast mode and an elevation-only card edge
would otherwise vanish entirely. `elevation-interactive` bundles the transition
and drops the lift under reduced motion while keeping the shadow change.
