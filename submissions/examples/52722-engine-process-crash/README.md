# Engine Runtime Crash Fix (#52722)

Demonstrates the one-line fix for the Motion Engine crash where `ReferenceError: process is not defined` occurs when parsing invalid `em=""` attributes in browser environments.

## The Bug

The EaseMotion JavaScript runtime crashes in native browser environments when it encounters an invalid or unsupported `em=""` animation value. The runtime references the Node.js `process` global, which is undefined in browsers.

```
ReferenceError: process is not defined
```

## The Fix

One-line change in `easemotion/engine/runtime.js` (line 55):

```diff
- if (process?.env?.NODE_ENV !== 'production') {
+ if (typeof process === 'undefined' || process.env?.NODE_ENV !== 'production') {
```

The `typeof` operator is safe even when `process` is undeclared — unlike direct access which throws `ReferenceError`.

## How It Works

- `typeof process === 'undefined'` returns `true` in browsers (safe, no crash)
- When `process` is available (Node.js), it falls through to `process.env?.NODE_ENV`
- Invalid animation names still trigger a development warning — no behavior change

## Files

```text
submissions/examples/52722-engine-process-crash/
├── demo.html
├── style.css
└── README.md
```

## Usage

1. Open `demo.html` in a browser.
2. Click **Parse Animation** to simulate handling an invalid animation token.
3. Observe the graceful warning instead of a crash.

## Browser Support

All modern browsers.
