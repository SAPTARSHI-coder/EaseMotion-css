# Fix: Runtime Engine Class Pollution

Cleans up old, dynamic generated `_em_*` classes when the element's `em` attribute changes or is removed in `runtime.js`.

## What does this do?
- **Class Cleanup:** Scans and removes old `_em_` classes before applying the new one when the MutationObserver detects changes to the `em` attribute.