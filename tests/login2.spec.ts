import { test, expect } from '../fixtures/base.js';
import { invalidLoginData } from '../utils/data-source.js'
import { JsonUtils } from '../utils/json-utlis.js'
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/DashboardPage.js'

test.describe("OrangeHRM Login Function  Tests", () => {

  for (const { username, password, expected_error } of invalidLoginData) {
    test(`verify invalid login: ${username} and ${password}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.fillUsername(username);
      await loginPage.fillPassword(password);
      await loginPage.clickLogin();
      await loginPage.verifyInvalidErrorMessage(expected_error);
    });
  }

  for (const { username, password, expected_value } of JsonUtils.getJson('validLoginData')) {
    test(`verify valid login: ${username} and ${password}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.fillUsername(username);
      await loginPage.fillPassword(password);
      await loginPage.clickLogin();

      const dashboardPage = new DashboardPage(page);
      await dashboardPage.verifyDashboardHeader(expected_value);
    });
  }
});