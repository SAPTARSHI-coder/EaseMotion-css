const { test, expect } = require('@playwright/test');
const fs = require('fs');
const pixelmatch = require('pixelmatch');
const { PNG } = require('pngjs');

test('Demo component visual regression', async ({ page }) => {
  await page.goto('http://localhost:3000/submissions/examples/scroll-top-button/demo.html');
  const screenshot = await page.screenshot();

  const baseline = PNG.sync.read(fs.readFileSync('baseline/scroll-top.png'));
  const current = PNG.sync.read(screenshot);

  const { width, height } = baseline;
  const diff = new PNG({ width, height });

  const mismatches = pixelmatch(baseline.data, current.data, diff.data, width, height, { threshold: 0.1 });

  expect(mismatches).toBeLessThan(50); // allow small differences
});
