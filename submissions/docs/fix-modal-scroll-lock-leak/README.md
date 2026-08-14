# Fix: Multi-Modal Scroll Lock Leak

Resolves scroll locking issues in `modal.js` where closing a nested modal releases the body overflow lock even if other overlays remain active.

## What does this do?
- **Lock Count Registry:** Tracks modal activations dynamically, maintaining the body scroll lock until the final overlay is fully dismissed.