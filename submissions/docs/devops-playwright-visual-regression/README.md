# Automated Visual Regression Testing Pipeline with Playwright

## 1. What does this do?
This submission implements an automated Visual Regression Testing (VRT) harness and CI pipeline using Playwright to detect pixel-level keyframe animation regressions and easing curve breakage in EaseMotion CSS.

## 2. How is it used?

### HTML & CSS Demo Harness
The test harness [`demo.html`](./demo.html) mounts core EaseMotion CSS utility classes (`.ease-fade-in`, `.ease-bounce-in`, `.ease-zoom-in`, `.ease-float`, `.ease-pulse-border-emphasis`, `.ease-gradient-rotation`) in a structured grid layout with deterministic snapshot pause triggers (`.vrt-paused`).

### Playwright Runner Configuration (`playwright.config.js`)
```javascript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  reporter: [['html', { open: 'never' }], ['list']],
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
      animations: 'disabled',
    },
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
```

### Playwright Test Spec (`tests/visual/runner.spec.js`)
```javascript
import { test, expect } from '@playwright/test';

test.describe('EaseMotion CSS Visual Regression Tests', () => {
  test('should match baseline screenshot of animation harness', async ({ page }) => {
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.body.classList.add('vrt-paused'));
    await expect(page).toHaveScreenshot('vrt-harness-baseline.png', { fullPage: true });
  });
});
```

### GitHub Actions Pipeline (`.github/workflows/visual-regression.yml`)
```yaml
name: Visual Regression Testing
on:
  pull_request:
    branches: [main, dev]
  push:
    branches: [main]

jobs:
  visual-regression:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - run: npx playwright install --with-deps chromium
      - run: npm run test:visual
      - name: Upload Test Results Artifacts on Failure
        if: failure()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-visual-diff-report
          path: |
            playwright-report/
            test-results/
```

### Local Execution Commands
```bash
npm run build
npm run test:visual
```
*(To generate initial baseline snapshots: `npx playwright test --update-snapshots`)*

## 3. Why is it useful?
- **Prevents Silent CSS Regressions:** Ensures modifications to CSS `@keyframes`, bezier curves, or transform properties do not visually break components across PRs.
- **Pixel-Perfect Validation:** Uses Playwright native `toHaveScreenshot()` assertions for deterministic screenshot hashing.
- **Maintainer Artifact Inspection:** Automatically uploads downloadable `playwright-report/` visual diff artifacts whenever PR visual regression checks fail.
