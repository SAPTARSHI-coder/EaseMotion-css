# Password Strength Regex Score Calculator

## Abstract

This submission provides a robust, stateless utility function (`calculatePasswordScore`), an interactive visual HTML/CSS demo (`demo.html`, `style.css`), and a matching Vitest test suite (`passwordStrength.test.js`) to accurately grade password entropy and complexity from `0` to `5` based on regular expression rules.

## CONTRIBUTING.md Compliance

1. **What does this do?**  
   Implements a regex-based password strength calculator (`0-5` score) alongside an interactive demo and a comprehensive Vitest test suite ensuring 100% coverage.

2. **How is it used?**  
   Open `demo.html` in any browser or import `calculatePasswordScore(password)` into any form validator script. Execute tests via `npm run test` targeting this specific submission directory.

3. **Why is it useful?**  
   Prevents false positives in UI password meters by strictly guarding against type coercion, null values, and whitespace-only bypasses that naive regex patterns often miss.

## File Map

| File Path | Description |
|---|---|
| [`demo.html`](./demo.html) | Interactive HTML5 demonstration showing live score updates and criteria checklist |
| [`style.css`](./style.css) | Modern glassmorphic dark-theme styles and color-coded strength bar meters |
| [`passwordStrength.js`](./passwordStrength.js) | Core stateless password evaluation utility function |
| [`passwordStrength.test.js`](./passwordStrength.test.js) | Vitest spec suite verifying edge cases, happy paths, and isolated regex tests |

## Regex Evaluation Matrix

The function evaluates passwords using five independent criteria, assigning 1 point for each condition met:

| # | Condition | Regex / Rule | Description |
|---|---|---|---|
| 1 | Length Constraint | `password.length >= 8` | Ensures password is at least 8 characters long |
| 2 | Lowercase Letter | `/[a-z]/` | Checks for at least one lowercase ASCII character |
| 3 | Uppercase Letter | `/[A-Z]/` | Checks for at least one uppercase ASCII character |
| 4 | Numerical Digit | `/\d/` | Checks for at least one numerical digit |
| 5 | Special Character | `/[^A-Za-z0-9]/` | Checks for non-alphanumeric special symbols |

### Security Edge Case Handling & Prevention

Without strict type and boundary checking, naive regex password calculators suffer from critical security bypasses:
- **Whitespace Bypasses:** A string composed purely of spaces (e.g., `"        "`) would satisfy length (`>= 8`) and special character (`[^A-Za-z0-9]`) tests, falsely scoring a 2/5 strength. The guard clause `password.trim() === ''` immediately returns `0` to neutralize this threat.
- **Type Coercion Vulnerabilities:** Passing non-string types such as `null`, `undefined`, arrays, objects, or numbers could trigger engine errors or unexpected truthy evaluation. The guard clause `typeof password !== 'string'` ensures safe execution under all runtime environments.

## Vitest Coverage Assertions

The spec suite `passwordStrength.test.js` covers 100% of functional paths across three dedicated assertion groups:
- **Invalid Inputs & Edge Cases:** Verifies safe `0` scoring for `null`, `undefined`, numbers, objects, arrays, empty strings, and whitespace strings.
- **Happy Path Score Calculation:** Validates exact incremental scoring from score `1` through score `5` (`StrongP@ss1`).
- **Isolated Regex Condition Checks:** Isolates individual regex match behaviors independent of password length constraints.
