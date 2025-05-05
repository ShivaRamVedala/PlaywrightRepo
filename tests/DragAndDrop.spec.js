const { test } = require('@playwright/test');

test('Drag and Drop', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://demo.guru99.com/test/drag_drop.html");

    const source = page.locator("//section[@id='g-container-main']//li[2]//a[1]");
    const destination = page.locator("#amt7");

    await source.dragTo(destination);

    await page.waitForTimeout(5000);



    await page.close();
    await browser.close();

});