const { test } = require('@playwright/test');

test('Resizing', async({browser}) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://jqueryui.com/resizable/");

    const frame = await page.frameLocator("//iframe[@class = 'demo-frame']");

    const resize = frame.locator('.ui-resizable-se');

    const box = await resize.boundingBox();

    if (box){

        const {x,y,width,height} = box;

        await page.mouse.move(x + width / 2, y + height / 2);
        
        await page.mouse.down();

        await page.mouse.move(x + 200, y + 200, { steps: 10});

        await page.mouse.up();
    }


    await page.waitForTimeout(5000);

    await page.close();
    await browser.close();

});