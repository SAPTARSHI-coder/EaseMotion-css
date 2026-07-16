# Slide Up Keyframes Tests

## Purpose
This directory contains unit tests for verifying the correct parsing, AST generation, and compilation of the Slide Up keyframes in the EaseMotion CSS framework. This ensures that the engine continues to process `slide-up` animations properly without regressions after future code changes.

## Test Coverage
The tests cover:
- Successful parsing of the `slide-up` animation identifier and parameters (duration, easing, delay, iterations, fill mode).
- Correct generation of the Abstract Syntax Tree (AST) for valid `slide-up` definitions.
- Accurate CSS output from the compiler including the expected animation name, duration, and easing classes.
- Robustness against invalid modifiers when parsing `slide-up` keyframes.

## Execution
To run these tests along with the rest of the project's test suite, use the standard command from the project root:

```bash
npm test
```

## Expected Output
The `vitest` runner will output the results. All tests under `Slide Up Keyframes` should pass with green checkmarks, indicating that the `slide-up` keyframes are correctly parsed and compiled by the animation engine.

No core framework files were modified for this test submission.
