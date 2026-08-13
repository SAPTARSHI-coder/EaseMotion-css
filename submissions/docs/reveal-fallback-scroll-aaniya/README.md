# Fix: Fallback Scroll Reveals Activate All Items Instantly (#6085)

## Issue
In `core/reveal.js`, when `IntersectionObserver` isn't supported, the
fallback branch (`readyFallback`) immediately adds the active class to
every `.ease-reveal` element on page load:

```js
} else {
  var readyFallback = function () {
    var els = document.querySelectorAll('.' + revealClass);
    Array.prototype.forEach.call(els, function (el) {
      el.classList.add(activeClass);
    });
  };
  ...
}
```

This completely bypasses scroll-based reveal behavior — every element
becomes visible at once instead of progressively as the user scrolls,
breaking the intended entrance-animation effect in legacy environments.

## Expected Behavior
The script should fall back to a throttled/debounced scroll listener
that checks each element's position on scroll (and resize) and adds the
active class only once the element enters the viewport — mirroring what
`IntersectionObserver` does, rather than short-circuiting it.

## Investigation
Confirmed directly in `core/reveal.js`:
- `supportsObserver` gates between the `IntersectionObserver` path and
  the fallback path.
- The fallback path has no scroll/resize listener at all — it fires once
  on `DOMContentLoaded` (or immediately if the document is already
  loaded) and activates everything unconditionally.
- The existing `isCentered(el)` helper (used in the observer path to
  eagerly reveal already-visible elements) could be reused as the
  viewport check in the fallback path instead of writing new geometry
  logic.

## Recommended Fix
Since this submission can't edit `core/reveal.js` directly:

1. Replace the fallback's one-time `forEach` with a `revealVisible()`
   function that checks each un-activated `.ease-reveal` element against
   `isCentered()` (or equivalent) and adds the active class only for
   elements currently in view.
2. Attach `revealVisible` to `scroll` and `resize` via a throttle
   wrapper (~100ms) so it doesn't run on every scroll event.
3. Run `revealVisible()` once on load to catch elements already in the
   viewport, matching the observer path's eager-reveal behavior.
4. Stop checking an element once it's been activated (skip elements that
   already have `activeClass`) to avoid unnecessary work on later scroll
   events.

## Files
- `style.css` — reveal/active state styling for the demo cards
- `demo.html` — self-contained fallback scroll listener reproducing the
  recommended fix; scroll down to see cards reveal progressively instead
  of all at once

## Testing
1. Open `demo.html` in a browser.
2. Scroll down slowly and confirm each card fades/slides in only once it
   enters the viewport, rather than all three appearing on load.
3. Resize the window and confirm newly-visible cards still reveal
   correctly.
