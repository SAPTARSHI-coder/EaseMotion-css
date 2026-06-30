# Footer Keyframe Namespace Collision Demo

This demo reproduces the footer keyframe namespace collision described in **Issue #27881**.

## Issue

The footer component currently uses generic global keyframe names:

```css
@keyframes float
@keyframes heartbeat
```

These keyframes are referenced by the footer animations:

```css
animation: float 20s ease-in-out infinite;
animation: heartbeat 1.5s ease-in-out infinite;
```

Because CSS keyframes are global, these generic names can conflict with animations defined by an application or third-party library.

## Proposed Fix

Rename the footer keyframes using framework-prefixed names.

**Before**

```css
@keyframes float
@keyframes heartbeat
```

**After**

```css
@keyframes ease-kf-footer-float
@keyframes ease-kf-footer-heartbeat
```

Update the animation declarations accordingly:

```css
animation: ease-kf-footer-float 20s ease-in-out infinite;
animation: ease-kf-footer-heartbeat 1.5s ease-in-out infinite;
```

## Demo Files

```
README.md
demo.html
style.css
```

* **demo.html** demonstrates the keyframe namespace collision and the proposed fix.
* **style.css** includes both the current implementation (generic keyframes) and the proposed implementation (prefixed keyframes) for comparison.

## Expected Result

After introducing prefixed footer keyframes:

* Footer animations behave exactly as before.
* Generic keyframe namespace collisions are avoided.
* Footer animations are isolated from application and third-party CSS.
* The framework follows the existing `ease-kf-*` naming convention without changing visual behavior.
