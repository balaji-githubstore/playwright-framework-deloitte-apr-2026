import { expect, type Page } from '../../fixtures/base.js'

class PlaywrightKeywords {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async sendTextToElement(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text)
    }

    async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }
}

export { PlaywrightKeywords }