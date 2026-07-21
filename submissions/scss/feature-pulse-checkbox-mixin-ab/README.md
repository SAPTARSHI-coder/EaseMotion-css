# Pulse Checkbox Mixin (`feature-pulse-checkbox-mixin-ab`)

Standalone **SCSS track** submission for [Issue #50770](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50770).

A beginner-friendly **Pulse Checkbox (Attention Seeker)** mixin — gently scales (and optionally rings) a checkbox to draw attention without touching `core/` or `components/`.

---

## What it does

- Defines unique pulse `@keyframes` (scale + optional expanding ring)
- Exposes `ease-pulse-checkbox-mixin-ab` for one-line usage
- Optional `ease-pulse-checkbox-surface-ab` for a styled native checkbox host
- Optional unchecked-only + trigger-class helpers
- Pauses while `:focus-visible` and disables under `prefers-reduced-motion`

---

## Folder structure

```
submissions/scss/feature-pulse-checkbox-mixin-ab/
├── _pulse-checkbox.scss   ← mixin + keyframes
└── README.md              ← this file
```

---

## Installation

```scss
@use 'pulse-checkbox' as *;
// or: @import 'pulse-checkbox';
```

---

## Parameters — `ease-pulse-checkbox-mixin-ab`

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `$duration` | Time | `1.2s` | Length of one pulse cycle |
| `$iteration` | Number / `infinite` | `infinite` | How many times it pulses |
| `$delay` | Time | `0s` | Start delay |
| `$easing` | String | `ease-in-out` | Timing function |
| `$scale` | Number | `1.12` | Peak scale |
| `$ring` | Boolean | `true` | Soft expanding ring via `::after` |

---

## Usage

### Basic (matches issue example shape)

```scss
@use 'pulse-checkbox' as *;

.my-element {
  @include ease-pulse-checkbox-mixin-ab(0.5s);
}
```

### Styled checkbox surface + attention class

```scss
.pulse-check-ab {
  @include ease-pulse-checkbox-surface-ab(0.5s, 3);
}
```

```html
<label class="pulse-check-ab is-attention-ab">
  <input type="checkbox" name="terms" required />
  <span>I agree to the terms</span>
</label>
```

Add `is-attention-ab` when you need the unchecked box to pulse (e.g. form validation). The pulse stops once the box is checked.

### Unchecked-only pulse on the input

```scss
.terms-check input[type='checkbox'] {
  @include ease-pulse-checkbox-unchecked-ab(0.5s, 3);
}
```

---

## Why this is useful

Required checkboxes are easy to miss. A short pulse cue:

1. Draws attention to “accept terms” / required options
2. Stops naturally when checked (with the surface / unchecked helpers)
3. Stays CSS-first via a reusable SCSS mixin
4. Respects focus and reduced-motion preferences

A strong candidate for later curation into the official EaseMotion SCSS layer.

---

## Accessibility

- Always use a native `<input type="checkbox">` associated with a `<label>`
- Do not replace checkboxes with non-focusable `<div>`s
- Mixin pauses on `:focus-visible` so keyboard users aren’t distracted while focusing
- Under `prefers-reduced-motion: reduce`, pulse + ring are disabled
- Prefer finite `$iteration` (e.g. `3`) over infinite for photosensitive comfort

---

## Unique identifier

All mixin names, keyframes, and CSS variables use the **`-ab`** suffix to avoid collisions with parallel submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/scss/feature-pulse-checkbox-mixin-ab/`
- [x] Required `_pulse-checkbox.scss` + `README.md`
- [x] Unique identifier on folder / mixins / keyframes
- [x] Smooth pulse attention effect
- [x] `prefers-reduced-motion` handled
- [x] README explains what / how / why
