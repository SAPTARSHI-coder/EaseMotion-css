# rotation-variants

## What it does
Adds three new rotation animation utilities to complement the existing
clockwise `.ease-rotate` class: anti-clockwise (full 360°), half-right
(180° clockwise), and half-left (180° counter-clockwise).

## Proposed ease-* class names
- `.ease-rotate-anti-clockwise` — full 360° counter-clockwise rotation
- `.ease-rotate-half-right` — 180° clockwise rotation
- `.ease-rotate-half-left` — 180° counter-clockwise rotation

## Usage
```html
<div class="ease-rotate-anti-clockwise">↺</div>
<div class="ease-rotate-half-right">⟳</div>
<div class="ease-rotate-half-left">⟲</div>
```

## Why this fits EaseMotion CSS
Rotation is one of the most common animation patterns in modern UIs —
loaders, toggle icons, expandable arrows, refresh buttons. Currently only
clockwise rotation exists. These three variants round out the rotation
set without requiring developers to write custom keyframes, keeping with
EaseMotion's animation-first, zero-JS philosophy.

## Closes
Issue #15640