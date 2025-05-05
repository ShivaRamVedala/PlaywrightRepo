
//create a new browser context( new browser instance)
const context = await browser.newContext();
//create a new page
const page = await context.newPage();

//Launch the url
await page.goto("https://www.amazon.com");


await page.locator