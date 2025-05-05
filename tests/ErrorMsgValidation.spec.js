const { test, expect } = require('@playwright/test');

test('Resizing', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://www.saucedemo.com/");

    await page.fill('#user-name', 'standard_user');
    await page.waitForTimeout(3000);
    await page.locator('#password').click();
    await page.keyboard.type('sample_text');
    await page.waitForTimeout(3000);
    await page.locator('#login-button').click();
    const errorLocator = page.locator("//h3[contains(text(),'Epic sadface: Username and password do not match any user in this service')]");
    await expect(errorLocator).toBeVisible();
    await expect(errorLocator).toHaveText('Epic sadface: Username and password do not match any user in this service');    
    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();

});