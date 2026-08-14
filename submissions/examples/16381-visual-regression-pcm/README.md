# Visual Regression Testing with Playwright

1. **What does this do?** Adds Playwright-based visual regression testing for every component — takes baseline screenshots of each component at desktop (1280×720) and mobile (375×667) viewports, then compares new screenshots against baselines on subsequent runs using `toHaveScreenshot()`. Any pixel diff is flagged in the test report.

2. **How is it used?** Place `tests/visual/playwright.config.js` and `tests/visual/components.spec.js` in the repo. Run with `npx playwright test` to compare current screenshots against stored baselines. Add `.github/workflows/visual-tests.yml` to run on every PR.

```bash
npx playwright install chromium
npx playwright test --config=tests/visual/playwright.config.js

# Results:
#   ✓ desktop/buttons matches snapshot (1.2s)
#   ✓ desktop/cards matches snapshot (0.9s)
#   ✓ mobile/buttons matches snapshot (1.1s)
#   ...
#   12 passed (24.3s)
```

```bash
# Update baselines after intentional visual changes:
npx playwright test --update-snapshots
```

3. **Why is it useful?** The project only has smoke tests that check for CSS class presence — no tests catch unintended visual changes when CSS is modified. A change to `core/utilities.css` could break the card layout, button alignment, or toast positioning without any automated detection. Visual regression tests catch pixel-level regressions across 6+ components × 2 viewports = 12 screenshot comparisons per run.

### Files

| File | Purpose |
|---|---|
| `tests/visual/playwright.config.js` | Playwright config with desktop + mobile projects |
| `tests/visual/components.spec.js` | 6 component tests with `toHaveScreenshot()` |
| `.github/workflows/visual-tests.yml` | CI workflow running on PR |

### Components Tested

| Component | Desktop (1280×720) | Mobile (375×667) |
|---|---|---|
| Buttons | ✓ | ✓ |
| Cards | ✓ | ✓ |
| Toast | ✓ | ✓ |
| Modal | ✓ | ✓ |
| Breadcrumb | ✓ | ✓ |
| Split Button | ✓ | ✓ |

Fixes #16381
