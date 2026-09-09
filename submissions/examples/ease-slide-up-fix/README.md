# ease-slide-up Fix — Issue #7960

Fixes text clipping inside flex containers on mobile viewports (≤ 480 px) during the `.ease-slide-up` animation.

## Root Cause

When `.ease-slide-up` is applied to a child of a `display: flex` container that has `overflow: hidden`, the browser clips the animated element's bounding box **before** the `translateY` transform has fully settled. During the final 20 % of the keyframe timeline the element is still slightly below its rest position, so the parent's overflow boundary trims roughly 10 px off the text baseline.

This is a known browser compositing quirk in Chrome and Safari: `overflow: hidden` on a flex ancestor creates a stacking context that clips children that haven't been promoted to their own GPU layer.

## Fix

Three complementary changes in `style.css`:

| Change | Why |
|---|---|
| `will-change: transform, opacity` on `.ease-slide-up` | Promotes the element to its own compositing layer, so the parent's `overflow:hidden` boundary no longer affects it mid-animation |
| `overflow: visible` on `.ease-slide-up` itself | Prevents Safari's inline `overflow` stacking context from clipping descending text caused by tight line-height metrics |
| `padding-bottom: 0.15em` + `margin-bottom: -0.15em` | Adds baseline breathing room without shifting layout, ensuring the glyph descenders are always inside the visible area |
| Reduced `translateY` 24 px → 14 px at ≤ 480 px | Shorter travel = less time the element spends near the clip boundary on narrow screens |

The `:has()` selector rule ensures flex/grid parents that are **direct** parents of `.ease-slide-up` elements also get `overflow: visible`, as a belt-and-suspenders guard.

## Files

```
ease-slide-up-fix/
├── style.css   ← the fix
├── demo.html   ← reproduction + fix demonstration (3 scenarios)
└── README.md
```

## Testing

1. Open `demo.html` in Chrome 123+ or Safari 17.2+
2. Set DevTools to iPhone 15 (375 px width)
3. Click **↺ Replay** on each scenario
4. Confirm the full text, including the bottom baseline, remains visible throughout the animation

## Related

- Fixes: Issue #7960
- Browsers affected: Chrome 123, Safari 17.2
- Devices: iPhone 15 Simulator, Desktop Responsive Mode