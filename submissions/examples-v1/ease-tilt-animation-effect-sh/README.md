# Ease Tilt Animation Effect

A 3D tilt hover effect with a cursor-following glare, that also supports keyboard accessibility.

## What does this do?
Tilts a card in 3D space based on cursor position, with a soft glare highlight that follows the pointer, and smoothly resets when the mouse leaves. Also supports keyboard focus for accessibility.

## How is it used?
Open `demo.html` in your browser and move your mouse over the card — it tilts toward your cursor with a glare highlight, then returns to flat when you move away. Press Tab to focus the card with a keyboard, which triggers the same tilt effect.

```html
<div class="ease-tilt-card" tabindex="0">
  <div class="ease-tilt-glare"></div>
  <div class="ease-tilt-card-inner">
    <h2>Tilt Me</h2>
    <p>Move your mouse over this card.</p>
  </div>
</div>
```

## Why is it useful?
Adds a lightweight, dependency-free, animation-first micro-interaction with a premium glare touch and built-in keyboard accessibility — matching EaseMotion CSS's philosophy of expressive, inclusive motion without heavy JS frameworks.
