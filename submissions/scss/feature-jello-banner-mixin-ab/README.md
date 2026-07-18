# Jello Banner Mixin (`feature-jello-banner-mixin-ab`)

Standalone **SCSS track** submission for [Issue #50777](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50777).

A beginner-friendly **jello attention-seeker** mixin for banners, alerts, and promo strips. Applies a smooth skew-based jello animation without touching `core/` or `components/`.

---

## What it does

- Defines a unique `@keyframes jello-banner-ab` skew oscillation
- Exposes `ease-jello-banner-mixin-ab` for one-line usage on any selector
- Optional `ease-jello-banner-surface-ab` helper for quick banner chrome + motion
- Optional trigger-class generator for JS replay patterns
- Automatically disables motion under `prefers-reduced-motion: reduce`

---

## Folder structure

```
submissions/scss/feature-jello-banner-mixin-ab/
├── _jello-banner.scss   ← mixin + keyframes
└── README.md            ← this file
```

---

## Installation

Copy `_jello-banner.scss` into your SCSS folder, then load it:

```scss
@use 'jello-banner' as *;
// or: @import 'jello-banner';
```

---

## Parameters — `ease-jello-banner-mixin-ab`

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `$duration` | Time | `0.9s` | Length of one jello cycle |
| `$iteration` | Number / `infinite` | `1` | How many times it plays |
| `$delay` | Time | `0s` | Start delay |
| `$fill` | String | `both` | `animation-fill-mode` |
| `$easing` | String | `ease` | Timing function |
| `$skew-x` | Angle | `12.5deg` | Peak horizontal skew |
| `$skew-y` | Angle | `12.5deg` | Peak vertical skew |

---

## Usage

### Basic (matches issue example shape)

```scss
@use 'jello-banner' as *;

.my-element {
  @include ease-jello-banner-mixin-ab(0.5s);
}
```

### Promo banner with softer continuous jello

```scss
.promo-banner-ab {
  @include ease-jello-banner-mixin-ab(
    $duration: 1.1s,
    $iteration: infinite,
    $skew-x: 10deg,
    $skew-y: 8deg
  );
}
```

### Surface helper (styles + motion)

```scss
.alert-banner-ab {
  @include ease-jello-banner-surface-ab(0.5s);
}
```

### HTML example

```html
<aside
  class="alert-banner-ab"
  role="status"
  aria-live="polite"
>
  🎉 New EaseMotion utilities just landed — check the docs!
</aside>
```

Use `role="status"` / `aria-live="polite"` for informational banners so assistive tech announces updates without interrupting the user.

---

## Why this is useful

Banners often need a short “look here” cue when they first appear. A jello motion is more playful than a plain shake and more expressive than a fade. Shipping it as an SCSS mixin lets teams:

1. Keep motion tokens in one place
2. Tune duration / intensity per banner
3. Stay CSS-first (no JS runtime required)
4. Respect accessibility defaults out of the box

A strong candidate for later curation into the official EaseMotion SCSS layer (`ease-*` naming) by the maintainer.

---

## Accessibility

- Mixin wraps output in `@media (prefers-reduced-motion: reduce)` and removes the animation
- Prefer semantic banner containers (`<aside>`, `<section>`) with an appropriate `role`
- Avoid infinite jello on large page regions; prefer `1`–`2` iterations for entrance cues
- Pair with visible focus styles when the banner contains interactive controls (`:focus-within` is included in the surface helper)

---

## Unique identifier

All mixin names, keyframes, and CSS variables use the **`-ab`** suffix to avoid collisions with parallel submissions (per contribution policy).

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/scss/feature-jello-banner-mixin-ab/`
- [x] Required `_jello-banner.scss` + `README.md`
- [x] Unique identifier on folder / mixins / keyframes
- [x] Smooth jello attention effect
- [x] `prefers-reduced-motion` handled
- [x] README explains what / how / why
