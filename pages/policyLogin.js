const CommonActions = require('../utils/CommonActions');
const locator = require('../locators/PolicyLoginLocators');

class PolicyLoginPage extends CommonActions {
    constructor(page) {
        super(page);
        this.username = page.locator(locator.username);
        this.password = page.locator(locator.password);
        this.loginButton = page.locator(locator.loginButton);
    }
    async enterLoginDetails(data) {
        await this.fill(this.username, data.username);
        await this.fill(this.password, data.password);
    }

    async clickLogin() {
        await this.click(this.loginButton);
    }
    async isUserScreenDisplayed() {
        return await this.page.locator('#userscreen').isVisible();
    }
}