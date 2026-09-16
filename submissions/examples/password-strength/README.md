# Password Strength Meter with Animated Bars

A four-segment password strength meter where filled bars animate in with a staggered fill, colored by strength level. Pure HTML and CSS — no JavaScript required for the visuals.

## Features

- 📊 Four-bar segmented meter with staggered fill-in animation
- 🎨 Color-coded by strength: red (weak), orange (medium), green (strong)
- 📱 Responsive — bars scale with container width
- ♿ Respects `prefers-reduced-motion` (bars fill instantly)
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<div class="strength-meter strength-meter--medium">
  <span class="strength-bar"></span>
  <span class="strength-bar"></span>
  <span class="strength-bar"></span>
  <span class="strength-bar"></span>
</div>
<p class="strength-text strength-text--medium">Medium</p>
```

Change the modifier (`strength-meter--weak`, `--medium`, `--strong`) to control how many bars fill and their color.

## Why it fits EaseMotion CSS

The bar fill is a single `@keyframes width` animation applied via `::after` pseudo-elements with staggered `animation-delay`, no JavaScript required to render or animate. Class names are simple and readable.

## Files

- `demo.html` — three example strength states (weak, medium, strong)
- `style.css` — all styles and animations
- `README.md` — this file

## Notes

Actually calculating password strength from user input requires JavaScript — this component provides the animated visual meter; your app's JS would swap the `strength-meter--*` modifier class as the user types.