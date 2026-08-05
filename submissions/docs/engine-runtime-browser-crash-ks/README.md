# Bug: Engine Runtime Crashes in Browser with process ReferenceError

## What does this do?

Identifies that `easemotion/engine/runtime.js` line 55 references the bare identifier `process` which does not exist in browser ESM contexts, causing a `ReferenceError` crash when the engine detects an unknown animation name in the `em=""` DSL attribute.

## How is it used?

When a user writes invalid `em="fly-away"` in their HTML:
```html
<div em="fly-away 500ms">This will crash</div>
```

The runtime tries to warn:
```javascript
// runtime.js:55 — CRASHES in browser
if (process?.env?.NODE_ENV !== 'production') {
  console.warn(`[EaseMotion Engine] Could not parse em="fly-away". Unknown animation name.`);
}
```

But `process` is not defined in browsers. Optional chaining (`?.`) only protects against `undefined` properties, not against undefined identifiers. The engine stops executing when it encounters this code path.

## Root Cause

`process` is a Node.js global. In browser ESM contexts (no Webpack/Vite bundler inlining), `process` is undefined. While bundlers like Vite replace `process.env.NODE_ENV` at build time, the engine runtime is designed to work standalone in browser `<script type="module">` imports — where no such replacement occurs.

The `compiler.js` line 92 has the same issue with `console.warn` but without the guard:
```javascript
console.warn(`[EaseMotion Engine] Unknown animation: "${ast.animation}". ...`);
// This is fine — console.warn runs unconditionally
```

## Fix

Replace the guarded check with a safe pattern:

```diff
-    if (process?.env?.NODE_ENV !== 'production') {
-      console.warn(`[EaseMotion Engine] Could not parse em="${value}". Unknown animation name.`);
-    }
+    console.warn(`[EaseMotion Engine] Could not parse em="${value}". Unknown animation name.`);
```

Or if the guard is desired for production builds:

```javascript
const isDev = typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production';
if (isDev) {
  console.warn(...)
}
```

## Why is it useful?

- Prevents browser crashes when users mistype animation names in the `em=""` attribute
- The engine is designed as a zero-dependency browser runtime — it must not rely on Node.js globals
- The `compiler.js` already logs unconditionally (no guard), confirming the guard is unnecessary

## Files to update in core:

- `easemotion/engine/runtime.js` line 55 — fix or remove the `process`-dependent guard
