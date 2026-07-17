# Slide Up Keyframes — Unit Tests

Comprehensive unit tests for the **Slide Up** animation keyframe lifecycle in EaseMotion CSS, covering the parser and compiler stages.

## Purpose

These tests verify that the animation engine correctly handles the `slide-up` keyframe from parsing to compilation, ensuring no regressions after future code changes.

## Test Coverage

| Category                  | Tests | Description                                                                                                                                            |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Parser — Name             | 2     | Basic name parsing, case insensitivity                                                                                                                 |
| Parser — Duration         | 3     | ms, seconds, default fallback                                                                                                                          |
| Parser — Easing           | 4     | ease-out, spring, linear, bounce aliases                                                                                                               |
| Parser — Delay            | 2     | ms and seconds                                                                                                                                         |
| Parser — Repeat           | 2     | Count and infinite                                                                                                                                     |
| Parser — Fill & Direction | 2     | fill mode, direction                                                                                                                                   |
| Parser — Full expression  | 1     | All tokens together                                                                                                                                    |
| Parser — Negative         | 3     | Unknown name, empty, null                                                                                                                              |
| Compiler — Class name     | 5     | Format, determinism, uniqueness                                                                                                                        |
| Compiler — CSS output     | 13    | Animation property, duration, easing, delay, iterations, fill, direction, reduced-motion guard, keyframe reference, syntax validity, unknown animation |

## How to Run

Run the slide-up keyframe tests in isolation:

```bash
npx vitest run submissions/testing/slide-up-keyframes-tests/tests/engine.test.js
```

Run the full project test suite:

```bash
npm test
```

## Expected Output

All tests should pass with no failures:

```
✓ parser — slide-up keyframes > parses slide-up animation name
✓ parser — slide-up keyframes > parses slide-up with duration in ms
...
✓ compiler — slide-up keyframes > returns empty string for unknown animation

 Test Files  1 passed (1)
      Tests  30 passed (30)
```

## Files

| File                   | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `tests/engine.test.js` | 30 test cases covering parser and compiler for slide-up keyframes |
| `README.md`            | This documentation                                                |
