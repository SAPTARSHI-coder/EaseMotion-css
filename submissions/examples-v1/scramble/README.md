# ease-scramble

> CSS matrix-style text scramble animation · EaseMotion CSS submission  
> Resolves [Issue #2727](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2727)

---

## What it does

Rapidly cycles through random glyphs before snapping to the final text — a matrix / hacker-style decode effect built entirely in **pure CSS**. No JavaScript required.

---

## How it works

**Technique:** A `::before` pseudo-element is positioned over the element text. A `@keyframes` animation cycles its `content` property through Unicode glyph strings using `steps()` timing (so each frame snaps instantly with no interpolation). At the end of the animation, `content: attr(data-text)` resolves to the final text and the overlay fades out, revealing the real text underneath.

The real text on the element is hidden via `color: transparent` for the duration, then restored — keeping it fully accessible to screen readers and search engines since it stays in the DOM.

**Requirements:** The element must have a `data-text` attribute matching its visible text content.

```html
<h1 class="ease-scramble" data-text="Hello World">Hello World</h1>
```

---

## Classes

| Class | Effect |
|---|---|
| `.ease-scramble` | Matrix decode on `:hover` |
| `.ease-scramble-auto` | Plays once on page load |
| `.ease-scramble-loop` | Repeats every 4 seconds |
| `.ease-scramble-fast` | 0.5s decode — stack with trigger class |
| `.ease-scramble-slow` | 2s decode — stack with trigger class |
| `.ease-scramble-green` | Classic green matrix colour + phosphor glow |

Speed modifiers (`.ease-scramble-fast`, `.ease-scramble-slow`) override `--scramble-duration` and must be stacked with a trigger class (`ease-scramble`, `ease-scramble-auto`, or `ease-scramble-loop`).

---

## Usage

```html
<!-- Hover trigger -->
<h1 class="ease-scramble" data-text="EaseMotion CSS">
  EaseMotion CSS
</h1>

<!-- Auto on load -->
<span class="ease-scramble-auto" data-text="LOADING SYSTEM">
  LOADING SYSTEM
</span>

<!-- Loops every 4s -->
<div class="ease-scramble-loop" data-text="DECODING...">
  DECODING...
</div>

<!-- Speed modifiers -->
<span class="ease-scramble ease-scramble-fast" data-text="QUICK">QUICK</span>
<span class="ease-scramble ease-scramble-slow" data-text="SLOW">SLOW</span>

<!-- Green matrix -->
<span class="ease-scramble ease-scramble-green" data-text="MATRIX">MATRIX</span>

<!-- Combine freely -->
<h1 class="ease-scramble-auto ease-scramble-green ease-scramble-slow"
    data-text="WELCOME">WELCOME</h1>
```

---

## Customisation

```css
.my-element {
  --scramble-duration:    1.5s;           /* animation speed     */
  --scramble-glyph-color: #ff6b6b;        /* scramble glyph colour */
  --scramble-color:       #ffffff;        /* final settled colour  */
  --scramble-steps:       16;             /* more steps = smoother */
}
```

---

## Files

```
submissions/examples/scramble/
├── style.css   ← all 6 classes + @keyframes + CSS variables
├── demo.html   ← live showcase of every variant
└── README.md   ← this file
```

---

## Implementation notes

- `data-text` attribute is **required** on each element — it feeds `content: attr(data-text)` in the overlay pseudo-element.
- `steps()` timing function creates the authentic frame-by-frame scramble snap (no easing between glyphs).
- `.ease-scramble-fast` / `.ease-scramble-slow` simply override `--scramble-duration` — composable with no extra specificity.
- `.ease-scramble-green` adds a phosphor text-shadow to both the element and `::before` for the CRT glow effect.
- `prefers-reduced-motion` disables all animations and restores visible text for users who opt out.
- Real text stays in the DOM at all times — screen readers read the correct content.

---

## Browser support

All modern browsers (2020+). Uses: CSS custom properties, `content: attr()`, `::before`, `@keyframes`, `steps()`, `animation-fill-mode`.

---

## Status

`[PENDING REVIEW]` — submitted for maintainer integration as `ease-scramble` into `core/animations.css`.