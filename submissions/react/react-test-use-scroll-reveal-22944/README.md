# React useScrollReveal Hook Unit Tests (#22944)

This submission introduces a comprehensive Vitest test suite for the `useScrollReveal` React hook, utilizing `@testing-library/react` and a robust `IntersectionObserver` mock.

## Included Files

- `useScrollReveal.js` - The source implementation of the hook (exported as an ES module for compatibility with standard testing environments).
- `useScrollReveal.test.jsx` - The Vitest suite containing tests evaluating state, configuration, and viewport intersection events.
- `demo.html` & `style.css` - A visual test harness serving dual purposes: satisfying the repository's PR validation bot and providing a manual testing environment to verify the hook's behavior.

## Test Coverage

The test suite validates the following core behaviors:
1. **Initialization**: Verifies that the hook initializes with `isVisible: false` and explicitly injects the `ease-opacity-0` class to prevent FOUC (Flash of Unstyled Content).
2. **Intersection Observation**: Confirms the hook successfully calls `.observe()` on the underlying DOM node once the `ref` is populated.
3. **Trigger Once Mode (Default)**: Validates that when `triggerOnce` is true, intersecting the viewport flips `isVisible` to true, injects the CSS animation classes, and explicitly calls `.unobserve()` to clean up.
4. **Continuous Mode**: Validates that when `triggerOnce` is false, scrolling out of the viewport flips `isVisible` back to false, resetting the class list to `ease-opacity-0` for repeated animations.
5. **Custom Configurations**: Ensures custom `animation`, `duration`, `delay`, and `curve` options are accurately appended to the class list when an intersection occurs.

## Running Tests

If your repository is configured with Vitest and `@testing-library/react`, you can drop these files in and run them via:
```bash
npm run test
```
