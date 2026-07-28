const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Visual Regression Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Load the local HTML fixture file
    const filePath = `file://${path.resolve(__dirname, 'fixtures/components.html')}`;
    await page.goto(filePath);
  });

  test('Buttons render correctly', async ({ page }) => {
    const section = page.locator('#buttons');
    await expect(section).toHaveScreenshot('buttons.png');
  });

  test('Cards render correctly', async ({ page }) => {
    const section = page.locator('#cards');
    await expect(section).toHaveScreenshot('cards.png');
  });

  test('Badges render correctly', async ({ page }) => {
    const section = page.locator('#badges');
    await expect(section).toHaveScreenshot('badges.png');
  });

  test('Hover card animates correctly on hover', async ({ page }) => {
    const hoverCard = page.locator('.ease-card-hover');
    await hoverCard.hover();
    // Small delay to let CSS transition finish
    await page.waitForTimeout(400); 
    await expect(hoverCard).toHaveScreenshot('card-hovered.png');
  });
});
