# test: Add Edge Case Tests for Stepper Next/Previous Step Validation (#82009)

Adds Vitest edge case test coverage for **Stepper Next/Previous Step Validation** — covering happy path, boundary conditions, and invalid inputs.

## What This Covers

- **Happy path**: navigating forward/backward through valid steps
- **Boundary edge cases**: cannot go below step 1 or above max steps
- **Invalid inputs**: `null`, `undefined`, negative indices, non-integer values
- **State integrity**: current step never corrupts on invalid input

## Test Scenarios

| Test | Description |
|------|-------------|
| `nextStep() from step 1` | Advances to step 2 |
| `nextStep() at last step` | Stays at last step (no overflow) |
| `prevStep() from step 2` | Goes back to step 1 |
| `prevStep() at step 1` | Stays at step 1 (no underflow) |
| `goToStep(n)` valid | Jumps to exact step |
| `goToStep(-1)` invalid | Clamps to step 1, no crash |
| `goToStep(999)` invalid | Clamps to last step, no crash |
| `goToStep(null)` | Treated as no-op, no crash |
| `isFirstStep()` | True only when on step 1 |
| `isLastStep()` | True only when on last step |

## Files

```
submissions/examples/82009-stepper-next-prev-validation-test/
├── stepper-validation.test.js   ← Vitest test spec
├── demo.html                    ← Interactive demo of validation behavior
└── README.md
```

## Running the Tests

```bash
# Run all tests
npm test

# Run only this test file (from repo root)
npx vitest run submissions/examples/82009-stepper-next-prev-validation-test/stepper-validation.test.js
```

## Acceptance Criteria Met

- ✅ `npm test` runs cleanly with all assertions passing
- ✅ Covers happy path, edge cases, and invalid inputs
- ✅ No modification to core `tests/` or engine files
- ✅ Self-contained under `submissions/examples/`

## Related

- Issue: [#82009](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/82009)
- Labels: `testing`, `gssocapproved`, `good first issue`
