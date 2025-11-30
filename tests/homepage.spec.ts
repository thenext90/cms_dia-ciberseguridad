import { test, expect } from '@playwright/test';

test('homepage screenshot', async ({ page }) => {
  await page.goto('http://localhost:4321');
  await page.screenshot({ path: 'tests/screenshot.png', fullPage: true });
});
