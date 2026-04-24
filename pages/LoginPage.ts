import { expect, type Page } from '../fixtures/base.js'
import { PlaywrightKeywords } from './basepage/PlaywrightKeywords.js'

const USERNAME_LOCATOR: string = "xpath=//input[@name='username']"
const PASSWORD_LOCATOR: string = "xpath=//input[@name='password']"
const LOGIN_LOCATOR: string = "xpath=//button[contains(normalize-space(),'Login')]"
const ERROR_LOCATOR: string = "xpath=//p[text()='Invalid credentials']"

class LoginPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page)
    }

    async fillUsername(username: string): Promise<void> {
        // await this.page.locator(USERNAME_LOCATOR).fill(username)
        await this.sendTextToElement(USERNAME_LOCATOR, username);
    }
    async fillPassword(password: string): Promise<void> {
        // await this.page.locator(PASSWORD_LOCATOR).fill(password)
        await this.sendTextToElement(USERNAME_LOCATOR, password);
    }
    async clickLogin(): Promise<void> {
        // await this.page.locator(LOGIN_LOCATOR).click()
        await this.clickElement(LOGIN_LOCATOR);
    }
    async verifyInvalidErrorMessage(expected_error: string): Promise<void> {
        await expect(this.page.locator(ERROR_LOCATOR)).toHaveText(expected_error)
    }
    async verifyUserNamePlaceholder(placeholderValue: string): Promise<void> {
        await expect.soft(this.page.locator(USERNAME_LOCATOR)).toHaveAttribute('placeholder', placeholderValue)
    }
    async verifyPasswordPlaceholder(placeholderValue: string): Promise<void> {
        await expect.soft(this.page.locator(PASSWORD_LOCATOR)).toHaveAttribute('placeholder', placeholderValue)
        // await this.assertElementHasAttribute(PASSWORD_LOCATOR, 'placeholder', placeholderValue);
    }
}

export { LoginPage }