import { test, expect } from '../fixtures/base.js';

test.describe("OrangeHRM Login Function  Tests", () => {
  
  test('verify invalid login', async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill('john')
    await page.locator("xpath=//input[@name='password']").fill('john123')
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
    await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText('Invalid credentials')
  });

  test('verify valid login', async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill('Admin')
    await page.locator("xpath=//input[@name='password']").fill('admin123')
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
    await expect(page.locator("xpath=//h6[text()='Dashboard']")).toHaveText('Dashboard')
    // await expect(page.locator("xpath=//h6[text()='Dashboard']")).toBeVisible()
  });
})