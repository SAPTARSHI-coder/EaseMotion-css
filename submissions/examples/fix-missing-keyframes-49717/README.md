# Fix: Missing Keyframes for Motion Engine KEYFRAME_MAP

**Fixes #49717**

## What This Fixes

In `easemotion/engine/compiler.js`, the `KEYFRAME_MAP` references several animation names that the parser recognizes and generates CSS classes for. However, the corresponding `@keyframes` declarations were **completely missing** from `core/animations.css`, causing all of them to fail silently.

Additionally, the `float` keyframe was misnamed (`ease-float` instead of `ease-kf-float`), breaking the standard naming convention used by the engine.

## Affected Animations

| Animation Token | CSS Keyframe Expected | Status Before Fix |
|---|---|---|
| `spin` | `ease-kf-spin` | ❌ Missing |
| `wobble` | `ease-kf-wobble` | ❌ Missing |
| `flip-x` | `ease-kf-flip-x` | ❌ Missing |
| `flip-y` | `ease-kf-flip-y` | ❌ Missing |
| `heartbeat` | `ease-kf-heartbeat` | ❌ Missing |
| `rubber-band` | `ease-kf-rubber-band` | ❌ Missing |
| `float` | `ease-kf-float` | ⚠️ Misnamed (`ease-float`) |

## How to Use (After Fix is Merged)

```html
<!-- Spin — continuous rotation -->
<div em="spin 500ms repeat-infinite">🔄</div>

<!-- Wobble — attention-grabbing shake -->
<div em="wobble 800ms">⚠️</div>

<!-- Flip from X axis -->
<div em="flip-x 400ms">Card</div>

<!-- Flip from Y axis -->
<div em="flip-y 400ms">Card</div>

<!-- Heartbeat — pulsing scale -->
<div em="heartbeat 1.3s repeat-infinite">❤️</div>

<!-- Rubber band — elastic pop effect -->
<div em="rubber-band 600ms">🎯</div>
```

## Why It Fits EaseMotion CSS

These animations are already part of the engine's vocabulary — the parser knows about them, the compiler maps them. This fix simply adds the missing CSS that the engine already expects, making the library consistent and preventing confusing silent failures.

## Files in This Submission

- `style.css` — The proposed `@keyframes` definitions to be merged into `core/animations.css`
- `demo.html` — Live demo showcasing all 7 animations
- `README.md` — This file
