# Footer Keyframe Namespace Collision Demo

This documentation demo reproduces the footer keyframe namespace collision described in **Issue #27881** and demonstrates the proposed solution using framework-prefixed keyframe names.

## Issue

The footer component currently defines generic global keyframe names:

```css
@keyframes float
@keyframes heartbeat
```

These keyframes are referenced by the footer animations:

```css
animation: float 20s ease-in-out infinite;
animation: heartbeat 1.5s ease-in-out infinite;
```

Because CSS keyframes exist in the global animation namespace, generic names such as `float` and `heartbeat` can collide with animations defined by applications or third-party libraries.

## Proposed Fix

Rename the footer keyframes to follow the existing EaseMotion CSS naming convention.

### Before

```css
@keyframes float
@keyframes heartbeat
```

### After

```css
@keyframes ease-kf-footer-float
@keyframes ease-kf-footer-heartbeat
```

Update the corresponding animation declarations:

```css
animation: ease-kf-footer-float 20s ease-in-out infinite;
animation: ease-kf-footer-heartbeat 1.5s ease-in-out infinite;
```

## Demo Files

```text
README.md
demo.html
style.css
```

* **demo.html** demonstrates the namespace collision and the proposed prefixed keyframe solution.
* **style.css** contains both the current implementation (generic keyframe names) and the proposed implementation (prefixed keyframe names) for comparison.

## Expected Result

After adopting the proposed keyframe names:

* Footer animations retain their existing visual behavior.
* Generic keyframe namespace collisions are eliminated.
* Footer animations are isolated from application and third-party CSS.
* The implementation follows the framework's existing `ease-kf-*` naming convention for improved consistency.
