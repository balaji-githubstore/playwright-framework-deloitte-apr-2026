import { expect, type Page } from '../fixtures/base.js'


class LoginPage {
    private readonly page: any;

    constructor(page: Page) {
        this.page = page;
    }

    async fillUsername(username: string): Promise<void> {
        await this.page.locator("xpath=//input[@name='username']").fill(username)
    }
    async fillPassword(password: string): Promise<void> {
        await this.page.locator("xpath=//input[@name='password']").fill(password)
    }
    async clickLogin(): Promise<void> {
        await this.page.locator("xpath=//input[@name='password']").click()
    }
    async verifyInvalidErrorMessage(expected_error: string) {
        await expect(this.page.locator("xpath=//p[text()='Invalid credentials']")).toHaveText(expected_error)
    }

}