# CSS Specificity Calculation Safety & Automated Tests

This module provides a safety-hardened, performant CSS specificity calculation algorithm along with automated Vitest test suites under `tests/` to verify safety against edge cases, malicious inputs, complex pseudoclasses, and invalid arguments.

## Specificity Tuple Structure
Specificity is returned as a 4-tuple array `[a, b, c, d]`:
- **`a`**: Inline styles (`style="..."`)
- **`b`**: IDs (`#example`)
- **`c`**: Classes (`.example`), attribute selectors (`[type="text"]`), pseudo-classes (`:hover`, `:nth-child()`)
- **`d`**: Elements (`div`, `p`), pseudo-elements (`::before`)

> **Note:** The `:not()`, `:is()`, `:has()`, and `:where()` pseudo-classes are safely parsed according to standard specificity rules (`:where()` adds `[0,0,0,0]` score).

## Testing Strategy
Tests are located in `tests/specificity.test.ts` (or `.js`) and executed using Vitest.

### Running Tests
```bash
# Run tests once
npm test

# Run tests in watch mode
npx vitest

# Generate coverage report
npx vitest run --coverage
