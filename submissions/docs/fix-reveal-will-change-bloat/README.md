# Fix: Permanent `will-change` Causes GPU Memory Bloat

## Issue

In `core/animations.css` (lines 1221–1233), `.ease-reveal` unconditionally sets `will-change: transform, opacity` on every reveal element in the page. Pages with many reveal elements (common in marketing sites) will pre-allocate GPU compositor layers for every single one upon page load, even when most are off-screen. This leads to massive GPU memory bloat and can actually degrade scrolling performance.

## Root Cause

The `will-change` property is used as a permanent state rather than a temporary hint just before an animation occurs.

## Fix

Remove `will-change` from the base `.ease-reveal` class. Instead, add a new `.ease-reveal-pending` class that `reveal.js` can apply just before triggering the animation, which sets `will-change: transform, opacity`. The state is correctly reset to `will-change: auto` when `.ease-reveal-active` is applied.

## Files Changed

- `core/animations.css` — Remove `will-change` from base, add `.ease-reveal-pending`.

## Demo

Open `demo.html` to see reveal animations working smoothly without permanently holding GPU compositor layers.
