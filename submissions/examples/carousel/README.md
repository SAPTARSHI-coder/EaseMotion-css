# Vitest Unit Tests: Carousel Slide Index Bound Check

Automated unit test coverage for the Carousel Slide Index Bound Check module, fully addressing testing task issue `#82013`.

## 🚀 Test Coverage

- **Happy Path:** Valid next, prev, and direct index navigation.
- **Edge Cases:** Upper and lower boundary circular wrap-arounds (e.g. going past the last slide or below index 0).
- **Invalid Inputs:** Error handling for non-numeric indices and zero/negative total slide counts.
- **CI Readiness:** Runs cleanly via `npm test` with 100% assertion pass rates.

## 🛠️ Running Tests
```bash
npx vitest run tests/carousel/carousel.test.js
