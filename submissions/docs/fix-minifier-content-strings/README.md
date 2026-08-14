# Fix: Minifier Content String Corruption

Resolves a minifier bug in `build-minified-css.mjs` where clean replaces (like removing semicolons before braces) corrupt string values inside custom content declarations.

## What does this do?
- **String Context Escaping:** Safely parses and ignores string content literals when applying minification regex filters.