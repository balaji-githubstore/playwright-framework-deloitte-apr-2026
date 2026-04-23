import { test, expect } from '../fixtures/base.js';

test.describe("Employee management tests", () => {
  test('verify adding new employee', async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill('Admin')
    await page.locator("xpath=//input[@name='password']").fill('admin123')
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
   
    //click on PiM menu
    //click on Add Employee
    //enter firstname as john
    //enter middle name as w
    //enter lastname as wick
    //click on save
    //validate profile name - john wick
    //validate firstname in the textbox 
    //await expect.soft(page.locator("xpath=//input[@name='username']")).toHaveAttribute('value', 'john')
   
  });
})