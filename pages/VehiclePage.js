const CommonActions =require('../utils/CommonActions');

const locators =require('../locators/VehicleLocators');

class VehiclePage extends CommonActions {

 constructor(page) {

    super(page);

    this.make =page.locator(locators.make);

    this.enginePerformance =page.locator(locators.enginePerformance);

    this.date =page.locator(locators.manufactureDate);

    this.seats =page.locator(locators.seats);

    this.fuel =page.locator(locators.fuel);

    this.listPrice =page.locator(locators.listPrice);

    this.license =page.locator(locators.license);

    this.mileage =page.locator(locators.mileage);

    this.nextButton =page.locator(locators.nextButton);
 }

 async enterVehicleData(vdata){

    await this.select(this.make,data.make);

    await this.fill(this.enginePerformance,data.enginePerformance);

    await this.fill( this.date, data.dateOfManufacture );

    await this.select(this.seats,data.numberOfSeats);

    await this.select(this.fuel,data.fuelType);

    await this.fill(this.listPrice,data.listPrice);

    await this.fill(this.license,data.licensePlate);

    await this.fill(this.mileage, data.annualMileage );
 }

 async clickNext(){

   await this.click(this.nextButton);
 }
 
 async isInsurantPageDisplayed() {
    return await this.page.locator('#enterinsurantdata').isVisible();
}

}

module.exports = VehiclePage;