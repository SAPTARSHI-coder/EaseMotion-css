# Fix: Missing `ease-kf-hover-pulse-glow` Keyframe

## Issue

The `.ease-hover-pulse-glow:hover` class in `core/animations.css` (line 1379) references the keyframe `ease-kf-hover-pulse-glow`, but this `@keyframes` block was never defined anywhere in the codebase. The animation silently fails — the hover effect does nothing.

## Root Cause

Issue #10072 added the utility class but omitted the corresponding `@keyframes` definition.

## Fix

This patch defines the missing `@keyframes ease-kf-hover-pulse-glow` keyframe that combines a scale pulse with a filter glow effect, completing the intended hover animation.

## Files Changed

- `core/animations.css` — Add missing `@keyframes ease-kf-hover-pulse-glow` block

## Demo

Open `demo.html` to see the pulse-glow hover effect working correctly with the defined keyframe.
