const { test, expect } = require('@playwright/test');
const freezeAnimations = require('../scripts/freezeAnimation');

test('flip-x animation renders correctly at 500ms', async ({ page }) => {
  await page.goto('/flip-x.html');

  // Freeze animation halfway through to capture reliable snapshot
  await freezeAnimations(page, 500);

  // Assert visual regression
  await expect(page).toHaveScreenshot('flip-x-500ms.png');
});
