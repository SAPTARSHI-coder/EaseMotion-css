# Engine Safe Warn

## What does this do?

Demonstrates that the motion engine's development-only warning throws a
`ReferenceError` in the browser, and shows the `typeof` guard that fixes it.

## How is it used?

The demo is standalone — open `demo.html` in any browser and press the two
buttons. The pattern it documents is a one-line change at the warning site:

```js
const isDev =
  typeof process !== 'undefined' && process.env
    ? process.env.NODE_ENV !== 'production'
    : true;

if (isDev) {
  console.warn('[EaseMotion Engine] Could not parse em="' + value + '".');
}
```

## Why is it useful?

`easemotion/engine/runtime.js` guards its warning with
`process?.env?.NODE_ENV !== 'production'`. Optional chaining only short-circuits
on `null` and `undefined` **values** — it does not rescue an identifier that was
never declared. In a browser bundle without a `process` shim, that expression
throws `ReferenceError: process is not defined`.

The throw happens inside `processElement()`, which runs from the
`MutationObserver` callback. So a single mistyped `em=""` attribute takes down
engine processing for every element queued in that batch — the failure is silent
and total rather than a console warning.

EaseMotion promises graceful degradation ("if JS is disabled, `em=""` attributes
are simply ignored"). A malformed attribute should degrade the same way. This
showcase keeps that promise verifiable in a browser rather than only in Node,
where a global `process` masks the bug entirely.
