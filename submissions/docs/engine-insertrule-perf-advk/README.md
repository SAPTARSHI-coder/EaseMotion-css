# Engine insertRule Performance

## What does this do?

Benchmarks the engine's current CSS injection strategy against the CSSOM
`insertRule` API in the browser, and charts the difference.

## How is it used?

Open `demo.html`, choose a rule count, and press **Run benchmark**. Both
strategies inject identical rules into a throwaway `<style>` element.

```js
// current: the whole sheet is re-serialised and re-parsed on every append
styleEl.textContent += '\n' + css;

// proposed: constant-time append, no reparse of existing rules
const sheet = getStyleElement().sheet;
sheet.insertRule(css, sheet.cssRules.length);
```

## Why is it useful?

`easemotion/engine/runtime.js` injects each compiled rule with
`getStyleElement().textContent += '\n' + css`. Every append replaces the whole
text node, so the browser throws away the parsed stylesheet and reparses all
previously injected rules. Injecting *n* unique animations costs O(n²) parse
work instead of O(n).

The cost lands at the worst moment: the runtime is driven by a
`MutationObserver`, so a page that streams in list items — each with a distinct
`em=""` configuration — pays the growing reparse on the main thread during
scroll or route transitions, exactly when frames are scarce.

`insertRule` is supported in every browser EaseMotion targets and needs no other
change: `className()` already dedupes via the `injected` set, so rules are still
written once each. This showcase gives the maintainer a reproducible measurement
rather than a claim.
