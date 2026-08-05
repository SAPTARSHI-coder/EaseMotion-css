# Fix: Runtime CSS Rule Insertion Performance

Resolves performance degradation and style recalculation overhead in `runtime.js` caused by resetting `.textContent` on every dynamic rule injection.

## What does this do?
- **Append Text Nodes:** Swaps string reassignments with appending dedicated text nodes, preventing the browser from re-parsing previously compiled styles.