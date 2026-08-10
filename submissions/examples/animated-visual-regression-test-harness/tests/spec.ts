import { test, expect } from '@playwright/test';

test.describe('Ease Classes Visual Regression', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/demo.html');
  });

  test('ease-in screenshot', async ({ page }) => {
    const box = page.locator('.ease-in');
    await expect(box).toHaveScreenshot('ease-in.png');
  });

  test('ease-out screenshot', async ({ page }) => {
    const box = page.locator('.ease-out');
    await expect(box).toHaveScreenshot('ease-out.png');
  });

  test('ease-in-out screenshot', async ({ page }) => {
    const box = page.locator('.ease-in-out');
    await expect(box).toHaveScreenshot('ease-in-out.png');
  });
});