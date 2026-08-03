# Tabs MutationObserver — Memory Leak Fix

### 1. What does this do?
Fixes memory leak in `initializeTabs()` by preventing duplicate event listener registration when the MutationObserver triggers multiple times.

### 2. How is it used?
Apply the fix in `core/tabs.js`:

```javascript
// Add initialization flag
let tabsInitialized = false;

function initializeTabs() {
  if (tabsInitialized) return;
  tabsInitialized = true;
  // Event listeners setup...
}
```

### 3. Why is it useful?
- Prevents memory leaks from accumulated event listeners
- Improves performance on pages with dynamic tab content
- Ensures events are processed only once per tab set
