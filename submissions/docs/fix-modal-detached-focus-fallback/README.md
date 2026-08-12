# Fix: Modal Detached Focus Restoration

Resolves an accessibility bug in `modal.js` where focus is lost completely if the trigger element that opened a modal is unmounted or destroyed while the modal is active.

## What does this do?
- **Fallback Focus Traps:** Scans and falls back to parent containers or the body root if the previous focused element is no longer attached to the document node.