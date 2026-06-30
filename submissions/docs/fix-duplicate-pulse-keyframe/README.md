# Fix: Duplicate `ease-kf-pulse` / `ease-kf-pulse-fade` Keyframes

## Issue

`ease-kf-pulse` (line 211) and `ease-kf-pulse-fade` (line 319) in `core/animations.css` are byte-for-byte identical — both pulse opacity from 1 → 0.45 → 1. This adds dead weight to the bundle and creates consumer confusion about which keyframe to use.

## Root Cause

The `ease-kf-pulse-fade` keyframe was added separately without recognizing it duplicates the existing `ease-kf-pulse`.

## Fix

Remove the duplicate `ease-kf-pulse-fade` keyframe and update `.ease-skeleton-pulse` to reference `ease-kf-pulse` instead, reducing bundle size and eliminating ambiguity.

## Files Changed

- `core/animations.css` — Remove `@keyframes ease-kf-pulse-fade`, update `.ease-skeleton-pulse` animation reference

## Demo

Open `demo.html` to see both skeleton-pulse and general pulse animations working correctly with the unified keyframe.
