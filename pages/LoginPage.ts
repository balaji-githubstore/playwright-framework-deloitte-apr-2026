import { expect, type Page } from '../fixtures/base.js'

const USERNAME_LOCATOR = "xpath=//input[@name='username']"
const PASSWORD_LOCATOR = "xpath=//input[@name='password']"
const LOGIN_LOCATOR = "xpath=//button[contains(normalize-space(),'Login')]"
const ERROR_LOCATOR = "xpath=//p[text()='Invalid credentials']"

class LoginPage {
    private readonly page: any;

    constructor(page: Page) {
        this.page = page;
    }

    async fillUsername(username: string): Promise<void> {
        await this.page.locator(USERNAME_LOCATOR).fill(username)
    }
    async fillPassword(password: string): Promise<void> {
        await this.page.locator(PASSWORD_LOCATOR).fill(password)
    }
    async clickLogin(): Promise<void> {
        await this.page.locator(LOGIN_LOCATOR).click()
    }
    async verifyInvalidErrorMessage(expected_error: string): Promise<void> {
        await expect(this.page.locator(ERROR_LOCATOR)).toHaveText(expected_error)
    }
    async verifyUserNamePlaceholder(): Promise<void> {
        await expect.soft(this.page.locator(USERNAME_LOCATOR)).toHaveAttribute('placeholder', 'Username')
    }
}

export { LoginPage }