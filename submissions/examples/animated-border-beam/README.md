# Animated Border Beam

## What does this do?
A glowing light beam continuously sweeps around the border of a card using
a `conic-gradient` on a `::before` pseudo-element animated with `@keyframes`.
Zero JavaScript.

## How is it used?
Add the class to any card element:

```html
<div class="beam-card">
  Your content here
</div>
```

Variants:
- Colour: `beam-card-blue`, `beam-card-green`
- Speed: `beam-slow`, `beam-fast`

## Why is it useful?
Border beams are widely used for featured cards, active states, and 
scanning/loading indicators. No existing submission covers this pattern.
Relies on the `@property` CSS Houdini API for smooth angle interpolation
(supported in all modern browsers).

## Tech Stack
- HTML
- CSS only (`@keyframes`, `conic-gradient`, `@property`)

## Preview
Open `demo.html` directly in your browser.