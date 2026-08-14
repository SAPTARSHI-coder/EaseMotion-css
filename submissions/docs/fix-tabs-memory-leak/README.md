# Fix: Tabs Event Listener Leak and Double Translate

Resolves the resize/change event listener stack (memory leak) in `tabs.js` and corrects the double translation bug on the active tab underline.

## What does this do?
- **Prevents Event Listener Accumulation:** Registers the resize listener exactly once and marks initialized tabs using a `data-ease-tabs-bound` attribute to avoid duplicate change listeners.
- **Fixes Double Translation:** Resolves the conflict between CSS translations and JS inline positioning on the active underline.