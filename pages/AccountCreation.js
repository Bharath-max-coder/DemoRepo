const CommonActions = require('../utils/CommonActions');
const locator = require('../locators/AccountCreationLocators');

class AccountCreationPage extends CommonActions {

    constructor(page) {
        super(page);

        this.page = page;

        this.companyName = page.locator(locator.companyName);
        this.companyExactMatch = page.locator(locator.companyExactMatch);
        this.firstNameExactMatch = page.locator(locator.firstNameExactMatch);
        this.lastNameExactMatch = page.locator(locator.lastNameExactMatch);

        this.countryDropdown = page.locator(locator.countryDropdown);
        this.stateDropdown = page.locator(locator.stateDropdown);

        this.searchButton = page.locator(locator.searchButton);

        this.createNewAccountButton =
            page.locator(locator.createNewAccountButton);

        this.companyAccountOption =
            page.locator(locator.companyAccountOption);
    }

    async enterAccountInformation(data) {

        await this.fill(this.companyName, data.companyName);

        if (!await this.companyExactMatch.isChecked()) {
            await this.companyExactMatch.check();
        }

        await this.selectByVisibleText(
            this.countryDropdown,
            data.country
        );

        await this.selectByVisibleText(
            this.stateDropdown,
            data.state
        );
    }

    async clickSearch() {
        await this.click(this.searchButton);
    }

    async clickCreateNewAccount() {
        await this.click(this.createNewAccountButton);
    }

    async selectCompanyAccountType() {
        await this.click(this.companyAccountOption);
    }

    async createCompanyAccount() {
        await this.clickCreateNewAccount();
        await this.selectCompanyAccountType();
    }
}

module.exports = AccountCreationPage;