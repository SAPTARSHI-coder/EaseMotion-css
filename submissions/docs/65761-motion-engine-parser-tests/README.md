# Motion Engine Parser Edge-Case Tests

## Overview

This submission documents representative edge cases for the EaseMotion
Motion Engine parser.

The goal is to improve regression coverage around unusual or malformed
motion input without modifying the parser implementation.

## Covered Cases

The demo represents the following parser scenarios:

- Empty `em=""` values
- Valid motion tokens
- Multiple motion tokens
- Extra and unexpected whitespace
- Invalid or malformed tokens
- Valid tokens mixed with invalid tokens

## Expected Behavior

The parser should:

1. Handle empty values safely.
2. Preserve valid motion tokens.
3. Handle multiple tokens consistently.
4. Ignore or safely handle malformed tokens.
5. Avoid throwing unexpected errors for invalid input.
6. Continue working when valid and invalid tokens are mixed.

## Testing

The repository uses Vitest for automated tests.

Relevant parser tests should follow the existing conventions in:

`tests/engine.test.js`

The demo can be opened directly in a browser without a development server.

## Scope

This submission is limited to the `submissions/` directory and does not
modify the Motion Engine implementation.

## Related Issue

Closes #65761