import { test, expect } from '../fixtures/base.js';

test.describe("Employee management tests", () => {
  test('verify adding new employee', async ({ page }) => {
    await page.locator("xpath=//input[@name='username']").fill('Admin')
    await page.locator("xpath=//input[@name='password']").fill('admin123')
    await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
   
    //click on PiM menu
    await page.locator("//span[text()='PIM']").click()

    //click on Add Employee
    await page.locator("//a[text()='Add Employee']").click()

    //enter firstname as john
    await page.locator("//input[@name='firstName']").fill('John')

    //enter middle name as w
    await page.locator("//input[@name='middleName']").fill('W')

    //enter lastname as wick
    await page.locator("//input[@name='lastName']").fill('Wick')

    //click on save
    await page.locator("//button[contains(normalize-space(),'Save')]").click()

    // await page.waitForTimeout(10000)
    //validate profile name - john wick
    await expect(page.locator("//h6[text()='John Wick']")).toHaveText('John Wick')

    //validate firstname in the textbox 
    await expect(page.locator("xpath=//input[@name='firstName']")).toHaveValue('John')
   
  });
})