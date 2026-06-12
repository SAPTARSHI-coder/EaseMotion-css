# Issue #5723: reveal.js doesn't observe dynamically-added elements

## Description
`core/reveal.js` runs at `DOMContentLoaded` and observes existing `.ease-reveal` elements. Elements added dynamically (AJAX, infinite scroll, conditional rendering) are never observed and remain invisible.

## Root Cause
The IntersectionObserver is set up once on page load. There is no public API or MutationObserver to register new elements.

## Proposed Fix
Expose a public API in `core/reveal.js`:
```js
window.EaseMotionReveal = window.EaseMotionReveal || {};
window.EaseMotionReveal.observe = function(el) {
  if (isCentered(el)) {
    el.classList.add(activeClass);
  } else {
    observer.observe(el);
  }
};
```
Usage: `EaseMotionReveal.observe(element)` after dynamically adding a `.ease-reveal` element.

## Files
- `style.css` — the proposed API code (as CSS comment, for JS fix)
- `demo.html` — shows a button that adds a dynamic reveal element
