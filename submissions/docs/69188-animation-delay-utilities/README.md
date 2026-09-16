# Animation Delay Utilities Regression Tests

## Issue

#69188 — Add regression tests for animation delay utilities.

## Description

This submission provides a self-contained demonstration for verifying EaseMotion animation delay utility classes.

The tests cover the expected `animation-delay` values for:

* `ease-delay-100`
* `ease-delay-200`
* `ease-delay-300`

The test setup also ensures that applying a delay utility does not replace the animation configuration used by the element.

## Expected Output

The utilities should produce the following values:

```css
.ease-delay-100 {
  animation-delay: 100ms;
}

.ease-delay-200 {
  animation-delay: 200ms;
}

.ease-delay-300 {
  animation-delay: 300ms;
}
```

## How to Test

1. Open `demo.html` directly in a browser.
2. Observe the three animated test cards.
3. Verify that each card uses its corresponding delay value.
4. Inspect the elements in browser developer tools.
5. Confirm that the computed `animation-delay` matches the expected value.

## Scope

This submission focuses on regression coverage for animation delay utilities and does not modify the existing EaseMotion implementation.

## Expected Result

Each delay utility should apply the correct `animation-delay` value while leaving unrelated animation properties unchanged.

## Related Issue

#69188
