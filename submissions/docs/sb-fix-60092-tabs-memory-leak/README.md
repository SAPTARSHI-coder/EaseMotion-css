# Fix: MutationObserver Memory Leak in tabs.js

## What does this do?
Fixes a memory leak in `core/tabs.js` where event listeners were accumulated on every MutationObserver callback.

## How is it used?
Add an `initialized` flag to ensure event listeners are only registered once:
```javascript
var initialized = false;
if (!initialized) {
  initialized = true;
  window.addEventListener('resize', handler);
  document.addEventListener('change', handler);
}
```

## Why is it useful?
- Prevents memory leaks from accumulated event listeners
- Improves performance on pages with dynamic tab content
- Maintains correct functionality
