# Fix: Nested Components Using Independent transform Utilities Cancel Parent Animations

Relates to bug report **#40955**.

## 1. What does this do?

This demo documents and fixes the bug where nested EaseMotion components using
independent `transform`-based animation utilities visually cancel each other.

When a parent element uses a `transform: translateY()` animation (e.g. `ease-float`)
and a child element uses a `transform: scale()` animation (e.g. `ease-zoom-in`),
the child's `transform` property **completely replaces** the parent's on the child's
stacking context — causing the parent animation to appear cancelled or jittery.

## 2. How is it used?

The fix is to migrate animation keyframes from the `transform` shorthand to
individual CSS transform properties:

| Instead of | Use |
|---|---|
| `transform: translateX(px)` / `translateY(px)` | `translate: x y` |
| `transform: scale(n)` | `scale: n` |
| `transform: rotate(deg)` | `rotate: deg` |

These individual properties are independent of each other and compose correctly
across parent/child boundaries without conflict.

**Example fix:**
```css
/* ❌ Buggy — child's transform overrides parent's */
@keyframes float    { 50% { transform: translateY(-10px); } }
@keyframes scale-up { 50% { transform: scale(1.1); } }

/* ✅ Fixed — composes naturally */
@keyframes float    { 50% { translate: 0 -10px; } }
@keyframes scale-up { 50% { scale: 1.1; } }
```

## 3. Why is it useful?

This is a very common real-world pain point for developers using multiple
EaseMotion utilities on nested elements (e.g. a floating card with a pulsing
badge inside it). Understanding this root cause and the modern CSS fix prevents
hours of debugging. The individual `translate`, `scale`, and `rotate` properties
have excellent browser support (Chrome 104+, Firefox 72+, Safari 14.1+) and
should be the preferred approach in all EaseMotion keyframe definitions going forward.
