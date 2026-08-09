# Typewriter Text Reveal

A pure-CSS typewriter effect: text reveals character-by-character with a blinking cursor, no JavaScript required.

## What it does
Uses `steps()` timing on an animated `width` property inside an `overflow: hidden` container, paired with a blinking `border-right` as the caret.

## How to use it
1. Add the `typewriter` class to any single-line text element.
2. Set an inline `--chars` custom property equal to the character count of your text (controls animation step count).
3. Optionally set a fixed `width` in `ch` units so the container doesn't reflow after the animation.

```html
<h1 class="typewriter" style="--chars: 20;">Build with EaseMotion</h1>