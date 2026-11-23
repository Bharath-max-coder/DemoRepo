class CommonActions {

    constructor(page) {
        this.page = page;
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async select(locator, value) {
        await locator.selectOption({ label: value });
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async waitForElement(locator) {
        await locator.waitFor();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }
}

module.exports = CommonActions;



  