# Ease Tabs — Memory Leak & Event Listener Accumulation Fix

Fixes the bug reported in **#30731**, where `initializeTabs()` in `core/tabs.js`
re-attached a global `window` resize listener and per-input `change` listeners
on **every** MutationObserver trigger, causing listeners to accumulate
indefinitely and degrade performance over time.

## 🐛 The Bug

- `initializeTabs()` was called on every DOM mutation (via `MutationObserver`).
- Each call added a **new** `window.addEventListener('resize', ...)`.
- Each call also re-attached `change` listeners to every tab input, with no
  guard to prevent duplicates.
- Result: resize listener count grew unbounded with every mutation, visible via
  `getEventListeners(window).resize.length` in Chrome DevTools.

## ✅ The Fix

1. **Resize listener bound once.** Wrapped the `window.addEventListener('resize', ...)`
   call in a guard using a module-level flag (`window.__easeTabsResizeBound`), so it
   only ever runs once per page load — regardless of how many times
   `initializeTabs()` is called.

2. **Per-container initialization guard.** Each `.ease-tabs` container is marked
   with `data-tabs-initialized="true"` after its `change` listeners are attached.
   On subsequent calls, `initializeTabs()` checks for this attribute and skips
   re-attaching listeners — it only recalculates the underline position, which
   is safe to repeat.

```js
// Resize listener — bound exactly once
if (!window.__easeTabsResizeBound) {
  window.__easeTabsResizeBound = true;
  window.addEventListener('resize', function () {
    // debounce + update underline widths
  });
}

// Per-container change listeners — bound exactly once
if (container.hasAttribute('data-tabs-initialized')) return;
container.setAttribute('data-tabs-initialized', 'true');
```

## 🧪 How to Verify

1. Open `demo.html` in a browser with DevTools open.
2. Click **"Mutate DOM (simulate framework re-render)"** several times — this
   simulates the same class-toggle mutation from the original bug report,
   which previously triggered `initializeTabs()` via `MutationObserver`.
3. Watch the **"Resize listeners on window"** counter update after each click.
   It stays at **1**, no matter how many mutations occur.
4. You can also run `getEventListeners(window).resize.length` directly in the
   DevTools console at any point to confirm.

## 📁 Files

| File | Purpose |
|------|---------|
| `demo.html` | Working tabs component with the fixed initialization logic, plus a "Mutate DOM" button to reproduce and verify the original bug scenario |
| `style.css` | Styling for the tab nav, animated underline, and panel fade-in transition |
| `README.md` | This file |

## 🔗 Related Issue

Fixes #30731