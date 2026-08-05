# Fix: reveal.js fallback reveals all elements instantly

## Track
Core & Docs Showcase (`submissions/docs/`) — this is a reference
implementation only. No files under `core/` are modified by this
submission.

## Bug

In `core/reveal.js`, when `IntersectionObserver` is unavailable, the
fallback branch does this:

```js
var readyFallback = function () {
  var els = document.querySelectorAll('.' + revealClass);
  Array.prototype.forEach.call(els, function (el) {
    el.classList.add(activeClass);
  });
};
```

This adds `activeClass` to every `.reveal-el` on page load, regardless
of whether the element is actually visible. The result: on browsers
without `IntersectionObserver`, scroll-reveal animations don't play at
all — everything just appears active immediately.

## Fix

`demo.js` in this folder replaces that logic with a throttled
scroll/resize listener that checks each element's bounding rect and
only adds the active class once the element has entered the viewport.
It uses `requestAnimationFrame` to avoid layout thrashing on scroll.

## How to verify

1. Open `demo.html` in a browser.
2. Note the three `.reveal-el` blocks are not active on load.
3. Scroll down — each block fades/slides in only once it enters view,
   instead of all being active immediately.

## Suggested integration

A maintainer can port the `checkAndReveal` / `onScroll` / `readyFallback`
logic in `demo.js` directly into the `else` branch of
`core/reveal.js`, replacing the current instant-activation fallback.