# ease-counter

> Pure CSS animated number count-up utility for EaseMotion CSS

## What it does

Animates any number from 0 to a target value using CSS @property
and counter-reset. No JavaScript. No libraries. Zero dependencies.

## Usage

    <span class="ease-counter" style="--ease-counter-to: 2500;"></span>

Set --ease-counter-to to your target number.
Optionally add a suffix like + or % directly in HTML next to the span.

## Class Reference

| Class             | Description                               |
| ----------------- | ----------------------------------------- |
| ease-counter      | Base class, animates to --ease-counter-to |
| ease-counter-fast | Faster count speed                        |
| ease-counter-slow | Slower count speed                        |

## Staggered stats section

    <span class="ease-counter" style="--ease-counter-to: 10000;"></span>+
    <span class="ease-counter ease-delay-200" style="--ease-counter-to: 99;"></span>%
    <span class="ease-counter ease-delay-400" style="--ease-counter-to: 500;"></span>k

## How it works

CSS @property registers --ease-count as a typed integer property.
This allows CSS to animate it like a number.
counter-reset and ::after content: counter() then display the value.
The result is a smooth count-up with zero JavaScript.

## CSS Variables used

| Token               | Role                                             |
| ------------------- | ------------------------------------------------ |
| --ease-counter-to   | Target number to count up to                     |
| --ease-speed-slow   | Default animation duration                       |
| --ease-speed-medium | Fast variant duration                            |
| --ease-count        | Internal animated property (do not set manually) |

## Browser support

| Feature       | Chrome | Edge | Firefox     | Safari       |
| ------------- | ------ | ---- | ----------- | ------------ |
| CSS @property | yes    | yes  | yes (v128+) | yes (v17.2+) |
| counter-reset | yes    | yes  | yes         | yes          |

Submitted under MIT License · EaseMotion CSS · Closes #8537 · 2026
