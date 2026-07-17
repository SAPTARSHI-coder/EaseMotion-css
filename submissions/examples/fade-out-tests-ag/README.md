# Fade Out Keyframes Unit Tests

This submission introduces comprehensive unit test coverage for the `fade-out` animation within the EaseMotion animation engine's parser. 

Because the project is currently under a strict core framework freeze, these tests could not be added directly to `tests/engine.test.js`. Instead, they have been placed in this isolated submission folder to abide by the repository's contributing guidelines.

## 🧪 What is Tested

The tests in `engine-fade-out.test.js` validate the following:
*   **Valid Keyframe Parsing**: Ensures valid `fade-out` animation strings (e.g., `fade-out 400ms ease-in-out delay-100ms repeat-2`) are successfully parsed.
*   **AST Generation**: Verifies the generated Abstract Syntax Tree perfectly matches expected properties.
*   **Compiler Output**: Ensures the `compile()` step successfully generates the `ease-kf-fade-out` CSS rule.
*   **Malformed Syntax Handling**: Verifies that the parser safely rejects entirely malformed strings.
*   **Graceful Degradation**: Proves that the parser ignores unrecognized trailing tokens (like missing closing braces) without throwing errors.
*   **Duplicate Property Resolution**: Validates how the parser resolves duplicate percentage/time arguments (by utilizing the last recognized token).

## 🚀 Running the Tests

Because the project uses Vitest, it will automatically discover `*.test.js` files anywhere in the project tree, including within the `submissions/` directory.

To run these tests alongside the core tests, simply execute:
```bash
npm test
```

## 🛠️ Post-Freeze Integration

Once the core code freeze is lifted, maintainers can safely move the contents of `engine-fade-out.test.js` directly into `tests/engine.test.js` and delete this submission folder.
