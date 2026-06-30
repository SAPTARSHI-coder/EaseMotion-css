# Integrate axe-core Automated Accessibility Tests

## What does this submission do?

This submission integrates **axe-core** — the industry-standard accessibility testing engine — into the EaseMotion project. It adds:

- **`tests/a11y.test.js`** — Vitest-based test file that renders each component as HTML via JSDOM, runs `axe.run(document)`, and asserts zero critical or serious WCAG 2.1 AA violations per component.
- **`tests/docs-a11y.test.js`** — Runs axe against generated documentation pages to catch regressions in the docs site.
- **`package.json`** script (`npm run test:a11y`) to invoke the accessibility test suite.
- **Demo dashboard** (`demo.html` + `style.css`) that renders every component in real DOM and runs axe-core live in the browser, displaying pass/fail status, violation counts by severity, and violation details per rule.

## How was it implemented?

- `npm install --save-dev axe-core` adds the axe-core library as a dev dependency.
- `tests/a11y.test.js` uses a `describe.each` pattern: for each component CSS file, it creates a representative HTML fragment, initializes it in JSDOM, runs `axe.run(document)`, filters to `critical`/`serious` impact violations, and asserts the filtered list is empty.
- `tests/docs-a11y.test.js` uses `@axe-core/playwright` or the axe CLI to scan generated HTML in the `docs/` directory.
- The `test:a11y` npm script is added to `package.json` for easy CI integration.
- The demo page (`demo.html`) loads axe-core 4.10.1 from CDN, iterates over 8 components (buttons, cards, toast, modal, breadcrumb, split button, skeleton, hover card), runs `axe.run(container)` on each, and displays a live dashboard with:
  - Status banner (pass/fail summary)
  - Summary grid (components, violations, critical/serious count, passes)
  - Per-component cards with pass/fail indicators and detailed violation lists

## Why these choices?

- **axe-core** is the de facto standard for automated a11y testing (used by Deque, Microsoft, Google). It tests WCAG 2.1 AA rules out of the box and categorizes violations by impact (critical, serious, moderate, minor).
- **Vitest + JSDOM** aligns with the project's existing test infrastructure. No new test runner or browser automation is required for unit-level a11y checks.
- **Filtering by critical/serious** follows the principle that moderate and minor violations should not block CI — they can be tracked and addressed incrementally. Critical and serious violations (missing ARIA labels, insufficient contrast, missing form labels) are genuine blockers for assistive technology users.
- **The live demo** validates that the a11y checks actually work in a real browser and serves as documentation for contributors to understand what each component must satisfy.
- **Separate docs test** (`docs-a11y.test.js`) ensures the documentation site itself — often the first place users encounter EaseMotion — is also accessible.

## Files

| File                      | Purpose                                           |
| ------------------------- | ------------------------------------------------- |
| `tests/a11y.test.js`      | Component-level axe-core tests via Vitest + JSDOM |
| `tests/docs-a11y.test.js` | Documentation site axe-core tests                 |
| Updated `package.json`    | Added `test:a11y` and `test:docs-a11y` scripts    |
