const { test } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test('Slider', async({browser}) => {

    const browserContext = await browser.newContext();

    const page = await browserContext.newPage();

    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");

    await page.evaluate(() => {

        const slider = document.querySelector("input[value='0']");
        slider.value = 3;

        slider.dispatchEvent(new Event('input'));
        slider.dispatchEvent(new Event('change'));

    });

    
    await page.waitForTimeout(5000);

    await page.close();
    // await context.close();
    // await browser.close();
    await browserContext.close();

});