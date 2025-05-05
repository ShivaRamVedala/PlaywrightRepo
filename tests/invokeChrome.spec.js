const { test } = require('@playwright/test');

test('Invoke Browser', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.close();
    await browser.close();

});