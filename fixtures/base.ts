import { test, expect } from '@playwright/test';
// import { URLPattern } from 'node:url';

 test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/auth\//);
    // await expect(page).toHaveURL({new URLPattern({ pathname: '/docs/*' })})
  });

  export {test,expect}