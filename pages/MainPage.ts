import { expect, type Page } from '../fixtures/base.js'
import { PlaywrightKeywords } from './basepage/PlaywrightKeywords.js';

const PIMMENULOCATOR = "//span[text()='PIM']"

class MainPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page)
    }

    async clickOnPIMMenu(): Promise<void> {
        this.page.locator(PIMMENULOCATOR).click();
    }
}

export { MainPage }