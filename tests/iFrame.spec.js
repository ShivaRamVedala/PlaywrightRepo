const { test } = require('@playwright/test');

test('iframe', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://jqueryui.com/checkboxradio/");

    const frame = await page.frameLocator("//iframe[@class='demo-frame']");
    
    await frame.locator("label[for='radio-1'] span[class='ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank']").click();
   
    await page.waitForTimeout(5000);

    await page.close();
    await browser.close();

});