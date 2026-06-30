# ease-bounce-in

> Bouncy entrance animation utility for EaseMotion CSS

## What it does

Animates elements into view with a satisfying bounce effect.
Five direction variants, two speed variants, and full compatibility
with existing ease-delay-\* classes. Pure CSS, zero JavaScript.

## Usage

    <div class="ease-bounce-in">Bounces in from center</div>
    <div class="ease-bounce-in-up">Bounces in from bottom</div>
    <div class="ease-bounce-in-down">Bounces in from top</div>
    <div class="ease-bounce-in-left">Bounces in from left</div>
    <div class="ease-bounce-in-right">Bounces in from right</div>

## Class Reference

| Class                | Description                           |
| -------------------- | ------------------------------------- |
| ease-bounce-in       | Base — bounces in from center (scale) |
| ease-bounce-in-up    | Bounces in from bottom                |
| ease-bounce-in-down  | Bounces in from top                   |
| ease-bounce-in-left  | Bounces in from left                  |
| ease-bounce-in-right | Bounces in from right                 |
| ease-bounce-in-fast  | Faster entrance speed                 |
| ease-bounce-in-slow  | Slower entrance speed                 |

## Staggered sequence

    <div class="ease-bounce-in-up">1</div>
    <div class="ease-bounce-in-up ease-delay-100">2</div>
    <div class="ease-bounce-in-up ease-delay-200">3</div>
    <div class="ease-bounce-in-up ease-delay-300">4</div>

## CSS Variables used

| Token               | Role                       |
| ------------------- | -------------------------- |
| --ease-speed-slow   | Default animation duration |
| --ease-speed-medium | Fast variant duration      |

## Browser support

| Feature               | Chrome | Edge | Firefox | Safari |
| --------------------- | ------ | ---- | ------- | ------ |
| CSS transform         | yes    | yes  | yes     | yes    |
| CSS custom properties | yes    | yes  | yes     | yes    |
| animation-fill-mode   | yes    | yes  | yes     | yes    |

Submitted under MIT License · EaseMotion CSS · Closes #3877 · 2026
