# Engine Bug Report + Fix Proposal — em Keyframe Pruning

## What this is

A standalone, browser-openable demo documenting a bug in the motion
engine's `optimizeHtml()` tree-shaker, and the proposed fix.

This folder is submitted under `submissions/docs/` per repo
convention. It does **not** modify any engine files directly — the
actual code fix (2-file diff in `easemotion/engine/compiler.js` and
`easemotion/engine/optimizer.js`, plus 5 new tests in
`tests/engine.test.js`) is available on branch
`fix/40060-em-keyframe-pruning` and was submitted as PR #41341.

That PR was auto-closed by the repository's submission guard, which
currently treats all `easemotion/engine/` changes as disallowed
core-file edits — even though `CONTRIBUTING.md`'s "Contributing to
the Motion Engine" section describes `easemotion/engine/` as an
active, maintainer-approved contribution track. This doc submission
exists so the bug and fix are documented and reviewable within the
current guard rules, while that process question gets resolved.

## The bug

`optimizeHtml()` compiles CSS rules for `em="..."` attributes but
never registers the keyframe those rules depend on in
`usedKeyframes` before the optimizer's pruning step runs — so a
generated rule can end up referencing a `@keyframes` block that's
already been stripped from the output.

**Repro (from the original issue):**
```js
const result = await optimizeHtml('<div em="fade-in"></div>', css);
// result.css contains the animation rule referencing ease-kf-fade-in,
// but NOT the @keyframes ease-kf-fade-in block itself.
```

## Why it happens

`usedKeyframes` is built only from `ease-*` utility classes via a
naive `ease-*` → `ease-kf-*` string replace. `em=""` attributes
compile to hashed `_em_xxxxx` class names, which never match that
pattern, so their required keyframe silently falls through.

## The fix (see PR #41341 / branch `fix/40060-em-keyframe-pruning`)

- Export the compiler's existing `KEYFRAME_MAP` lookup table.
- In the optimizer's `em` processing loop, register
  `KEYFRAME_MAP[ast.animation]` into `usedKeyframes` before pruning
  runs.

## How to view this demo

Open `demo.html` directly in any browser — no server, no build step.
It inlines a minimal, faithful reproduction of the real
`pruneKeyframes()` logic (not the full engine, to keep the demo
import-free and file:// safe) and shows the buggy output next to the
fixed output side by side.

## Related

- Issue: #40060
- Fix PR (contains the real engine diff): #41341