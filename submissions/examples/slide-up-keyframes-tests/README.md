# Slide Up Keyframes — Unit Tests

Comprehensive unit tests for the **Slide Up** animation keyframe lifecycle in EaseMotion CSS, covering the parser and compiler stages.

## Test Coverage — 35 Tests

| Category                  | Tests | Description                                                                                                                                            |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Parser — Name             | 2     | Basic name parsing, case insensitivity                                                                                                                 |
| Parser — Duration         | 3     | ms, seconds, default fallback                                                                                                                          |
| Parser — Easing           | 4     | ease-out, ease-in, spring, linear                                                                                                                      |
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
npx vitest run --dir submissions/examples/slide-up-keyframes-tests
```

Run the full project test suite:

```bash
npm test
```

## Expected Output

All 35 tests should pass:

```
 Test Files  1 passed (1)
      Tests  35 passed (35)
```

## Files

| File                   | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `tests/engine.test.js` | 35 test cases covering parser and compiler for slide-up keyframes |
| `demo.html`            | Interactive demo with live preview and test status                |
| `style.css`            | Demo page styling                                                 |
| `README.md`            | This documentation                                                |
