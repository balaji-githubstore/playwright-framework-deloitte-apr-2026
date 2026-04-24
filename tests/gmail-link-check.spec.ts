// spec: Gmail Link Check Test
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Gmail Link Check Test', () => {
  test('Verify Gmail Link on Google Homepage', async ({ page }) => {
    // Navigate to https://www.google.com/
    await page.goto('https://www.google.com/');

    // Verify we're on the correct page
    await expect(page).toHaveTitle(/Google/);
    await expect(page).toHaveURL('https://www.google.com/');

    // Get Gmail link locator (reuse throughout test)
    const gmailLink = page.getByRole('link', { name: 'Gmail' });

    // Verify Gmail link is visible on Google homepage
    await expect(gmailLink).toBeVisible();

    // Verify Gmail link URL contains mail.google.com (using getAttribute instead of evaluate)
    await expect(gmailLink).toHaveAttribute('href', /mail\.google\.com/);

    // Verify Gmail link is interactive/clickable
    await gmailLink.hover();
  });
});