import { expect, type Page, type Locator } from '../../fixtures/base.js'

class PlaywrightKeywords {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // ==================== Text/Input Operations ====================

    /**
     * Fill text input field
     */
    async sendTextToElement(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text);
    }

    /**
     * Clear text from input field
     */
    async clearInputField(locator: string): Promise<void> {
        await this.page.locator(locator).clear();
    }

    /**
     * Type text character by character (slower, useful for special keyboard events)
     */
    async typeText(locator: string, text: string, delayMs: number = 0): Promise<void> {
        await this.page.locator(locator).type(text, { delay: delayMs });
    }

    /**
     * Get text content of an element
     */
    async getElementText(locator: string): Promise<string> {
        return await this.page.locator(locator).textContent() || '';
    }

    /**
     * Get input field value
     */
    async getInputValue(locator: string): Promise<string> {
        return await this.page.locator(locator).inputValue();
    }

    /**
     * Fill text and trigger input event
     */
    async fillAndValidate(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text);
        await this.page.locator(locator).evaluate((el: any) => {
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    // ==================== Click Operations ====================

    /**
     * Click on element
     */
    async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    /**
     * Click element with force option (ignore visibility)
     */
    async clickElementForced(locator: string): Promise<void> {
        await this.page.locator(locator).click({ force: true });
    }

    /**
     * Double click on element
     */
    async doubleClickElement(locator: string): Promise<void> {
        await this.page.locator(locator).dblclick();
    }

    /**
     * Right click on element (context menu)
     */
    async rightClickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click({ button: 'right' });
    }

    /**
     * Click at specific coordinates
     */
    async clickAtCoordinates(x: number, y: number): Promise<void> {
        await this.page.mouse.click(x, y);
    }

    /**
     * Click element by index (for multiple matches)
     */
    async clickElementByIndex(locator: string, index: number): Promise<void> {
        await this.page.locator(locator).nth(index).click();
    }

    // ==================== Wait/Visibility Operations ====================

    /**
     * Wait for element to be visible
     */
    async waitForElement(locator: string, timeoutMs: number = 30000): Promise<void> {
        await this.page.locator(locator).waitFor({ state: 'visible', timeout: timeoutMs });
    }

    /**
     * Wait for element to be hidden
     */
    async waitForElementHidden(locator: string, timeoutMs: number = 30000): Promise<void> {
        await this.page.locator(locator).waitFor({ state: 'hidden', timeout: timeoutMs });
    }

    /**
     * Wait for element to be attached to DOM
     */
    async waitForElementAttached(locator: string, timeoutMs: number = 30000): Promise<void> {
        await this.page.locator(locator).waitFor({ state: 'attached', timeout: timeoutMs });
    }

    /**
     * Wait for navigation to complete
     */
    async waitForNavigation(urlPattern?: string | RegExp): Promise<void> {
        if (urlPattern) {
            await this.page.waitForURL(urlPattern);
        } else {
            await this.page.waitForLoadState('networkidle');
        }
    }

    /**
     * Wait for function to return true
     */
    async waitForCondition(conditionFn: () => Promise<boolean>, timeoutMs: number = 30000): Promise<void> {
        const startTime = Date.now();
        while (Date.now() - startTime < timeoutMs) {
            if (await conditionFn()) {
                return;
            }
            await this.page.waitForTimeout(500);
        }
        throw new Error(`Condition not met within ${timeoutMs}ms`);
    }

    // ==================== Selection/Dropdown Operations ====================

    /**
     * Select option from dropdown by label
     */
    async selectByLabel(locator: string, label: string): Promise<void> {
        await this.page.locator(locator).selectOption({ label });
    }

    /**
     * Select option from dropdown by value
     */
    async selectByValue(locator: string, value: string): Promise<void> {
        await this.page.locator(locator).selectOption({ value });
    }

    /**
     * Select option from dropdown by index
     */
    async selectByIndex(locator: string, index: number): Promise<void> {
        const options = await this.page.locator(`${locator} option`).count();
        if (index >= 0 && index < options) {
            await this.page.locator(locator).selectOption({ index });
        }
    }

    /**
     * Get all selected options from multi-select dropdown
     */
    async getSelectedOptions(locator: string): Promise<string[]> {
        return await this.page.locator(locator).evaluate((select: any) =>
            Array.from(select.selectedOptions, (option: any) => option.value)
        );
    }

    /**
     * Get all available options from dropdown
     */
    async getAllDropdownOptions(locator: string): Promise<string[]> {
        return await this.page.locator(`${locator} option`).allTextContents();
    }

    /**
     * Check checkbox or radio button
     */
    async checkElement(locator: string): Promise<void> {
        await this.page.locator(locator).check();
    }

    /**
     * Uncheck checkbox
     */
    async uncheckElement(locator: string): Promise<void> {
        await this.page.locator(locator).uncheck();
    }

    /**
     * Toggle checkbox state
     */
    async toggleCheckbox(locator: string): Promise<void> {
        const isChecked = await this.page.locator(locator).isChecked();
        if (isChecked) {
            await this.uncheckElement(locator);
        } else {
            await this.checkElement(locator);
        }
    }

    /**
     * Check if element is checked
     */
    async isElementChecked(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isChecked();
    }

    // ==================== Visibility/State Checks ====================

    /**
     * Check if element is visible
     */
    async isElementVisible(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isVisible();
    }

    /**
     * Check if element is hidden
     */
    async isElementHidden(locator: string): Promise<boolean> {
        return !(await this.isElementVisible(locator));
    }

    /**
     * Check if element is enabled
     */
    async isElementEnabled(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isEnabled();
    }

    /**
     * Check if element is disabled
     */
    async isElementDisabled(locator: string): Promise<boolean> {
        return !(await this.isElementEnabled(locator));
    }

    /**
     * Check if element exists in DOM
     */
    async doesElementExist(locator: string): Promise<boolean> {
        return (await this.page.locator(locator).count()) > 0;
    }

    /**
     * Get count of elements matching locator
     */
    async getElementCount(locator: string): Promise<number> {
        return await this.page.locator(locator).count();
    }

    // ==================== Assertions ====================

    /**
     * Assert element is visible
     */
    async assertElementVisible(locator: string): Promise<void> {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    /**
     * Assert element is hidden
     */
    async assertElementHidden(locator: string): Promise<void> {
        await expect(this.page.locator(locator)).toBeHidden();
    }

    /**
     * Assert element is enabled
     */
    async assertElementEnabled(locator: string): Promise<void> {
        await expect(this.page.locator(locator)).toBeEnabled();
    }

    /**
     * Assert element is disabled
     */
    async assertElementDisabled(locator: string): Promise<void> {
        await expect(this.page.locator(locator)).toBeDisabled();
    }

    /**
     * Assert element contains text
     */
    async assertElementContainsText(locator: string, text: string): Promise<void> {
        await expect(this.page.locator(locator)).toContainText(text);
    }

    /**
     * Assert element has exact text
     */
    async assertElementHasText(locator: string, text: string): Promise<void> {
        await expect(this.page.locator(locator)).toHaveText(text);
    }

    /**
     * Assert page title
     */
    async assertPageTitle(title: string): Promise<void> {
        await expect(this.page).toHaveTitle(title);
    }

    /**
     * Assert page URL
     */
    async assertPageURL(urlPattern: string | RegExp): Promise<void> {
        await expect(this.page).toHaveURL(urlPattern);
    }

    /**
     * Assert element has attribute
     */
    async assertElementHasAttribute(locator: string, attribute: string, value?: string): Promise<void> {
        if (value) {
            await expect(this.page.locator(locator)).toHaveAttribute(attribute, value);
        } else {
            await expect(this.page.locator(locator)).toHaveAttribute(attribute, /.*?/);
        }
    }

    // ==================== Navigation ====================

    /**
     * Navigate to URL
     */
    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    /**
     * Navigate to URL with specific wait condition
     */
    async navigateToWithWait(url: string, waitForSelector?: string): Promise<void> {
        await this.page.goto(url);
        if (waitForSelector) {
            await this.waitForElement(waitForSelector);
        }
    }

    /**
     * Go back in browser history
     */
    async goBack(): Promise<void> {
        await this.page.goBack();
    }

    /**
     * Go forward in browser history
     */
    async goForward(): Promise<void> {
        await this.page.goForward();
    }

    /**
     * Reload page
     */
    async reloadPage(): Promise<void> {
        await this.page.reload();
    }

    /**
     * Get current page URL
     */
    async getCurrentURL(): Promise<string> {
        return this.page.url();
    }

    /**
     * Get page title
     */
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    // ==================== Keyboard Operations ====================

    /**
     * Press keyboard key
     */
    async pressKey(key: string): Promise<void> {
        await this.page.keyboard.press(key);
    }

    /**
     * Press keyboard key on specific element
     */
    async pressKeyOnElement(locator: string, key: string): Promise<void> {
        await this.page.locator(locator).press(key);
    }

    /**
     * Keyboard shortcut (Ctrl+C, Ctrl+V, etc.)
     */
    async keyboardShortcut(keys: string): Promise<void> {
        await this.page.keyboard.press(keys);
    }

    /**
     * Type multiple keys in sequence
     */
    async typeKeys(keys: string[]): Promise<void> {
        for (const key of keys) {
            await this.page.keyboard.press(key);
        }
    }

    // ==================== Mouse Operations ====================

    /**
     * Hover over element
     */
    async hoverElement(locator: string): Promise<void> {
        await this.page.locator(locator).hover();
    }

    /**
     * Move mouse to coordinates
     */
    async moveMouseToCoordinates(x: number, y: number): Promise<void> {
        await this.page.mouse.move(x, y);
    }

    /**
     * Scroll element into view
     */
    async scrollIntoView(locator: string): Promise<void> {
        await this.page.locator(locator).scrollIntoViewIfNeeded();
    }

    /**
     * Scroll to top of page
     */
    async scrollToTop(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, 0));
    }

    /**
     * Scroll to bottom of page
     */
    async scrollToBottom(): Promise<void> {
        await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    }

    /**
     * Scroll by specific amount
     */
    async scrollByAmount(x: number, y: number): Promise<void> {
        await this.page.evaluate(([scrollX, scrollY]) => {
            window.scrollBy(scrollX, scrollY);
        }, [x, y]);
    }

    // ==================== Attribute/Property Operations ====================

    /**
     * Get attribute value
     */
    async getAttributeValue(locator: string, attribute: string): Promise<string | null> {
        return await this.page.locator(locator).getAttribute(attribute);
    }

    /**
     * Set attribute value
     */
    async setAttributeValue(locator: string, attribute: string, value: string): Promise<void> {
        await this.page.locator(locator).evaluate(
            ([attr, val], element: any) => element.setAttribute(attr, val),
            [attribute, value]
        );
    }

    /**
     * Remove attribute
     */
    async removeAttribute(locator: string, attribute: string): Promise<void> {
        await this.page.locator(locator).evaluate(
            (attr, element: any) => element.removeAttribute(attr),
            attribute
        );
    }

    /**
     * Get CSS property value
     */
    async getCSSProperty(locator: string, property: string): Promise<string> {
        return await this.page.locator(locator).evaluate(
            (prop, element: any) => window.getComputedStyle(element).getPropertyValue(prop),
            property
        ) || '';
    }

    /**
     * Get element's bounding box
     */
    async getElementBoundingBox(locator: string): Promise<{ x: number; y: number; width: number; height: number } | null> {
        return await this.page.locator(locator).boundingBox();
    }

    // ==================== Table Operations ====================

    /**
     * Get all table row data
     */
    async getTableData(tableLocator: string): Promise<string[][]> {
        const rows = await this.page.locator(`${tableLocator} tbody tr`).count();
        const data: string[][] = [];

        for (let i = 0; i < rows; i++) {
            const cells = await this.page.locator(`${tableLocator} tbody tr`).nth(i).locator('td').allTextContents();
            data.push(cells);
        }
        return data;
    }

    /**
     * Get specific table cell value
     */
    async getTableCellValue(tableLocator: string, rowIndex: number, colIndex: number): Promise<string> {
        return await this.page.locator(
            `${tableLocator} tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
        ).textContent() || '';
    }

    /**
     * Get table headers
     */
    async getTableHeaders(tableLocator: string): Promise<string[]> {
        return await this.page.locator(`${tableLocator} thead th`).allTextContents();
    }

    /**
     * Get table row count
     */
    async getTableRowCount(tableLocator: string): Promise<number> {
        return await this.page.locator(`${tableLocator} tbody tr`).count();
    }

    /**
     * Click table cell by row and column
     */
    async clickTableCell(tableLocator: string, rowIndex: number, colIndex: number): Promise<void> {
        await this.page.locator(
            `${tableLocator} tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
        ).click();
    }

    // ==================== List/Multiple Elements Operations ====================

    /**
     * Get all text from elements matching locator
     */
    async getAllElementsText(locator: string): Promise<string[]> {
        return await this.page.locator(locator).allTextContents();
    }

    /**
     * Click element by partial text match
     */
    async clickElementByText(locator: string, text: string): Promise<void> {
        const element = this.page.locator(`${locator}:has-text("${text}")`);
        const count = await element.count();
        if (count === 0) {
            throw new Error(`Element with text "${text}" not found`);
        }
        await element.first().click();
    }

    /**
     * Check if any element matches condition
     */
    async elementExistsWithText(locator: string, text: string): Promise<boolean> {
        const count = await this.page.locator(`${locator}:has-text("${text}")`).count();
        return count > 0;
    }

    /**
     * Get index of element by text
     */
    async getElementIndexByText(locator: string, text: string): Promise<number> {
        const elements = await this.page.locator(locator).allTextContents();
        return elements.findIndex(el => el.includes(text));
    }

    // ==================== Dialog/Alert Operations ====================

    /**
     * Handle alert dialog (accept)
     */
    async acceptAlert(): Promise<string> {
        let alertText = '';
        this.page.once('dialog', dialog => {
            alertText = dialog.message();
            dialog.accept();
        });
        return alertText;
    }

    /**
     * Handle alert dialog (dismiss)
     */
    async dismissAlert(): Promise<string> {
        let alertText = '';
        this.page.once('dialog', dialog => {
            alertText = dialog.message();
            dialog.dismiss();
        });
        return alertText;
    }

    // ==================== File Upload Operations ====================

    /**
     * Upload file to input
     */
    async uploadFile(locator: string, filePath: string): Promise<void> {
        await this.page.locator(locator).setInputFiles(filePath);
    }

    /**
     * Upload multiple files
     */
    async uploadMultipleFiles(locator: string, filePaths: string[]): Promise<void> {
        await this.page.locator(locator).setInputFiles(filePaths);
    }

    // ==================== Utility Operations ====================

    /**
     * Execute JavaScript code
     */
    async executeScript<T>(script: string | ((arg: any) => T), args?: any): Promise<T> {
        return await this.page.evaluate(script as any, args);
    }

    /**
     * Take screenshot of element
     */
    async takeElementScreenshot(locator: string, fileName: string): Promise<Buffer> {
        return await this.page.locator(locator).screenshot({ path: fileName });
    }

    /**
     * Take full page screenshot
     */
    async takePageScreenshot(fileName: string): Promise<Buffer> {
        return await this.page.screenshot({ path: fileName, fullPage: true });
    }

    /**
     * Add delay/wait
     */
    async wait(delayMs: number): Promise<void> {
        await this.page.waitForTimeout(delayMs);
    }

    /**
     * Get page source/HTML
     */
    async getPageSource(): Promise<string> {
        return await this.page.content();
    }

    /**
     * Get specific element's HTML
     */
    async getElementHTML(locator: string): Promise<string> {
        return await this.page.locator(locator).evaluate((el: any) => el.outerHTML);
    }

    /**
     * Get element's inner HTML
     */
    async getElementInnerHTML(locator: string): Promise<string> {
        return await this.page.locator(locator).evaluate((el: any) => el.innerHTML);
    }

    /**
     * Close page/browser
     */
    async closePage(): Promise<void> {
        await this.page.close();
    }
}

export { PlaywrightKeywords }