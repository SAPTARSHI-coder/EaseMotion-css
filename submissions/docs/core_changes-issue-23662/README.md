# Vitest Keyframes Unit Tests

1. What does this do?
Provides a robust unit test suite (`keyframes.test.js`) using Vitest and jsdom to programmatically verify the existence, structure, opacity, keyframe stages, and class mappings of the core animation keyframes.

2. How is it used?

Copy `keyframes.test.js` to the root `tests/` directory and execute the test runner:

```bash
cp keyframes.test.js ../../tests/keyframes.test.js
npm run test
```

3. Why is it useful?
Ensuring that keyframes are not accidentally deleted, renamed, or modified during refactors is vital to preventing silent layout and animation regressions. Automating keyframe schema verification guarantees reliability and stability as the framework expands.
