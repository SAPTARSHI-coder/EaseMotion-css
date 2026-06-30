# Button color-mix() @supports Fallback

Demonstrates how `color-mix()` in button styles breaks in older browsers without a proper `@supports` fallback.

**Issue:** [#5754 — Button color-mix without @supports fallback](https://github.com/anomalyco/easemotion/issues/5754)

---

## What does this show?

The `color-mix()` CSS function is not supported in older browsers (e.g. Safari < 16.2). When button hover or active states use `color-mix(in srgb, var(--ease-btn-bg), black 20%)` without a `@supports` wrapper, the button becomes completely unusable in those browsers.

### Before vs After

| Approach                  | Old Browser                      | Modern Browser  |
| ------------------------- | -------------------------------- | --------------- |
| Unwrapped `color-mix()`   | Broken — button color disappears | Works correctly |
| With `@supports` fallback | Graceful fallback to solid color | Works correctly |

---

## Files

| File        | Purpose                                            |
| ----------- | -------------------------------------------------- |
| `demo.html` | Shows broken button vs fixed button with @supports |
| `style.css` | Demo button styles with and without fallback       |
| `README.md` | This file                                          |
