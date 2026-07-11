# Engine Fix — em-Generated Keyframe Pruning (#40060)

## What was broken

`optimizeHtml()` compiles CSS rules for `em="..."` attributes via
`compiler.js`, but never registered the keyframe those rules depend
on in `usedKeyframes` before `pruneKeyframes()` ran. The result:
optimized output could contain an `animation:` rule referencing a
`@keyframes` block that had already been stripped.

## Root cause

`usedKeyframes` was populated only from `usedClasses`, using a
`ease-*` → `ease-kf-*` string convention. `em=""` attributes compile
to hashed `_em_xxxxx` class names (see `className()` in
`compiler.js`), which never match that convention — so their
required keyframe silently fell through the cracks.

## The fix

- `compiler.js` now exports `KEYFRAME_MAP` (previously module-private),
  the same lookup table `compile()` already uses internally.
- `optimizer.js` imports it and, while processing each parsed `em`
  AST, adds `KEYFRAME_MAP[ast.animation]` to `usedKeyframes` —
  before `pruneKeyframes()` executes.

## How to verify

Open `demo.html` in a browser (served via a local dev server, since
it uses ES module imports) or run:

```bash
npm test -- tests/engine.test.js
```

New cases added to `tests/engine.test.js` cover: basic keyframe
retention, dedup across repeated `em` usage, continued pruning of
genuinely unused keyframes, unknown animation names, and combined
class + em keyframe usage.

## Related issue

Fixes #40060