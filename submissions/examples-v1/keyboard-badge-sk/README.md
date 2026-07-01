# Animated Keyboard Shortcut Sequence Badge

## What does this do?
Renders styled keyboard key badges (`<kbd>`) with a realistic 3D press effect, and sequences of keys that animate in one-by-one on load. Includes a shortcut reference table layout and press-down simulation.

## How is it used?

```html
<!-- Single key -->
<kbd class="kbd">⌘</kbd>
<kbd class="kbd kbd--light">Ctrl</kbd>

<!-- Animated shortcut sequence -->
<div class="kbd-seq kbd-seq--animate">
  <kbd class="kbd">⌘</kbd>
  <span class="kbd-seq__sep">+</span>
  <kbd class="kbd">K</kbd>
</div>

<!-- Shortcut reference row -->
<div class="shortcut-row">
  <span class="shortcut-row__label">Save file</span>
  <div class="kbd-seq">
    <kbd class="kbd">⌘</kbd>
    <span class="kbd-seq__sep">+</span>
    <kbd class="kbd">S</kbd>
  </div>
</div>
```

Add `.kbd--pressed` via JS (or use `:active`) for the press-down animation.

## Why is it useful?
Keyboard shortcut UX is a core part of developer tools, command palettes, and help overlays. The 3D key effect uses `box-shadow` and `transform: translateY` — pure CSS. The staggered sequence entry animation uses `@keyframes` with `nth-child` delays. Fully composable: single keys, sequences, and reference tables all use the same base `.kbd` class.
