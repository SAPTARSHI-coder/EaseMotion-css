# Fix: Engine Custom Easing Token Parser

Resolves a parsing limitation in `parser.js` where custom easing definitions like `cubic-bezier(...)` or `steps(...)` are fragmented and ignored if they contain spaces.

## What does this do?
- **Balanced Tokenizer:** Re-architects string tokenizer patterns to group complete cubic-bezier or steps functions as single tokens, enabling custom easing profiles inside dynamic `em=""` definitions.