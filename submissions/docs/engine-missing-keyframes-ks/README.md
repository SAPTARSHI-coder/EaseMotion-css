# Engine: Missing Keyframes Bug Report

## What does this do?

Identifies 6 motion engine animations (`spin`, `wobble`, `flip-x`, `flip-y`, `heartbeat`, `rubber-band`) that silently fail at runtime because their `@keyframes` are defined in `easemotion/engine/compiler.js`'s `KEYFRAME_MAP` but missing from `core/animations.css`.

The demo includes the missing keyframes inline so they work immediately, and the suggested `ease-*` utility classes that should accompany them when promoted to core.

## How is it used?

```html
<!-- These currently produce NO visible animation -->
<div em="spin 2s linear repeat-infinite">⚙️</div>
<div em="wobble 1s ease repeat-infinite">🔔</div>
<div em="flip-x 800ms ease">Flip</div>
<div em="flip-y 800ms ease">Flip</div>
<div em="heartbeat 1.5s ease repeat-infinite">❤️</div>
<div em="rubber-band 1s ease repeat-infinite">🏀</div>
```

After the fix, these would also work as plain CSS classes:

```html
<div class="ease-spin">⚙️</div>
<div class="ease-wobble">🔔</div>
<div class="ease-flip-x">Flip</div>
<div class="ease-flip-y">Flip</div>
<div class="ease-heartbeat">❤️</div>
<div class="ease-rubber-band">🏀</div>
```

## Why is it useful?

The engine's `ANIMATION_NAMES` set in `parser.js` and `KEYFRAME_MAP` in `compiler.js` accept 25 animation names. Only 19 actually work. The remaining 6 (24% of the API) produce no visible output — the user sees no animation, no error in the browser, only a `console.warn` in development builds.

This bug report documents the exact gap and the exact fix needed: add the 6 missing `@keyframes` and `ease-*` utility classes to `core/animations.css`.

**Files to update in core:**
- `core/animations.css` — add `@keyframes ease-kf-spin`, `-wobble`, `-flip-x`, `-flip-y`, `-heartbeat`, `-rubber-band` and matching `.ease-spin` through `.ease-rubber-band` utility classes
- `easemotion.min.css` — rebuild
