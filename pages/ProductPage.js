const CommonActions = require('../utils/CommonActions');
const locator = require('../locators/ProductLocators');

class ProductPage extends CommonActions {

    constructor(page) {

        super(page);

        this.startDate = page.locator(locator.startDate);

        this.insuranceSum = page.locator(locator.insuranceSum);

        this.meritRating = page.locator(locator.meritRating);

        this.damageInsurance = page.locator(locator.damageInsurance);

        this.euroProtection = page.locator(locator.euroProtection);

        this.legalDefenseInsurance =
            page.locator(locator.legalDefenseInsurance);

        this.courtesyCar = page.locator(locator.courtesyCar);

        this.nextButton = page.locator(locator.nextButton);

        this.priceOptionTab = page.locator(locator.priceOptionTab);
    }

    async enterProductData(data) {

        await this.fill(this.startDate, data.startDate);

        await this.select(this.insuranceSum, data.insuranceSum);

        await this.select(this.meritRating, data.meritRating);

        await this.select(
            this.damageInsurance,
            data.damageInsurance
        );

        if (data.optionalProduct === 'Euro Protection') {

            await this.euroProtection.click();
        }

        if (data.optionalProduct === 'Legal Defense Insurance') {

            await this.legalDefenseInsurance.click();
        }

        await this.select(
            this.courtesyCar,
            data.courtesyCar
        );
    }

    async clickNext() {

        await this.nextButton.click();
    }

    async verifyPriceOptionPage() {

        return await this.priceOptionTab.isVisible();
    }
}

module.exports = ProductPage;