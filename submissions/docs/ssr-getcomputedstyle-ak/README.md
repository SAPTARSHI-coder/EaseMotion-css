# SSR-Safe getComputedStyle Guard — validateEaseMotionLoad

## What does this do?
Documents and verifies the SSR-safety guard in `validateEaseMotionLoad()` (`utils/validate-load.js`), which prevents the dev-mode CSS load validator from crashing during server-side rendering (Next.js, Nuxt.js) when `window`/`getComputedStyle`/`document` are unavailable.

## How is it used?
```js
import { validateEaseMotionLoad } from "./utils/validate-load.js";

// Safe to call unconditionally, even during SSR render.
// Returns silently on the server; runs the real check in the browser.
validateEaseMotionLoad();
```

The included `demo.html` simulates both environments (client vs. a mocked SSR-like context with `window` undefined) side-by-side, showing the guard short-circuits cleanly without throwing.

## Why is it useful?
Issue #66080 reported that this utility crashes SSR pipelines. Investigation showed the existing guard (`typeof window === "undefined" || typeof getComputedStyle === "undefined"`) already prevents the crash — it's been in place since the file was introduced. This submission:
1. Adds a visual/interactive demo proving the SSR-safe behavior for reviewers and future contributors.
2. Proposes tightening the guard to also check `typeof document === "undefined"`, for partial-global edge environments (some SSR/edge runtimes stub `window` but not `document`, or vice versa) — closing a theoretical gap the original guard doesn't cover.

Closes/relates to #66080.