# ease-rotate-in

> Rotation entrance animation utility for EaseMotion CSS

## What it does

Animates elements into view with a smooth rotation effect.
Four direction variants, two speed variants, and full compatibility
with existing ease-delay-* classes. Pure CSS, zero JavaScript.

## Usage

    <div class="ease-rotate-in">Rotates in from left</div>
    <div class="ease-rotate-in-right">Rotates in from right</div>
    <div class="ease-rotate-in-down">Rotates in from top</div>
    <div class="ease-rotate-in-up">Rotates in from bottom</div>

## Class Reference

| Class | Description |
|---|---|
| ease-rotate-in | Base — rotates in counter-clockwise |
| ease-rotate-in-right | Rotates in clockwise |
| ease-rotate-in-down | Flips in from top (rotateX) |
| ease-rotate-in-up | Flips in from bottom (rotateX) |
| ease-rotate-in-fast | Faster entrance speed |
| ease-rotate-in-slow | Slower entrance speed |

## Staggered sequence

    <div class="ease-rotate-in">1</div>
    <div class="ease-rotate-in ease-delay-100">2</div>
    <div class="ease-rotate-in ease-delay-200">3</div>
    <div class="ease-rotate-in ease-delay-300">4</div>

## CSS Variables used

| Token | Role |
|---|---|
| --ease-speed-slow | Default animation duration |
| --ease-speed-medium | Fast variant duration |
| --ease-ease-out | Easing curve |

## Browser support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| CSS transform rotate | yes | yes | yes | yes |
| CSS custom properties | yes | yes | yes | yes |
| animation-fill-mode | yes | yes | yes | yes |

Submitted under MIT License · EaseMotion CSS · Closes #3873 · 2026
