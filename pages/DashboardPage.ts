import { expect, type Page } from '../fixtures/base.js'
import { PlaywrightKeywords } from './basepage/PlaywrightKeywords.js'

const DASHBOARD_LOCATOR = "xpath=//h6[text()='Dashboard']"

class DashboardPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page)
    }


    async verifyDashboardHeader(expected_error: string): Promise<void> {
        await expect(this.page.locator(DASHBOARD_LOCATOR)).toHaveText(expected_error)
    }
}

export { DashboardPage }