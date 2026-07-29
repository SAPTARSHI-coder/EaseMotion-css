# React useAnimation Hook Unit Tests (#22943)

This submission introduces a comprehensive Vitest test suite for the `useAnimation` React hook, utilizing `@testing-library/react`.

## Included Files

- `useAnimation.js` - The source implementation of the hook (exported as an ES module for compatibility with standard testing environments).
- `useAnimation.test.jsx` - The Vitest suite containing 6 distinct test cases evaluating state, configuration, and DOM event handling.

## Test Coverage

The test suite validates the following core behaviors:
1. **Initialization**: Verifies that the hook initializes with `isPlaying: false` and an empty `className`.
2. **Play Logic**: Ensures calling `play()` toggles state and generates the default sequence of EaseMotion CSS classes.
3. **Custom Configurations**: Validates that passing custom animation, duration, curve, and fill modes correctly overrides the default CSS string.
4. **Reset Logic**: Ensures the `reset()` method clears all animation classes.
5. **Event Listening**: Mounts a mock DOM element to the `ref` and fires a synthetic `animationend` event, verifying the hook automatically resets itself.
6. **Event Bubbling Prevention**: Simulates a child element firing an `animationend` event that bubbles up to the parent `ref`. The test ensures the hook correctly ignores these events (by comparing `e.target === node`), preventing premature animation resets.

## Running Tests

If your repository is configured with Vitest and `@testing-library/react`, you can drop these files in and run them via:
```bash
npm run test
```
