# Zoom-Out Keyframe Name Fix

## What does this do?

Demonstrates the corrected naming for the zoom-out animation keyframe so the animation class can properly bind to it.

## How is it used?

Click or tap the demo card to trigger the zoom-out animation on the icon. The keyframe is named with the standard `-kf-` infix (`kf-zoom-out-demo`) so the animation resolves correctly.

## Why is it useful?

In `core/animations.css`, the `.ease-zoom-out` class references keyframe `ease-kf-zoom-out` (line 679), but the keyframe was defined as `ease-zoom-out` (line 650) — missing the `-kf-` infix. Every other keyframe in the file follows the `ease-kf-` convention. This naming mismatch silently breaks the animation: elements with `class="ease-zoom-out"` never animate because no keyframe named `ease-kf-zoom-out` exists in that file.

This submission demonstrates the correct pattern. The same fix should be applied to `core/animations.css`: rename `@keyframes ease-zoom-out` to `@keyframes ease-kf-zoom-out`.
