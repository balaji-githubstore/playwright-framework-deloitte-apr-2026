const { test, expect } = require('@playwright/test');

test.describe('Orange HRM Login Header Validation', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://opensource-demo.orangehrmlive.com/');
  });

  test('should display Login header on the page', async ({ page }) => {
    // Verify the page title
    await expect(page).toHaveTitle('OrangeHRM');
    
    // Verify the Login heading is visible
    const loginHeading = page.locator('h5:has-text("Login")');
    await expect(loginHeading).toBeVisible();
    
    // Verify the Login heading contains correct text
    await expect(loginHeading).toHaveText('Login');
  });

  test('should display all login form elements under the header', async ({ page }) => {
    // Verify Login header is present
    const loginHeading = page.locator('h5:has-text("Login")');
    await expect(loginHeading).toBeVisible();
    
    // Verify Username label is visible
    const usernameLabel = page.locator('text=Username');
    await expect(usernameLabel).toBeVisible();
    
    // Verify Password label is visible
    const passwordLabel = page.locator('text=Password');
    await expect(passwordLabel).toBeVisible();
    
    // Verify Login button is visible
    const loginButton = page.locator('button:has-text("Login")');
    await expect(loginButton).toBeVisible();
  });

  test('should verify Login header is properly positioned', async ({ page }) => {
    // Get the Login heading element
    const loginHeading = page.locator('h5:has-text("Login")');
    
    // Verify heading is visible in viewport
    await expect(loginHeading).toBeInViewport();
    
    // Verify the heading has the correct level (h5)
    const tagName = await loginHeading.evaluate(el => el.tagName.toLowerCase());
    expect(tagName).toBe('h5');
  });

  test('should verify page structure with Login header at the top', async ({ page }) => {
    // Get the OrangeHRM logo
    const logoImg = page.locator('img[alt="company-branding"]');
    
    // Get the Login heading
    const loginHeading = page.locator('h5:has-text("Login")');
    
    // Verify logo is visible before the heading
    await expect(logoImg).toBeVisible();
    await expect(loginHeading).toBeVisible();
    
    // Verify they are in the correct order (logo should come before heading in the DOM)
    const logoBoxModel = await logoImg.boundingBox();
    const headingBoxModel = await loginHeading.boundingBox();
    
    expect(logoBoxModel.y).toBeLessThan(headingBoxModel.y);
  });
});
