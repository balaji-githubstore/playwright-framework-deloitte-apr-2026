import { expect, type Page } from '../fixtures/base.js'

const DASHBOARD_LOCATOR = "xpath=//h6[text()='Dashboard']"

class DashboardPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyDashboardHeader(expected_error: string): Promise<void> {
        await expect(this.page.locator(DASHBOARD_LOCATOR)).toHaveText(expected_error)
    }
}

export { DashboardPage }