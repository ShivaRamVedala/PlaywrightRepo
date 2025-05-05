


const infoalert = await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']");
    infoalert.click();
    await page.waitForTimeout(3000);
    page.once('dialog', async dialog => {
        console.log(dialog.message);
        await dialog.accept();
    });

    const { test } = require('@playwright/test');
 
test('Alert scenario', async ({ browser }) => {
  // Create a new browser context (new browser instance)
  const context = await browser.newContext();
 
  // Create a new page
  const page = await context.newPage();
 
  // Launch browser and navigate to the page
  await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
// Information Alert
 
//alert.accept =- Ok button
//alert.dismiss cancel button
//alert.fill() - entering text
 
//Accept Alert
const infoalert = await page.locator("button[class='btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900']");
    infoalert.click();
    await page.waitForTimeout(3000);
    page.once('dialog', async dialog => {
        console.log(dialog.message);
        await dialog.accept();
    });
 
    //Confirm Alert
  await page.close();
  await context.close();
});