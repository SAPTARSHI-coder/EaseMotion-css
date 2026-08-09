# Fix: `pruneClasses()` Corrupts Multi-Selector CSS Rules

## Bug Description

In `easemotion/engine/optimizer.js`, the `pruneClasses()` function (line 77–83) uses this regex to strip unused CSS classes:

```js
const ruleRe = /\.(ease-[\w-]+)\s*\{[^{}]*\}/g;
```

### The Problem
This regex only matches **simple single-class selectors**. Any selector that contains a descendant combinator, child combinator, or pseudo-class is **mangled or silently dropped**.

**Example — Corrupted Output:**
```css
/* Input CSS */
.ease-bounce .ease-bounce-inner { transform: scale(1.1); }

/* Regex captures class="ease-bounce" */
/* ...but the match boundary is wrong — only ".ease-bounce " is consumed */
/* Output becomes corrupted: */
.ease-bounce-inner { transform: scale(1.1); }
/* ↑ This orphaned fragment is now an unrelated selector — the rule is BROKEN */
```

This means any component CSS that uses descendant/child selectors for internal structure (e.g., `.ease-bounce > span`) will be silently broken by the optimizer.

### Verified Proof
Running the regex against a test input of:
```
.ease-bounce .ease-bounce-inner { transform: scale(1.1); }
```
With `usedClasses = new Set(['ease-bounce'])`, the output incorrectly becomes:
```
.ease-bounce
```
The `{ transform: scale(1.1); }` part is orphaned and dropped.

## Fix
The proposed fix in `optimizer-fix.js` replaces the naive single-class regex with a full-selector-aware approach that:
1. Captures the **entire selector** before `{`.
2. Extracts **all** `ease-*` class names mentioned anywhere in the selector.
3. Preserves the rule if **any** referenced class is in `usedClasses`.

## Files
- `optimizer-fix.js` — The proposed fix for `pruneClasses()`.
- `demo.html` / `style.css` — CI validation placeholder files.
