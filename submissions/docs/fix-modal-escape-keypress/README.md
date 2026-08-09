# Fix: Active Modal Escape Keypress Filtering

Resolves a bug in `modal.js` where pressing the Escape key clears the location hash and scrolls the page to the top even when no overlay is active.

## What does this do?
- **State Check Safeguard:** Verifies that a modal is actually active on the page before executing hash manipulation on keypress.