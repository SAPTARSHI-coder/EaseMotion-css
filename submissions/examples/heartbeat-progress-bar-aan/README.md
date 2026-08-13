# Ease Heartbeat Progress Bar

## What does this do?
A progress bar with a pulsing, neon "heartbeat" glow effect on the filled portion, built with pure CSS and no JavaScript.

## How is it used?
```html
<div class="ease-heartbeat-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" aria-label="Upload progress">
  <div class="ease-heartbeat-bar-fill" style="width: 60%;"></div>
</div>
```
Set the fill percentage via the inline `width` style (or a CSS variable, if the maintainer prefers when integrating). The `role="progressbar"` and `aria-value*` attributes should always be kept in sync with the fill width for screen reader support.

## Why is it useful?
Progress bars are one of the most commonly needed UI elements, and this variant gives contributors a polished, reusable "heartbeat" animation block that fits EaseMotion CSS's neon, motion-first design language. It's pure CSS (no JS dependency), responsive at small viewport widths, and respects `prefers-reduced-motion` so the pulsing animation is disabled for users who need reduced motion — keeping it accessible by default.
