import { test, expect } from '../fixtures/base.js';
import { LoginPage } from '../pages/LoginPage.js';
import { MainPage } from '../pages/MainPage.js';

test.describe("Employee management tests", () => {
  test('verify adding new employee', async ({ page }) => {
     const loginPage = new LoginPage(page);
     await loginPage.fillUsername("Admin");
     await loginPage.fillPassword("admin123");
     await loginPage.clickLogin();
     
    //  MainPage
    const mainPage=new MainPage(page);
    //click on PiM menu
    await mainPage.clickOnPIMMenu();

    //PIMPage
    //click on Add Employee

    //AddEmployeePage
    //enter firstname as john
    //enter middle name as w
    //enter lastname as wick
    //click on save

    //PersonDetailPage 
    //validate profile name - john wick
    //validate firstname in the textbox 
    //await expect.soft(page.locator("xpath=//input[@name='username']")).toHaveAttribute('value', 'john')
   
  });
})