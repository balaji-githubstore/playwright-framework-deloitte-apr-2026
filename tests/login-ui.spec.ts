import { test, expect } from '../fixtures/base.js';

test.describe("OrangeHRM Login UI Tests", () => {

  test('verify title', async ({ page }) => {
    await expect(page).toHaveTitle('OrangeHRM')
  });

  //test for header, placeholder
  test('verify header', async ({ page }) => {
    await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText('Login')
  });

  //verify placeholder of username and password
  test('verify placeholder', async ({ page }) => {
    await expect.soft(page.locator("xpath=//input[@name='username']")).toHaveAttribute('placeholder', 'Username')
    await expect.soft(page.locator("xpath=//input[@name='password']")).toHaveAttribute('placeholder', 'Password')
  })
})






