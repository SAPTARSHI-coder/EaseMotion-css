# Fix: Duplicate Scanner Multiline Selector Matching

Resolves a limitation in `check-duplicates.mjs` where classes defined in multiline selector blocks (where the opening brace `{` is on a separate line) are ignored.

## What does this do?
- **Multiline Scanning:** Updates the scanner regex pattern to locate CSS classes even when they span multiple lines before the block declaration.