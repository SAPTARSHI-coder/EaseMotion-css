# Fix: Compiler Support for Negative Animation Delays

Resolves a compiler limit in `compiler.js` that blocks negative delay parameters, which are standard in CSS to start animations mid-cycle.

## What does this do?
- **Support Signed Delay:** Updates delay condition checks from `ast.delay > 0` to `ast.delay !== 0`, permitting negative delay variables.