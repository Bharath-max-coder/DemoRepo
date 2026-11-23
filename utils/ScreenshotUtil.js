After(async function (scenario) {

 if (scenario.result.status === 'FAILED') {

   await this.page.screenshot({

      path:
      `test-results/${Date.now()}.png`,

      fullPage:true

   });
 }

 await this.browser.close();
});