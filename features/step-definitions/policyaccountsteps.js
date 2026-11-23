const { Given, When, Then } = require('@cucumber/cucumber');
const AccountCreationPage = require('../pages/AccountCreationPage');
const accountData = require('../../data/accountData.json');

let accountCreationPage;

Given('User is on Account Creation page', async function () {

    accountCreationPage =
        new AccountCreationPage(this.page);
});

When('User enters account information', async function () {

    await accountCreationPage.enterAccountInformation(
        accountData.accountInfo
    );
});

When('User searches for existing account', async function () {

    await accountCreationPage.clickSearch();
});

Then('User creates a new account', async function () {

    await accountCreationPage.createCompanyAccount();
});