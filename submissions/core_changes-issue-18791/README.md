# fix: dynamically respond to prefers-reduced-motion changes

## What does this do?

Ensures the reveal effect reacts live when the user changes their OS `prefers-reduced-motion` setting, instead of only checking once at page load.

## How is it used?

The change is in `core/reveal.js`. Currently the script reads the media query once:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```

The fix replaces this with a persistent listener:

```js
var motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
motionMedia.addEventListener('change', function () {
  if (motionMedia.matches) {
    // reveal all elements immediately, disconnect observer
  } else {
    // reset reveals, re-initialise IntersectionObserver
  }
});
```

Users do not need to change their HTML — the fix is purely in `core/reveal.js`.

## Why is it useful?

Users may change their accessibility preferences without reloading the page (e.g. system-wide shortcuts, accessibility toggles). A static check at load time ignores these live changes, which:
- Leaves users with reduced motion stuck seeing animations if they turned the setting on after page load
- Forces a full page reload to honour a new preference

This fix aligns with EaseMotion's philosophy of being accessible and responsive by default.

---

## Demo

Open `demo.html` in a browser. It shows reveal cards that respect the OS `prefers-reduced-motion` setting and includes a manual toggle to demonstrate the live-update behaviour.

## Files Changed (proposal)

| File | Change |
|------|--------|
| `core/reveal.js` | Replace static `matchMedia().matches` with a `change` event listener that reveals all or re-initialises the IntersectionObserver dynamically |

Fixes #18791
