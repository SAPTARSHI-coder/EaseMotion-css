# Fix: Optimizer Class Pruner Combined Selectors

Resolves an issue in `optimizer.js` where the CSS class pruner deletes state selectors or nested class definitions (e.g. `.ease-btn:hover`, `.ease-card:focus`) during tree-shaking.

## What does this do?
- **Robust Class Extraction:** Adapts class matching to parse pseudo-classes and combined selectors correctly, preventing structural interactive state pruning.