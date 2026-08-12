# Deferred validateEaseMotionLoad via requestIdleCallback

## What does this do?
Demonstrates a deferred version of `validateEaseMotionLoad()` that uses `requestIdleCallback` (with a `setTimeout` fallback) so the dev-mode load-order check no longer runs synchronously during initial script execution, avoiding main-thread contention around First Contentful Paint (FCP).

## How is it used?
```js
function validateEaseMotionLoadDeferred() {
  const runCheck = () => {
    if (typeof window === "undefined" || typeof getComputedStyle === "undefined") {
      return;
    }
    const sentinelValue = getComputedStyle(document.documentElement)
      .getPropertyValue("--ease-version")
      .trim();
    if (!sentinelValue) {
      console.warn(
        "[EaseMotion] core/variables.css does not appear to be loaded, or " +
        "loaded after other EaseMotion files. All var(--ease-*) properties " +
        "will silently resolve to initial values. Check your <link> order — " +
        "variables.css must load first."
      );
    }
  };

  if (typeof window === "undefined") return;

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(runCheck, { timeout: 2000 });
  } else {
    setTimeout(runCheck, 0);
  }
}
```

The included `demo.html` visualizes the difference: a simulated "synchronous" run blocks a spinning indicator, while the `requestIdleCallback`-deferred run lets the indicator keep spinning until the browser is idle, then logs the check result.

## Why is it useful?
Issue #66081 reports that `validateEaseMotionLoad()` parses the DOM (`getComputedStyle`) synchronously during initial script execution, which can block the main thread right when the browser is trying to paint FCP. The proposed fix:
1. Wraps the check in `requestIdleCallback`, so it only runs once the browser has spare idle time.
2. Falls back to `setTimeout(fn, 0)` for browsers without `requestIdleCallback` support (e.g. Safari, at time of writing).
3. Preserves the existing SSR guard (`typeof window === "undefined"`) so it stays safe on the server too.

This satisfies both acceptance criteria: the check is deferred via `requestIdleCallback`/`setTimeout` fallback, and warning logs only appear once the main thread is idle, not blocking FCP.

Relates to #66081.