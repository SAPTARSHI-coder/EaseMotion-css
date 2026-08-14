# Theme Toggle — Sun/Moon Icon Morph

## 1. What does this do?
A single-element toggle switch that morphs a sun icon into a crescent moon (and back) using only `box-shadow` rays that fade out and a masking circle that slides in — no SVGs, no icon fonts.

## 2. How is it used?
```html
<label class="theme-toggle">
  <input type="checkbox" onchange="document.documentElement.classList.toggle('dark', this.checked)">
  <span class="theme-toggle-icon"></span>
</label>
```
Checking the box adds a `dark` class to `<html>` (for the consumer's own dark-mode styles) and, purely through CSS, swaps the icon from sun to moon.

## 3. Why is this useful?
Dark mode toggles are on nearly every modern site, and the sun-to-moon morph is one of the most-copied micro-interactions in UI design. Doing it with zero dependencies — just shapes, `box-shadow`, and `transition` — is a strong, on-brand showcase for EaseMotion CSS's animation-first, zero-dependency philosophy.
