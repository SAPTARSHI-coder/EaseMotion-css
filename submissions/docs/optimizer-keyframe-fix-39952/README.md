# Optimizer keyframe fix proposal for issue #39952

## Summary

The build-time optimizer can remove `@keyframes` blocks that are still referenced by injected `em=""` animations. The optimized CSS keeps the animation rule, but the keyframe it depends on disappears, so the animation silently stops running.

## Root cause

The optimizer collects keyframes from `ease-*` utility classes, but it does not track the keyframes required by injected `em=""` rules. The generated animation rule still references `ease-kf-<name>`, while `pruneKeyframes()` removes the matching `@keyframes` block because it was never added to `usedKeyframes`.

## Proposed fix

Update the optimizer so that every parsed `em=""` animation also records its required keyframe inside `usedKeyframes` before pruning CSS. This preserves the existing optimization flow and only extends it to include the dependency that the injected rule already needs.

## Why the fix works

The injected rule and the keyframe are part of the same animation contract. Once the optimizer records the required keyframe name, `pruneKeyframes()` keeps the block instead of deleting it. The animation rule continues to ship with its matching keyframe, so the motion effect still runs after tree shaking.

## Files included

- `optimizer.js` — isolated proposal for the optimizer change
- `reproduction.js` — minimal reproduction of the broken and fixed behavior
- `demo.html` — visual explanation of the bug
- `style.css` — simple documentation styling

## Expected output before and after

### Before

```text
Broken behavior
  rule kept: true
  keyframe kept: false
```

### After

```text
Expected behavior
  rule kept: true
  keyframe kept: true
```
