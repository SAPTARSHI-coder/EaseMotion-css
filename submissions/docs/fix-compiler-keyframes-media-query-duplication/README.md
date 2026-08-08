# Fix: Compiler Media Query Duplication

Resolves CSS style payload bloat in `compiler.js` caused by duplicating the `@media (prefers-reduced-motion: reduce)` blocks inside every single dynamic class rule.

## What does this do?
- **Global Motion Rule:** Replaces inline media query blocks with a single global wildcard rule targeting all dynamic classes (`[class*='_em_']`), saving significant string parsing overhead.