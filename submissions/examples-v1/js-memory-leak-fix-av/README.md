# JavaScript Memory Leak Refactor (SPA Support)

## What does this do?
Proposes a complete structural rewrite of the framework's core JavaScript files (specifically `core/modal.js` and `core/reveal.js`) to abandon their legacy IIFE architecture in favor of a strict `init()` / `destroy()` public API. This permanently resolves severe browser memory leaks occurring in Single Page Applications (SPAs) like React, Vue, and Next.js.

## How is it used?
Maintainers must audit all JS files inside `core/`. Currently, the framework uses an outdated Immediately Invoked Function Expression (IIFE) pattern that blindly attaches anonymous functions directly to the global `window` and `document` objects upon script load:

```javascript
// ❌ BAD: Anonymous functions cannot be removed later!
window.addEventListener('hashchange', function() { ... });
```

This must be entirely refactored into a module or object structure that exposes a `destroy()` method. This method must explicitly remove identically-named event handlers:

```javascript
// ✅ GOOD: Exposing a teardown method for modern SPAs
return {
  init: () => window.addEventListener('hashchange', handleHashChange),
  destroy: () => window.removeEventListener('hashchange', handleHashChange)
}
```

## Why is it useful?
Currently, if an engineer imports `modal.js` inside a React component (e.g., a "Contact Us" page route), the script executes instantly and permanently attaches `window.addEventListener('hashchange')` and `document.addEventListener('keydown')` to the global browser window. 

If the user then navigates away from the "Contact Us" page, React destroys the HTML component—but because EaseMotion provides no teardown functions, those event listeners remain permanently stuck in memory. If the user navigates back and forth between pages 50 times, EaseMotion will attach 50 duplicate, overlapping event listeners to the window. This causes catastrophic memory leaks, browser sluggishness, and duplicate event firing (modals flashing open and closed instantly). Implementing a `destroy()` method allows React/Vue/Svelte developers to cleanly unmount the framework during route transitions (e.g., inside a React `useEffect` cleanup function), making EaseMotion natively compatible with all modern web development stacks.
