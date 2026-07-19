# Glitch Tooltip Mixin (`feature-glitch-tooltip-mixin-ab`)

Standalone **SCSS track** submission for a **Glitch Tooltip (Hover Effect)**.

A beginner-friendly mixin that applies a smooth chromatic glitch cue to tooltips on hover / focus — without touching `core/` or `components/`.

---

## What it does

- Defines unique glitch `@keyframes` (jitter + optional chromatic layer)
- Exposes `ease-glitch-tooltip-mixin-ab` for one-line usage
- Optional `ease-glitch-tooltip-surface-ab` builds a full CSS tooltip from `data-tooltip`
- Optional clone + trigger-class helpers for custom markup / JS replay
- Disables motion under `prefers-reduced-motion: reduce`

---

## Folder structure

```
submissions/scss/feature-glitch-tooltip-mixin-ab/
├── _glitch-tooltip.scss   ← mixin + keyframes
└── README.md              ← this file
```

---

## Installation

```scss
@use 'glitch-tooltip' as *;
// or: @import 'glitch-tooltip';
```

---

## Parameters — `ease-glitch-tooltip-mixin-ab`

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `$duration` | Time | `0.5s` | Length of one glitch cycle |
| `$iteration` | Number / `infinite` | `1` | Plays per hover/focus |
| `$delay` | Time | `0s` | Start delay |
| `$easing` | String | `linear` | Timing function |
| `$shift` | Length | `2px` | Peak horizontal offset |
| `$hover-only` | Boolean | `true` | Hover/focus vs play on load |

---

## Usage

### Basic (matches issue example shape)

```scss
@use 'glitch-tooltip' as *;

.my-element {
  @include ease-glitch-tooltip-mixin-ab(0.5s);
}
```

### Full tooltip surface (`data-tooltip`)

```scss
.hint-ab {
  @include ease-glitch-tooltip-surface-ab(0.5s);
}
```

```html
<button
  type="button"
  class="hint-ab"
  data-tooltip="Saved to drafts"
  aria-describedby="hint-live-ab"
>
  Save
</button>
<span id="hint-live-ab" class="visually-hidden">
  Tooltip: Saved to drafts
</span>
```

> Tip: CSS-only `::after` tooltips are visual. For screen-reader parity, mirror the tip text with `aria-describedby` / a visually hidden live region as shown above.

### Bottom placement

```scss
.hint-bottom-ab {
  @include ease-glitch-tooltip-surface-ab(
    $duration: 0.5s,
    $placement: bottom
  );
}
```

---

## Why this is useful

Tooltips often fade in plainly. A short glitch hover cue:

1. Makes help text feel intentional and “techy”
2. Works as a hover attention seeker without looping forever
3. Stays CSS-first via a reusable SCSS mixin
4. Respects accessibility defaults out of the box

A strong candidate for later curation into the official EaseMotion SCSS layer.

---

## Accessibility

- Prefer real interactive hosts (`<button>`, `<a>`) so `:focus-visible` works
- Expose tooltip meaning via `aria-describedby` / accessible text — not only `data-tooltip`
- Mixin disables animations under `prefers-reduced-motion: reduce`
- Keep tip copy short; avoid infinite glitch on large regions

---

## Unique identifier

All mixin names, keyframes, and CSS variables use the **`-ab`** suffix to avoid collisions with parallel submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/scss/feature-glitch-tooltip-mixin-ab/`
- [x] Required `_glitch-tooltip.scss` + `README.md`
- [x] Unique identifier on folder / mixins / keyframes
- [x] Smooth glitch hover effect
- [x] `prefers-reduced-motion` handled
- [x] README explains what / how / why
