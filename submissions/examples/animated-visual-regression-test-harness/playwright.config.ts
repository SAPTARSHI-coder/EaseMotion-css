import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'on',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});