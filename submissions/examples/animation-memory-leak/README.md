# animation-memory-leak

This is a standalone implementation of the fix for [Issue 9214](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/9214).

## The Bug
Continuous animations don't release GPU memory, leading to browser crashes.

## The Fix
This standalone example demonstrates how to implement safe infinite CSS animations. By strictly managing `will-change: transform`, `backface-visibility: hidden`, and hardware acceleration (`transform: translateZ(0)`), the browser delegates the layer to the GPU efficiently without creating excessive paint/compositor cycles that consume unchecked memory.

## Usage
Include `style.css` and use the classes in `demo.html`.

## Why it fits
It resolves a critical bug while respecting the core freeze structure.
