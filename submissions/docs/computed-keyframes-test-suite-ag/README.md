# Computed Keyframes Test Suite & Motion Engine DSL Verification

Automated test suite (`tests/computed-keyframes.test.js`) and interactive demonstration dashboard verifying complex animation DSL parsing, proper keyframe extraction without syntax errors, chained CSS property preservation, timing function resolutions, and optimizer execution speed.

## 1. What does this do?

Provides automated unit tests and a live interactive showcase for EaseMotion CSS's motion engine to verify:
- Parsing of complex space-delimited and hyphenated DSL statements (e.g., `ease-spin-slow-infinite-bounce-reverse`, `fade-in 500ms spring delay-200ms repeat-2 both`).
- Compilation of animation shorthand rules with canonical timing functions (`ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `spring`, `bounce`, `snap`) and `@media (prefers-reduced-motion)` guards.
- Extraction of required `@keyframes` without CSS syntax errors.
- Preservation of multi-property keyframe declarations (`transform`, `opacity`, `filter`, `box-shadow`, `border-radius`, `clip-path`).
- High-performance execution speed optimizations in `optimizer.js` (< 50ms HTML optimization, sub-millisecond keyframe pruning, and deterministic hash class deduplication).

## 2. How is it used?

Run the automated test suite via Vitest:

```bash
npm test
```

To run only the computed keyframes test suite:

```bash
npx vitest run tests/computed-keyframes.test.js
```

To explore interactively in any web browser, open `demo.html` directly (no server or build step required).

## 3. Why is it useful?

1. **Robust DSL Parsing**: Ensures users can author animations using both attribute syntax (`em="fade-in 500ms ease-out"`) and fluent hyphenated class names (`ease-spin-slow-infinite-bounce-reverse`) without runtime failure.
2. **Syntax Integrity & Zero Duplication**: Guarantees generated CSS rules match standard CSS syntax specifications and deduplicate identical motion rules using deterministic hash classes (`_em_xxxxxx`).
3. **Chained Property Safety**: Prevents build-time or runtime tree-shakers from stripping nested CSS property chains (such as simultaneous `transform` + `opacity` + `filter` animations).
4. **Verified Performance**: Enforces sub-50ms execution speed thresholds for HTML tree-shaking and CSS optimization, guaranteeing lightning-fast build and runtime performance.
