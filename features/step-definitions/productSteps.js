const { Given, When, Then } =require('@cucumber/cucumber');

const { expect } =require('@playwright/test');

const ProductPage =require('../../pages/ProductPage');

const product =require('../../data/productData.json');

Given('User is on Product Data page',async function () {

    await this.page.waitForLoadState('networkidle');

});

When('User enters product details',async function () {

    const productPage =new ProductPage(this.page);

    await productPage.enterProductData(
        product.productData
    );

    await productPage.clickNext();
});

Then('User should navigate to Select Price Option page',async function () {

    const productPage =new ProductPage(this.page);

    await expect( productPage.priceOptionTab).toBeVisible();

});