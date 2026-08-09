# Confetti Bottom Sheet — Neumorphism

A neumorphic bottom sheet component with pure CSS confetti animation for EaseMotion CSS.

## What does this do?

A slide-up bottom sheet panel with neumorphic raised/inset shadows and a celebratory confetti particle burst — implemented entirely in CSS with no JavaScript.

## How is it used?

```html
<!-- Hidden checkbox drives open/close -->
<input type="checkbox" id="cbs-open" class="cbs-toggle" aria-hidden="true">

<!-- Confetti particles -->
<div class="cbs-confetti-container" aria-hidden="true">
  <span class="cbs-confetti"></span>
  <!-- repeat for each particle -->
</div>

<!-- Backdrop overlay -->
<label for="cbs-open" class="cbs-overlay"></label>

<!-- Bottom Sheet -->
<div class="cbs-sheet" role="dialog" aria-modal="true" aria-labelledby="cbs-title">
  <div class="cbs-sheet__panel">
    <div class="cbs-sheet__handle"></div>
    <div class="cbs-sheet__header">
      <h2 class="cbs-sheet__title" id="cbs-title">Sheet Title</h2>
      <label for="cbs-open" class="cbs-sheet__close">&times;</label>
    </div>
    <div class="cbs-sheet__body">
      <!-- Sheet content here -->
    </div>
  </div>
</div>

<!-- Trigger -->
<label for="cbs-open" class="cbs-trigger">Open Sheet</label>
```

## Why is it useful?

Bottom sheets are among the most commonly needed UI elements for mobile-first interfaces. This neumorphic variant provides a polished, reusable building block that contributors can drop directly into their projects using EaseMotion CSS. The pure CSS confetti animation adds a celebratory flourish without any JavaScript dependency, keeping the component lightweight and accessible.

## Features

- **Pure CSS** — no JavaScript required; checkbox toggle for open/close
- **Neumorphic design** — raised and inset shadow states using `--ease-neu-*` variables
- **Confetti animation** — 20 colorful particles with fall + sway keyframes
- **Responsive** — adapts from mobile (full-width) to desktop (centered, max-width 640px)
- **Accessible** — `role="dialog"`, `aria-modal`, focus styles, `prefers-reduced-motion` support
- **Uses EaseMotion CSS variables** — colors, spacing, shadows, easing curves, font stack

## Files

- `demo.html` — self-contained demo page
- `style.css` — component styles and confetti keyframes
- `README.md` — this file
