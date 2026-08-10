# Crossing Gate Lower Component

A classic railroad crossing gate that lowers with flashing lights – all built with CSS only.

## Features
- No JavaScript required – pure CSS animation
- `prefers-reduced-motion` disables the gate movement and light flashing for accessibility
- Easily reusable – drop the markup anywhere
- Subtle shadows give depth and a tactile feel

## Usage
```html
<link rel="stylesheet" href="style.css" />
<div class="gate-container">
  <div class="gate"><div class="gate-arm"></div></div>
  <div class="lights"><div class="light red"></div><div class="light red"></div></div>
</div>
```

## Customisation
- Change `animation: lower-gate` duration to speed up/slow down the gate.
- Adjust the light colour in `.light.red` for different signal schemes.
