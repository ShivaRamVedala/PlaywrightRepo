const { test } = require('@playwright/test');

test('iframe', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.tutorialspoint.com/selenium/practice/frames.php");

    const frame = await page.frameLocator("//body//main//iframe[1]");
    
    const headerTitle = await frame.locator("//title[normalize-space()='Selenium Practice - Web Tables']").textContent();
    console.log("Header title:", headerTitle);










    
//     const iframeElement = await page.locator("//body//main//iframe[1]");
// const iframeTitle = await iframeElement.getAttribute('Selenium Practice - Web Tables');
// console.log("Iframe title:", iframeTitle);


   
    await page.waitForTimeout(5000);

    await page.close();
    await browser.close();

});