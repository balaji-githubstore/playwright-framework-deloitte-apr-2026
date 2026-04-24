import { expect, type Page } from '../fixtures/base.js'

const PIMMENULOCATOR = "//span[text()='PIM']"

class MainPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnPIMMenu(): Promise<void> {
        this.page.locator(PIMMENULOCATOR).click();
    }
}

export { MainPage }