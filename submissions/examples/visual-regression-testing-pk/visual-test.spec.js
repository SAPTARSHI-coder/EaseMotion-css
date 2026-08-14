// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

const DEMO_PATH = path.resolve(__dirname, '../../submissions/examples/visual-regression-testing-pk/demo.html');

const SECTIONS = [
  'buttons', 'cards', 'badges', 'forms', 'tooltips',
  'loaders', 'skeleton', 'navbar', 'modals', 'toasts',
  'pagination', 'breadcrumbs', 'tabs', 'avatars', 'chips',
  'progress', 'tags', 'connection-status',
];

test.describe('Visual Regression — EaseMotion Components', () => {
  SECTIONS.forEach((section) => {
    test(`${section} should match the baseline screenshot`, async ({ page }) => {
      await page.goto(`file://${DEMO_PATH}`);
      await page.waitForLoadState('networkidle');

      const sectionEl = page.locator(`section[data-testid="${section}"]`);
      await expect(sectionEl).toBeVisible({ timeout: 10000 });

      await expect(sectionEl).toHaveScreenshot(`${section}.png`, {
        maxDiffPixelRatio: 0.02,
        animations: 'disabled',
      });
    });
  });
});
