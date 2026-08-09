# Touch Target mixin

> Issue: [#63806](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63806)

Enforces a minimum hit area without changing how large the control looks.

## Mixins

### `touch-target($min)`

```scss
.icon-btn { @include touch-target(44px); }
```

Expands the hit area via a centred pseudo-element. The visible box is unchanged, so nothing in the layout moves.

### `touch-target-inset($min)`

Grows the control itself instead — for cases where an overhanging pseudo-element would escape a container edge.

### `touch-target-row($gap)`

Enforces spacing between adjacent targets.

### `touch-target-pointer-only($min)`

Applies the expansion only under `pointer: coarse`.

### `touch-target-debug($color)`

Renders hit areas visibly.

## Thresholds

| Standard | Size |
|---|---|
| WCAG 2.5.8 (AA) | 24 × 24 px |
| WCAG 2.5.5 (AAA), iOS HIG, Material | 44 × 44 px |

## Why it fits EaseMotion

**The obvious fix gets reverted.** Padding a 20px close icon out to 44px changes the visual design, a designer objects, and the padding comes back off — so the accessibility problem returns. Expanding a pseudo-element outward from the centre satisfies the requirement while leaving the visible box exactly as designed, which is what makes the fix survive review.

**Size alone is not the whole requirement.** Two 44px targets that touch still fail in practice, because a mis-tap lands on the *neighbour* rather than missing harmlessly — which is worse than nothing happening. `touch-target-row` enforces the gap, and it matters more than the size on dense toolbars.

**`touch-target-pointer-only` exists because the expansion has a cost.** On a mouse-driven desktop a 44px floor is unnecessary, and an invisible pseudo-element extending past the visible control can intercept clicks intended for adjacent content — turning an accessibility fix into a usability bug. Gating on `pointer: coarse` applies it only where it is needed.

**`touch-target-debug` is part of the tool, not a convenience.** Hit-area problems are invisible by definition: you cannot *see* that a target is too small, only that a tap "did not work" and the user blames themselves. Being able to render the areas is how the problem gets found at all.

The pseudo-element uses `min-width`/`min-height` alongside `width: 100%`, so a control already larger than the floor keeps its own hit area rather than being shrunk to exactly `$min`.
