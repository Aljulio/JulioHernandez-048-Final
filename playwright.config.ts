import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  workers: 1,

  use: {
    baseURL: 'https://buggy.justtestit.org/',
    headless: false,

    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'retain-on-failure',

    launchOptions: {
      slowMo: 500
    }
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});