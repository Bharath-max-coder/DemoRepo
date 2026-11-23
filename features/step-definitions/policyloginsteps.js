const {Given, When, Then} = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');
const policylogins = require('../../data/policylogin.json');
Given('User launches vehicle application', async function () {
    await this.page.goto('https://sampleapp.tricentis.com/101/app.php');
});

When('User enters contactlogin details', async function () {
    const policyLoginPage = new PolicyLoginPage(this.page);
    await policyLoginPage.enterLoginDetails(policylogins.policyloginData);
    await policyLoginPage.clickLogin();
}); 
 Then('User should navigate userscreen page', async function () {
    const policyLoginPage = new PolicyLoginPage(this.page);
    await expect(policyLoginPage.isUserScreenDisplayed()).toBeTruthy();
 }) 

 