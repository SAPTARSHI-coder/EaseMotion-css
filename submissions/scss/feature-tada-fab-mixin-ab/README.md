# Tada FAB Mixin (`feature-tada-fab-mixin-ab`)

Standalone **SCSS track** submission for [Issue #50775](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50775).

A beginner-friendly **tada hover effect** mixin for floating action buttons (FABs). Applies a smooth scale + rotate celebration cue on hover / focus without touching `core/` or `components/`.

---

## What it does

- Defines unique `@keyframes tada-fab-ab` (classic tada: scale pulses + rotation)
- Exposes `ease-tada-fab-mixin-ab` for one-line usage on any selector
- Defaults to **hover + `:focus-visible`** so keyboard users get the same cue
- Optional surface / extended FAB helpers for quick chrome + motion
- Optional trigger-class generator for JS replay
- Disables motion under `prefers-reduced-motion: reduce`

---

## Folder structure

```
submissions/scss/feature-tada-fab-mixin-ab/
├── _tada-fab.scss   ← mixin + keyframes
└── README.md        ← this file
```

---

## Installation

Copy `_tada-fab.scss` into your SCSS folder, then load it:

```scss
@use 'tada-fab' as *;
// or: @import 'tada-fab';
```

---

## Parameters — `ease-tada-fab-mixin-ab`

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `$duration` | Time | `0.8s` | Length of one tada cycle |
| `$iteration` | Number / `infinite` | `1` | Plays per hover/focus |
| `$delay` | Time | `0s` | Start delay |
| `$easing` | String | `ease-in-out` | Timing function |
| `$scale-grow` | Number | `1.12` | Peak scale |
| `$scale-shrink` | Number | `0.92` | Opening dip scale |
| `$rotate` | Angle | `8deg` | Peak rotation |
| `$hover-only` | Boolean | `true` | Hover/focus vs play on load |

---

## Usage

### Basic (matches issue example shape)

```scss
@use 'tada-fab' as *;

.my-element {
  @include ease-tada-fab-mixin-ab(0.5s);
}
```

### FAB surface helper

```scss
.compose-fab-ab {
  @include ease-tada-fab-surface-ab(0.5s);
}
```

### Extended pill FAB

```scss
.chat-fab-ab {
  @include ease-tada-fab-extended-ab(0.5s);
}
```

### HTML example

```html
<button
  type="button"
  class="compose-fab-ab"
  aria-label="Compose new note"
>
  +
</button>

<button type="button" class="chat-fab-ab" aria-label="Start chat">
  💬 Chat
</button>
```

Always use a real `<button>` (or link) with a clear `aria-label` when the FAB is icon-only.

---

## Why this is useful

FABs compete with dense UI chrome. A short **tada** on hover/focus:

1. Confirms the control is interactive
2. Feels celebratory without a looping distraction
3. Stays CSS-first via a reusable SCSS mixin
4. Respects accessibility defaults out of the box

A strong candidate for later curation into the official EaseMotion SCSS layer by the maintainer.

---

## Accessibility

- Mixin wraps hover/focus animations in `@media (prefers-reduced-motion: reduce)` and removes them
- Prefer semantic `<button>` elements with `aria-label` for icon-only FABs
- `:focus-visible` is included so keyboard users receive the same tada cue
- Avoid `$iteration: infinite` on large always-visible FABs; prefer a single play per hover

---

## Unique identifier

All mixin names, keyframes, and CSS variables use the **`-ab`** suffix to avoid collisions with parallel submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/scss/feature-tada-fab-mixin-ab/`
- [x] Required `_tada-fab.scss` + `README.md`
- [x] Unique identifier on folder / mixins / keyframes
- [x] Smooth tada hover effect
- [x] `prefers-reduced-motion` handled
- [x] README explains what / how / why
