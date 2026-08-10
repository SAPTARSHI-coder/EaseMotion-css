# ease-confetti

> CSS-only confetti burst animation · EaseMotion CSS submission
> Resolves [Issue #2720](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2720)

---

## What it does

Fires coloured particles outward from an element using **pure CSS** — no JavaScript, no canvas, no dependencies.

Technique: two `::before` / `::after` pseudo-elements each carry 6 shadow-cloned particles via `box-shadow`. A `@keyframes` animation translates the shadow offsets outward and fades them out, creating a convincing multi-particle burst.

---

## Classes

| Class | Effect |
|---|---|
| `.ease-confetti` | Confetti burst on `:active` click / tap |
| `.ease-confetti-auto` | Plays automatically once on page load |
| `.ease-confetti-loop` | Repeats every 3 seconds |
| `.ease-confetti-small` | Tiny particles (stack with the above) |
| `.ease-confetti-large` | Big chunky particles (stack with the above) |

---

## Usage

```html
<!-- Fires on click -->
<button class="ease-btn ease-btn-primary ease-confetti">
  🎉 Celebrate!
</button>

<!-- Auto-plays on load -->
<div class="ease-confetti-auto">
  <h2>You did it!</h2>
</div>

<!-- Loops every 3s -->
<div class="ease-confetti-loop">
  🔁 Party mode
</div>

<!-- Size modifiers — stack with ease-confetti for click trigger -->
<button class="ease-confetti ease-confetti-small">Tiny particles</button>
<button class="ease-confetti ease-confetti-large">Chunky particles</button>
```

---

## Files

```
submissions/examples/confetti/
├── style.css   ← all 5 classes + @keyframes + CSS variables
├── demo.html   ← live showcase of every variant
└── README.md   ← this file
```

---

## Implementation notes

- **Zero JS** — animation triggered entirely via CSS `:active` pseudo-class or auto-playing `@keyframes`.
- **12 particles** — `::before` emits 6, `::after` emits 6, each at different angles and colours.
- **6 CSS variables** for colours (`--confetti-c1` … `--confetti-c6`) — trivially overridable.
- **`--confetti-size`** controls particle dimensions; `ease-confetti-small` / `ease-confetti-large` override it.
- **`overflow: visible`** on the host element so particles escape its bounds.
- **`prefers-reduced-motion`** respected — all animations disabled for users who opt out.
- **No specificity conflicts** — classes are composable and scoped to their own pseudo-elements.

---

## Customisation

Override CSS variables on the element or globally:

```css
/* Custom colours */
.my-element {
  --confetti-c1: #ff6b6b;
  --confetti-c2: #ffe66d;
  --confetti-c3: #4ecdc4;
  --confetti-duration: 1.2s;
}
```

---

## Browser support

All modern browsers. Uses: `box-shadow`, `@keyframes`, `::before`/`::after`, CSS custom properties — all baseline since 2020.

---

## Status

`[PENDING REVIEW]` — submitted for maintainer integration as `ease-confetti` into `core/animations.css`.