import { expect, type Page } from '../fixtures/base.js'

class Dashboard {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}