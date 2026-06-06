# ease-typewriter

> Pure CSS typewriter animation for EaseMotion CSS

## What it does

Reveals text character-by-character with a blinking cursor using only CSS.
No JavaScript. No libraries. Zero dependencies.

## Usage

    <span class="ease-typewriter" style="--ease-typewriter-steps: 13;">
      Hello, World!
    </span>

Set --ease-typewriter-steps to the character count of your text.

## Class Reference

| Class | Description |
|---|---|
| ease-typewriter | Base class, default speed, blinking pipe cursor |
| ease-typewriter-fast | Faster typing speed |
| ease-typewriter-slow | Slower typing speed |
| ease-typewriter-no-cursor | No cursor shown |
| ease-typewriter-underscore | Underscore cursor instead of pipe |

## Staggered sequence

    <span class="ease-typewriter">Line one.</span>
    <span class="ease-typewriter ease-delay-200">Line two.</span>
    <span class="ease-typewriter ease-delay-400">Line three.</span>

## CSS Variables used

| Token | Role |
|---|---|
| --ease-color-primary | Cursor color |
| --ease-speed-slow | Default typing duration |
| --ease-speed-medium | Fast variant duration |
| --ease-typewriter-steps | Character count, set per element |

## Browser support

Full cross-browser support. No experimental APIs used.

Submitted under MIT License · EaseMotion CSS · 2026
