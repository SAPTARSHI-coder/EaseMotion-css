const { test, expect } = require('@playwright/test');
const freezeAnimations = require('../scripts/freezeAnimation');

test('hinge animation renders correctly at 500ms', async ({ page }) => {
  await page.goto('/hinge.html');

  // Freeze animation halfway through to capture reliable snapshot
  await freezeAnimations(page, 500);

  // Assert visual regression
  await expect(page).toHaveScreenshot('hinge-500ms.png');
});
