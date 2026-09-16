# Bug Fix — `pruneClasses` silently drops rules after nested CSS blocks

**Issue:** [#45911](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/45911)

---

## What does this fix?

The `pruneClasses` function in `easemotion/engine/optimizer.js` uses a regex with `[^{}]*` to match CSS rule bodies during tree-shaking. This pattern stops matching at the first `}` character it encounters, so it breaks when a `.ease-*` rule contains nested CSS blocks such as `&:hover { ... }`.

When that happens, the regex leaves its cursor at the inner `}` instead of the real closing brace of the rule. The next `.ease-*` rule in the stylesheet starts being parsed mid-block, fails to match, and is silently dropped from the pruned output — even when it is listed in `usedClasses`.

## How does it break?

Given this CSS:

```css
.ease-fade-in {
  animation: ease-kf-fade-in 0.3s ease-out;
  &:hover { animation-play-state: paused; }
}
.ease-fade-in-slow {
  animation: ease-kf-fade-in 0.6s ease-out;
}
```

And this call:

```js
const usedClasses = new Set(['ease-fade-in', 'ease-fade-in-slow']);
const result = pruneClasses(css, usedClasses);
```

The old code drops `.ease-fade-in-slow` from `result` with no warning. A build using `optimizeHtml` can silently ship missing animation classes.

## What is the fix?

Replace the `[^{}]*` regex with a character-level brace counter that walks forward through the CSS string and finds the true closing `}` of each rule (the one that brings the nesting depth back to zero). The full rule body — including any nested blocks — is captured correctly, and `selectorRe.lastIndex` is reset to the position immediately after the rule so the next rule is found accurately.

## Why is it useful?

EaseMotion CSS users who write modern nested CSS (using the native CSS nesting spec supported in all modern browsers) inside `.ease-*` utility classes will no longer silently lose rules when running the build-time optimizer. No error is thrown by the old code, making this a hard-to-debug production issue.
