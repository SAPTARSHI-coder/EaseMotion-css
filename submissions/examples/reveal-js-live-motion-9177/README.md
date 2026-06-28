# reveal.js Live Motion Fix — Issue #9177

**Fixes:** #9177

## What does this do?

Demonstrates the bug in `core/reveal.js` where `prefers-reduced-motion` is
checked once at script parse time using `.matches`, and shows the correct fix
using a live `MediaQueryList` change listener.

## The problem

In `core/reveal.js`, lines 12–14:

```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) return;
```

`.matches` is a one-time boolean snapshot. The `MediaQueryList` object is
discarded immediately. If a user enables Reduce Motion after the page loads,
the already-running `IntersectionObserver` keeps adding `ease-reveal-active`
to elements as they scroll into view — triggering animations that the user has
just asked to stop.

## How to see it

1. Open `demo.html` in a browser.
2. Scroll down a little in both panels to trigger a few reveals (confirms both
   observers are working).
3. Click **Enable Reduce Motion (mid-session)** to simulate a live preference
   change.
4. Scroll further in both panels.

**Broken panel:** Items continue to animate in.

**Fixed panel:** The observer disconnects immediately. No more animations.

## The fix

Store the `MediaQueryList` and attach a `change` listener:

```js
var mql = window.matchMedia('(prefers-reduced-motion: reduce)');

// Listen for live changes
if (mql.addEventListener) {
  mql.addEventListener('change', handleMotionChange);
} else {
  mql.addListener(handleMotionChange); // older browsers
}

function handleMotionChange(e) {
  if (e.matches) {
    stopObserver();   // user just enabled Reduce Motion
  } else {
    startObserver();  // user just disabled Reduce Motion
  }
}

// Initial check
if (mql.matches) return;
startObserver();
```

## Why this matters

Users can toggle Reduce Motion without reloading the page:
- iOS: Control Centre → Accessibility Shortcuts
- macOS: Accessibility shortcut keys
- Chrome DevTools: Rendering panel → prefers-reduced-motion

When any of these change, the browser fires a `change` event on active
`MediaQueryList` objects. Without a listener, `reveal.js` never hears about it.
