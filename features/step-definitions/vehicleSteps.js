const {Given,When,Then}=require('@cucumber/cucumber');

const VehiclePage =require('../../pages/VehiclePage');

const vehicle =require('../../data/vehicleData.json');

Given('User launches vehicle application',async function(){

 await this.page.goto('https://sampleapp.tricentis.com/101/app.php' );

});

When('User enters vehicle details',async function(){

 const vehiclePage =new VehiclePage(this.page);

 await vehiclePage.enterVehicleData(vehicle.vehicleData);

 await vehiclePage.clickNext();
 
});

Then('User should navigate Insurant Data page', async function () {

    await expect(
        this.page.locator('text=Enter Insurant Data')
    ).toBeVisible();

});