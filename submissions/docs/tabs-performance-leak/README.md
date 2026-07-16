# Fix: Tabs Event Listener Leak and Double Translate

Resolves the resize/change event listener stack (memory leak) in `tabs.js` and corrects the double translation bug on the active tab underline.

## What does this do?
- **Prevents Event Listener Accumulation:** In the original code, the MutationObserver triggers `initializeTabs()` on every DOM change. Each execution registers a new, duplicate `resize` listener on `window` and piles up `change` event listeners on the tab inputs. This change registers the resize listener exactly once and marks initialized tabs using a `data-tabs-initialized` attribute.
- **Fixes Double Translation:** Resolves the conflict between CSS translations (`transform: translateX(...)`) and JS inline positioning (`left: ...px`) on the active underline element by overriding `transform` to `none` in JS once active.

## How is it used?
Open `demo.html` in any browser. It demonstrates how event listeners stack under DOM mutations and showcases the double-offset bug on the active underline alongside their respective fixes.

## Why is it useful?
- Fixes page performance issues and memory bloat in single-page apps or dynamic environments.
- Ensures the active tab underline aligns correctly under the tab label.
