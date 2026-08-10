# EaseMotion — Visual Regression Testing Demo

This directory contains a **visual regression test demo** for EaseMotion CSS. 
It provides a reference page rendering all core components for screenshot-based comparison testing.

## What's Included

| File | Purpose |
|------|---------|
| `demo.html` | Renders every EaseMotion component in a single page, each wrapped in a `<section>` with a `data-testid` attribute for easy Playwright selectors |
| `style.css` | Minimal layout styles for the demo page |
| `playwright.config.js` | Playwright configuration for visual testing |
| `visual-test.spec.js` | Test spec that captures screenshots per component and compares against baselines |

## Setup

```bash
# Install Playwright
npm install --save-dev @playwright/test
npx playwright install chromium

# Generate initial baseline screenshots
npx playwright test --update-snapshots

# Run visual regression tests
npx playwright test
```

## CI Integration

Add this GitHub Actions workflow to `.github/workflows/visual-regression.yml`:

```yaml
name: Visual Regression
on: pull_request
jobs:
  visual:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx playwright install chromium
      - run: npx playwright test
```

## How It Works

1. **First run**: Playwright generates baseline screenshots from `demo.html` and stores them in the `tests/visual/snapshots/` directory.
2. **Subsequent runs**: Playwright captures new screenshots and compares them pixel-by-pixel against the baselines.
3. **PR checks**: The CI workflow fails if any screenshot differs by more than the configured threshold.

## Updating Baselines

When intentional visual changes are made:

```bash
npx playwright test --update-snapshots
git add tests/visual/snapshots/
git commit -m "chore: update visual regression baselines"
```

## Covered Components

Buttons, Cards, Badges, Forms, Tooltips, Loaders, Skeleton screens, Navbar,
Modals, Toasts, Pagination, Breadcrumbs, Tabs, Avatars, Chips, Progress bars,
Tags, Connection status indicators.
