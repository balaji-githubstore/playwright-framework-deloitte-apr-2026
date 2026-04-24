import { test, expect } from '../fixtures/base.js';
import { invalidLoginData } from '../utils/data-source.js'
import { JsonUtils } from '../utils/json-utlis.js'

test.describe("OrangeHRM Login Function  Tests", () => {

  for (const { username, password, expected_error } of invalidLoginData) {
    test(`verify invalid login: ${username} and ${password}`, async ({ page }) => {
      await page.locator("xpath=//input[@name='username']").fill(username)
      await page.locator("xpath=//input[@name='password']").fill(password)
      await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
      await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText(expected_error)
    });
  }

  for (const { username, password, expected_error } of JsonUtils.getJson('invalidLoginData')) {
    test(`verify invalid login from json: ${username} and ${password}`, async ({ page }) => {
      await page.locator("xpath=//input[@name='username']").fill(username)
      await page.locator("xpath=//input[@name='password']").fill(password)
      await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
      await expect(page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText(expected_error)
    });
  }

  for (const { username, password, expected_value } of JsonUtils.getJson('validLoginData')) {
    test(`verify valid login: ${username} and ${password}`, async ({ page }) => {
      await page.locator("xpath=//input[@name='username']").fill(username)
      await page.locator("xpath=//input[@name='password']").fill(password)
      await page.locator("xpath=//button[contains(normalize-space(),'Login')]").click()
      await expect(page.locator("xpath=//h6[text()='Dashboard']")).toHaveText(expected_value)
    });
  }
})