# EaseMotion Visual Regression Testing Suite (PoC)

A Playwright-based End-to-End (E2E) visual regression testing prototype designed to execute EaseMotion animations in a real browser, pause them at deterministic progress intervals, and detect sub-pixel rendering defects across multiple browsers.

## Features
- Captures fixed-time snapshots of running animations using the Web Animations API to pause `document.getAnimations()`.
- Demonstrates Hinge, Flip X, and Slide Up animations.
- Configured to run in Chromium, Firefox, and WebKit (Safari).
- Tolerates minor sub-pixel rendering shifts up to 100 pixels.

## Requirements
- Node.js
- Playwright

## Installation & Setup
1. `npm install`
2. `npx playwright install`

## Running Tests
1. Start the visual regression test: `npm test`
2. Update baseline snapshots: `npm run test:update`

## Flakiness Mitigation Strategy
To prevent test flakiness due to varying rendering times, this suite injects a freeze function into the browser context. This iterates through all active DOM animations, pauses them, and forces them to jump to a specific timestamp (`500ms`) before Playwright takes the snapshot. This ensures that the snapshot is completely deterministic and ignores system load timing.

## CI Integration Strategy (Post-Freeze)
After the core framework freeze is lifted, this suite should be integrated into GitHub Actions alongside the existing unit tests:
1. Move these tests to `tests/e2e/`.
2. Add a `.github/workflows/e2e.yml` file.
3. Configure the job to run `npm install`, then `npx playwright install --with-deps`, then `npx playwright test`.
4. Add an action to automatically upload the `playwright-report/` directory as an artifact whenever tests fail so developers can inspect the diffs natively in GitHub.
